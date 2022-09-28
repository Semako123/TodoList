from crypt import methods
from curses.ascii import NUL
from operator import methodcaller
from package import create_app
from package import db, Task
from flask import request
from sqlalchemy.sql import func

app = create_app()

@app.route("")

@app.route("/addnote", methods=["POST", "GET"])
def add_note():
    if request.method == "POST":
        new_entry = request.get_json()
        print(new_entry)
        new_task = Task(task_title=new_entry['task'], deadline=new_entry['deadline'])
        db.session.add(new_task)
        db.session.commit()
        return "Task successfully added to database"
    return None


if __name__ == "__main__":
    app.run(debug=True)
