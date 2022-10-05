from crypt import methods
from datetime import datetime
from package import create_app
from package import db, Task
from flask import request
from sqlalchemy.sql import func
from flask_cors import cross_origin

app = create_app()


@app.route("/addnote", methods=["POST", "GET"])
@cross_origin(origin="*", headers=["Content-Type", "Authorization"])
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
def fetchTasks():
    tasks = Task.query.order_by(Task.deadline).all()
    tasks_obj = {"data": []}
    for task in tasks:
        date = task.deadline.strftime("%c")
        tasks_obj["data"].append({"title": task.title, "deadline": date, "id": task.id})
    return tasks_obj


@app.route("/delete", methods=["POST", "GET"])
def deleteTask():
    data = request.get_json()
    Task.query.filter_by(id=data["id"]).delete()
    db.session.commit()
    return "Task successfully deleted from database"


@app.route("/update", methods=["POST", "GET"])
def updateTask():
    data = request.get_json()
    deadline = datetime.strptime(data["deadline"], "%Y-%m-%dT%H:%M")
    Task.query.filter_by(id=data["id"]).update(
        dict(title=data["title"], deadline=deadline)
    )
    db.session.commit()
    return "Task successfully updated in database"


if __name__ == "__main__":
    app.run(debug=True)
