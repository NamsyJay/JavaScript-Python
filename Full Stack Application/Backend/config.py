from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__) # initialises the flask application
CORS(app) # disables errors

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///clfronsdatabase.db" # initialises and specifies the location of our  database
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False  #  Disables tracking changes to database. 

db = SQLAlchemy(app) # creates a database instance