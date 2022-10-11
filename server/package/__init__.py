from flask import Flask, request, redirect
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import LoginManager

db = SQLAlchemy()
DB_NAME = "database.db"

from .models import Task, User


def create_app():
    app = Flask(__name__, static_folder=".../to-do-list/build", static_url_path="")
    app.config["SECRET_KEY"] = "ADSLJKLJSIJAjlkalp98493034idfjaa"
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DB_NAME}"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    from .models import Task, User

    db.init_app(app)
    create_database(app)
    def load_user(id):
        return User.get(int(id))

    CORS(app)
    return app


def create_database(app):
    if not path.exists(f"package/{DB_NAME}"):
        db.create_all(app=app)
        print("database created")
