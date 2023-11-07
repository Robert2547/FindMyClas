from backend import db, login_manager
from flask_login import UserMixin


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


class User(db.Model, UserMixin):  # database model for users
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(25), nullable=False)


    def __repr__(self):  # how our object is printed
        return f"User('{self.username}', '{self.email}')"


class Course(db.Model):  # database model for courses
    id = db.Column(db.Integer, primary_key=True)
    course_name = db.Column(db.String(20), unique=True, nullable=False)
    course_code = db.Column(db.String(20), unique=True, nullable=False)

    def __repr__(self):  # how our object is printed
        return f"Course('{self.course_name}', '{self.course_code}')"
