from . import db

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task_title = db.Column(db.String(200))
    deadline = db.Column(db.DateTime(timezone=True))
