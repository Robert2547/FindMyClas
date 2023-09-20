from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField


class RegistrationForm(FlaskForm):
    username = StringField(
        "Username", validators=["DataRequired", "Length(min=2, max=20)"]
    )
    email = StringField("Email", validators=["DataRequired", "Email", "Length(max=50)"])
    password = PasswordField(
        "Password", validators=["DataRequired", "Length(min=6, max=20)"]
    )
    confirm_password = PasswordField(
        "Confirm Password", validators=["DataRequired", "EqualTo(password)"]
    )
    sumbit = SubmitField("Sign Up")


class LoginIn(FlaskForm):
    email = StringField("Email", validators=["DataRequired", "Email", "Length(max=50)"])
    password = PasswordField(
        "Password", validators=["DataRequired", "Length(min=6, max=20)"]
    )
    remember = BooleanField("Remember Me")
    sumbit = SubmitField("Login in")
