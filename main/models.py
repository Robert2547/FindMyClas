from main import db

class User(db.Model): # database model for users 
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    image_file = db.Column(db.String(20), nullable=False, default='default.jpg')
    password = db.Column(db.String(25), nullable=False)

    def __repr__(self): # how our object is printed
        return f"User('{self.username}', '{self.email}', '{self.image_file}')"
    
class Course(db.Model): # database model for courses
    id = db.Column(db.Integer, primary_key=True)
    course_name = db.Column(db.String(20), unique=True, nullable=False)
    course_code = db.Column(db.String(20), unique=True, nullable=False)

    def __repr__(self): # how our object is printed
        return f"Course('{self.course_name}', '{self.course_code}')"
    