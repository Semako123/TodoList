from datetime import datetime
from package import create_app
from package import db, Task
from flask import request
from sqlalchemy.sql import func
from flask_cors import cross_origin

app = create_app()


@app.route("/addnote", methods=["POST", "GET"])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def add_note():
    if request.method == "POST":
        new_entry = request.get_json()
        print(new_entry)
        deadline = datetime.strptime(new_entry['deadline'], '%Y-%m-%dT%H:%M')
        new_task = Task(title=new_entry['task'], deadline=deadline)
        db.session.add(new_task)
        db.session.commit()
        return "Task successfully added to database"
    return "404 invalid method (route)"

@app.route("/fetch-tasks")
def fetchTasks():
    tasks = Task.query.all()
    tasks_obj = {'data':[]}
    for task in tasks:
        date = task.deadline.strftime('%c')
        tasks_obj["data"].append({'title':task.title, 'deadline':date, 'id':task.id})
    print(tasks_obj)
    return tasks_obj; 

if __name__ == "__main__":
    app.run(debug=True)
