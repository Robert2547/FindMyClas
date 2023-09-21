from flask import Flask, render_template, url_for, flash, redirect
from forms import SignUp, LoginForm
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__) 
app.config["SECRET_KEY"] = "dee056056241bb46c750468e771c98c2" # secret key to prevent cross-site request forgery attacks
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app) # database instance

class User(db.Model): # database model
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    image_file = db.Column(db.String(20), nullable=False, default='default.jpg')
    password = db.Column(db.String(60), nullable=False)

    # how object is printed
    def __repr__(self) -> str:
        return f"User('{self.username}'), '{self.email}', '{self.image_file}'"
    


@app.route("/dashboard")
@app.route("/")
def dashboard(): 
    render_template("dashboard.html")


@app.route("/signup")
def signup():
    form = RegistrationForm()
    # if form is valid, redirect to home page, else render signup page
    if form.validate_on_submit():
        flash(f'Account created for {form.username.data}!', 'sucess')
        return redirect(url_for('home'))
    return render_template("signup.html", title="Sign Up", form=form)



@app.route("/login")
def login():
    form = LoginForm()
    if form.validate_on_submit():
        if form.email.data == 'admin@blog.com' and form.password.data == 'password':
            flash('You have been logged in!', 'success')
            return redirect(url_for('home'))
        else:
            flash('Login Unsucessful. Please check username and password', 'danger')
    return render_template("login.html", title="Login In", form=form)


if __name__ == "__main__":
    app.run(debug=True)
