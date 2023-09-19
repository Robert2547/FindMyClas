from flask import Flask, render_template, url_for
from forms import RegistrationForm, LoginIn

app = Flask(__name__)

app.config["SECRET_KEY"] = "dee056056241bb46c750468e771c98c2"


@app.route("/dashboard")
@app.route("/")
def dashboard():
    render_template("dashboard.html")


@app.route("/login")
def login():
    SignForm = RegistrationForm()
    render_template("login.html", title="Sign Up", form=SignForm)


@app.route("/signup")
def signup():
    LoginForm = LoginIn()
    render_template("signup.html", title="Login In", form=LoginForm)


if __name__ == "__main__":
    app.run(debug=True)
