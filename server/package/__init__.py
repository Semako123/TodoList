from flask import Flask, request, redirect
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from os import path

db = SQLAlchemy()
DB_NAME = "database.db"

from .models import Task


def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "ADSLJKLJSIJAjlkalp98493034idfjaa"
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DB_NAME}"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.init_app(app)
    create_database(app)
    CORS(app)
    return app


def create_database(app):
    if not path.exists(f"package/{DB_NAME}"):
        db.create_all(app=app)
        print("database created")
