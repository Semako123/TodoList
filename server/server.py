from audioop import cross
from datetime import datetime
from package import create_app
from package import db, Task, User
from flask import request, redirect
from flask_cors import cross_origin
from werkzeug.security import generate_password_hash, check_password_hash
from flask.helpers import send_from_directory


app = create_app()


@app.route("/addnote", methods=["POST", "GET"])
@cross_origin()
def add_note():
    if request.method == "POST":
        new_entry = request.get_json()
        deadline = datetime.strptime(new_entry["deadline"], "%Y-%m-%dT%H:%M")
        new_task = Task(title=new_entry["task"], deadline=deadline)
        db.session.add(new_task)
        db.session.commit()
        return "Task successfully added to database"
    return "404 invalid method (route)"


@app.route("/fetch-tasks")
@cross_origin()
def fetchTasks():
    tasks = Task.query.order_by(Task.deadline).all()
    tasks_obj = {"data": []}
    for task in tasks:
        date = task.deadline.strftime("%c")
        tasks_obj["data"].append({"title": task.title, "deadline": date, "id": task.id})
    return tasks_obj


@app.route("/delete", methods=["POST", "GET"])
@cross_origin()
def deleteTask():
    data = request.get_json()
    Task.query.filter_by(id=data["id"]).delete()
    db.session.commit()
    return "Task successfully deleted from database"


@app.route("/update", methods=["POST", "GET"])
@cross_origin()
def updateTask():
    data = request.get_json()
    deadline = datetime.strptime(data["deadline"], "%Y-%m-%dT%H:%M")
    Task.query.filter_by(id=data["id"]).update(
        dict(title=data["title"], deadline=deadline)
    )
    db.session.commit()
    return "Task successfully updated in database"


@app.route("/signup", methods=["POST", "GET"])
@cross_origin()
def signup():
    data = request.get_json()
    user = User.query.filter_by(username=data["username"]).first()
    print(user)
    if not user:
        user = User(
            username=data["username"],
            password=generate_password_hash(data["password"], method="sha256"),
        )
        db.session.add(user)
        db.session.commit()
        return "User signed in"
    else:
        return "Username already exist"


@app.route("/login", methods=["POST", "GET"])
@cross_origin()
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data["username"]).first()
    password = data["password"]
    if user:
        if check_password_hash(user.password, password):
            return "You are now logged in"
        else:
            return "Incorrect password"
    else:
        return "Username does not exist"

@app.route("/")
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(debug=True)
