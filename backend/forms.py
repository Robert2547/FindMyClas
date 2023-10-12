from flask_wtf import FlaskForm
from flask_login import current_user
from wtforms import StringField, PasswordField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError
from backend.models import User


class SignForm(FlaskForm):  # signup form
    username = StringField(
        "Username", validators=[DataRequired(), Length(min=2, max=20)]
    )
    email = StringField("Email", validators=[DataRequired(), Email()])
    password = PasswordField("Password", validators=[DataRequired()])
    confirm_password = PasswordField(
        "Confirm Password", validators=[DataRequired(), EqualTo("password")]
    )
    submit = SubmitField("Sign Up")

    # Custom validation for username
    def validate_username(self, username):
        # If username does not else it will be set to none
        user = User.query.filter_by(username=username.data).first()

        if user:  # If username already exist throw validation error
            raise ValidationError(
                "That username is taken. Please choose a different one"
            )

    # Custom validation for email
    def validate_email(self, email):
        # If username does not else it will be set to none
        user = User.query.filter_by(email=email.data).first()

        if user:  # If username already exist throw validation error
            raise ValidationError("That email is taken. Please choose a different one")


class LoginForm(FlaskForm):  # login form
    email = StringField("Email", validators=[DataRequired(), Email()])
    password = PasswordField("Password", validators=[DataRequired()])
    remember = BooleanField("Remember Me")
    submit = SubmitField("Login")


class UpdateAccountForm(FlaskForm):  # update account form
    username = StringField(
        "Username", validators=[DataRequired(), Length(min=2, max=20)]
    )
    email = StringField("Email", validators=[DataRequired(), Email()])

    submit = SubmitField("Update")

    # Custom validation for username
    def validate_username(self, username):
        #Only do validate check if username is different from current username
        if username.data != current_user.username:
            # If username does not else it will be set to none
            user = User.query.filter_by(username=username.data).first()

        if user:  # If username already exist throw validation error
            raise ValidationError(
                "That username is taken. Please choose a different one"
            )

    # Custom validation for email
    def validate_email(self, email):
        #  Only do validate check if email is different from current email
        if email.data != current_user.email: 
            # If username does not else it will be set to none
            user = User.query.filter_by(email=email.data).first()

        if user:  # If username already exist throw validation error
            raise ValidationError("That email is taken. Please choose a different one")
        
