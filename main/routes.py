from flask import render_template, url_for, flash, redirect
from main import app, db, bcrypt
from main.forms import SignForm, LoginForm
from main.models import User, Course

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')



@app.route("/signup", methods=['GET', 'POST'])
def signup(): # signup route
    form = SignForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username = form.username.data, email = form.email.data, password = hashed_password)
        db.session.add(user)
        db.session.commit()
        flash(f'Your account has been created! You are now able to log in!', 'success')
        return redirect(url_for('login'))
    return render_template('signup.html', title='Register', form=form)


@app.route("/login", methods=['GET', 'POST'])
def login(): # login route
    form = LoginForm()
    if form.validate_on_submit():
        if form.email.data == 'admin@blog.com' and form.password.data == 'password':
            flash('You have been logged in!', 'success')
            return redirect(url_for('home'))
        else:
            flash('Login Unsuccessful. Please check username and password', 'danger')
    return render_template('login.html', title='Login', form=form) 
