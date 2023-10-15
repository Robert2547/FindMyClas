from flask import jsonify, render_template, url_for, flash, redirect, request
from backend import app, db, bcrypt
from backend.forms import SignForm, LoginForm, UpdateAccountForm
from backend.models import User, Course
from flask_login import login_user, current_user, logout_user, login_required
from flask_wtf.csrf import CSRFError, generate_csrf, validate_csrf


@app.route("/get_csrf_token", methods=["GET", "POST"])
def get_csrf_token():
    csrf_token = generate_csrf()
    return jsonify({"csrf_token": csrf_token})


@app.route("/signup", methods=["POST", "GET"])
def signup():  # signup route
    if current_user.is_authenticated:  # check if user already login
        return redirect("/")

    data = request.get_json()  # get data from request

    # Extract data from the JSON request
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    confirm_password = data.get("confirm_password")
    csrf_token = data.get("csrf_token")

    try:
        validate_csrf(csrf_token)

        form = SignForm(
            data={
                "username": username,
                "email": email,
                "password": password,
                "confirm_password": confirm_password,
            }
        )

        # Manually trigger form validation
        form.validate()

        if form.errors:  # Check for validation errors
            errors = {field.name: field.errors for field in form}
            app.logger.info("errors: %s", errors)
            flash("Signup Unsuccessful. Please check your input", "danger")
            return jsonify({"errors": errors}), 400

        hashed_password = bcrypt.generate_password_hash(form.password.data).decode(
            "utf-8"
        )
        user = User(username=username, email=email, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        flash("Your account has been created! You can now log in.", "success")
        return (
            jsonify({"message": "Your account has been created! You can now log in."}),
            200,
        )

    except CSRFError:  # Handle CSRF validation error
        app.logger.error("CSRF validation failed")
        return jsonify({"error": "CSRF validation failed"}), 400


@app.route("/login", methods=["GET", "POST"])
def login():  # login route
    if current_user.is_authenticated:  # check if user already login
        return redirect(url_for("home"))

    form = LoginForm()

    if form.validate_on_submit():  # check if input is valid
        user = User.query.filter_by(
            email=form.email.data
        ).first()  # check if user exist
        if user and bcrypt.check_password_hash(
            user.password, form.password.data
        ):  # check if password is correct
            login_user(user, remember=form.remember.data)  # login user
            next_page = request.args.get(
                "next"
            )  # take user to next_page if it exist, else it will be null

            # return redirect(next_page) if next_page else redirect(url_for('home'))# redirect to next_page if it exist else redirect to home

        else:
            flash(
                "Login Unsuccessful. Please check email and password", "danger"
            )  # flash error message
            # return something here that will redirect user to login page

    return render_template("login.html", title="Login", form=form)


# This route will logout the user
@app.route("/logout")
def logout():
    logout_user()  # Logout user and return them to the home screen
    return redirect(url_for("home"))


# This route will display the user's account information
@app.route("/update", methods=["GET", "POST"])
@login_required  # Need user to login to access this route
def update():
    form = UpdateAccountForm()  # This will update the user's account information

    if form.validate_on_submit():  # This will update the user's account information
        current_user.username = form.username.data
        current_user.email = form.email.data
        db.session.commit()
        flash("Your account has been updated!", "success")
        return redirect(
            url_for("account")
        )  # Redirect user to account page after updating their account information

    elif (
        request.method == "GET"
    ):  # This will prepopulate the form with the user's current information
        form.username.data = current_user.username
        form.email.data = current_user.email

    image_file = url_for(
        "static", filename="profile_pics/" + current_user.image_file
    )  # This will display the user's profile picture
    return render_template(
        "account.html", title="Account", image_file=image_file, form=form
    )  # This will render the account page


@app.route(
    "/account", methods=["GET", "POST"]
)  # This route will display the user's account information
@login_required  # Need user to login to access this route
def account():
    user_data = {
        "id": current_user.id,
        "username": current_user.username,
        "email": current_user.email,
        "profile_image": current_user.profile_image,
    }

    return jsonify(user_data)


@app.route("/authorized")
def authorized():
    return current_user.is_authenticated
