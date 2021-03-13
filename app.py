from flask import Flask, render_template, request, send_from_directory
import flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:0350@localhost/FinalProject'
db = SQLAlchemy(app)


class Data(db.Model):
    __tablename__ = "data"
    id = db.Column(db.Integer, primary_key=True)
    name_ = db.Column(db.String(30), unique=True)
    email_ = db.Column(db.String(120), unique=True)
    phone_ = db.Column(db.String(12), unique=True)
    subject_ = db.Column(db.String(50), unique=True)
    textArea_ = db.Column(db.String(200), unique=True)

    def __init__(self, name_, email_, phone_, subject_, textArea_):
        self.name_ = name_
        self.email_ = email_
        self.phone_ = phone_
        self.subject_ = subject_
        self.textArea_ = textArea_


@app.route("/")
def help():
    return render_template("help.html")


@app.route("/index", methods=['POST'])
def index():
    if request.method == 'POST':
        name = request.form["name"]
        email = request.form["email-name"]
        phone = request.form["phone"]
        subject = request.form["subject"]
        textArea = request.form["message"]
        print(request.form)
        data = Data(name, email, phone, subject, textArea)
        db.session.add(data)
        db.session.commit()
        return render_template("index.html")


@app.route('/Images/<path:path>')
def images(path):
    return send_from_directory('Images', path)


if __name__ == '__main__':
    app.debug = True
    app.run()
