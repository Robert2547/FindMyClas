from flask import Flask, render_template, url_for, flash, redirect
from forms import RegistrationForm, LoginForm
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__) 

app.config["SECRET_KEY"] = "dee056056241bb46c750468e771c98c2" # secret key to prevent cross-site request forgery attacks
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'

db = SQLAlchemy(app) # database instance

@app.route("/dashboard") 
@app.route("/")
def dashboard(): 
    return render_template("dashboard.html")


@app.route("/signup", methods=['GET', 'POST'])
def signup():
    form = RegistrationForm()
    # if form is valid, redirect to home page, else render signup page
    if form.validate_on_submit():
        flash(f'Account created for {form.username.data}!', 'sucess')
        return redirect(url_for('home'))
    render_template("signup.html", title="Sign Up", form=form)



@app.route("/login", methods=['GET', 'POST'])
def login():
    form = LoginForm() # create instance of LoginForm
    if form.validate_on_submit(): # if form is valid
        if form.email.data == 'admin@blog.com' and form.password.data == 'password': # if email and password are correct
            flash('You have been logged in!', 'success')
            return redirect(url_for('home')) # redirect to home page
        else:
            flash('Login Unsucessful. Please check username and password', 'danger')
    return render_template("login.html", title="Login In", form=form)


if __name__ == "__main__":
    app.run(debug=True)
