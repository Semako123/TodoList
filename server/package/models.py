from . import db


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250))
    deadline = db.Column(db.DateTime(timezone=True))
