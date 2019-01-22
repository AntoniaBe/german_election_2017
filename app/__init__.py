from flask import Flask
from flask_sqlalchemy import SQLAlchemy




app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


from app import models
db.init_app(app)

from flask import session
from app.models import Federal_Territory 
from read_file import read_csv


with app.app_context():
	db.drop_all()
	db.create_all()
	federal_territory = Federal_Territory()
	federal_territory = read_csv(federal_territory)
	db.session.add(federal_territory)
	db.session.commit()


app.run(debug=True)
