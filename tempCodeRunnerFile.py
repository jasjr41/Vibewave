from flask import Flask, render_template
from flask_sqlalchemy  import SQLAlchemy
app=Flask(__name__)
app.config ['SQLALCHEMY_DATABASE_URI']= 'sqlite:///login.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False
db = SQLAlchemy(app)
class login(db.Model):
    sno= db.column(db.Integer, primary_key=True)
    username= db.Column(db.String, nullable= 0)
    password= db.Column(db.String, nullable=0)
def __repr__(self)-> str:
    return f"{login}-{password}"
with app.app_context():
    db.create_all()

@app.route('/')
def login():

    db.session.add
    return render_template('login.html')
if __name__ =="__main__":
    app.run (debug=True)