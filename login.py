from flask import Flask, render_template
from flask_sqlalchemy  import SQLAlchemy
app=Flask(__name__)
app.config ['SQLALCHEMY_DATABASE_URI']= 'sqlite:///login.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False
db = SQLAlchemy(app)
class user(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    username= db.Column(db.String, nullable= False)
    password= db.Column(db.String, nullable=False)
def __repr__(self)-> str:
    return f"{username}-{password}"
with app.app_context():
    db.create_all()

@app.route('/')
def user():

    db.session.add
    return render_template('login.html')
if __name__ =="__main__":
    app.run (debug=True)