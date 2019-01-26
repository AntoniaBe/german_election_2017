from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import jsonify, send_from_directory
import os

BASE_URL = os.path.abspath(os.path.dirname(__file__))
CLIENT_APP_FOLDER = os.path.join(BASE_URL, "../angularApp/src")

print('BASE_URL ' + BASE_URL)
print('CLIENT_APP_FOLDER ' + CLIENT_APP_FOLDER)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


from app import models
db.init_app(app)

from flask import session
from app.models import Federal_Territory, Party, Constituency, Result, Federal_State
from read_file import read_csv


with app.app_context():
	db.drop_all()
	db.create_all()
	federal_territory = Federal_Territory()
	party = Party()

	federal_territories = read_csv(federal_territory)
	db.session.add(federal_territories)
	db.session.commit()



@app.route('/api/federal_states', methods=['GET'])
def federal_states():

    data = []
    federal_states = Federal_State.query.all()

    for fs in federal_states:
    	data.append({'id': fs.id, 'name': fs.name})

    return jsonify({'data': data})

@app.route('/api/federal_states/<int:federal_state_id>/constituencies', methods=['GET'])
def constituencies(federal_state_id):
	constituencies = Constituency.query.filter_by(federal_state_id=federal_state_id).all()
	data = []

	for c in constituencies:
		data.append({'id': c.id, 'name': c.name})
	return jsonify({'data': data})

@app.route('/api/constituency/<int:constituency_id>/results', methods=['GET'])
def electorial_results_party(constituency_id):
     results = Result.query.all()
     data = []
     final_data = []

     for r in results:
     	if r.constituency_id == constituency_id:
     		data.append(r)

     for r in data:
     	final_data.append(
     		{ 'partyName': r.party.name, 'firstVote': r.first_vote, 'secondVote': r.second_vote, 'firstVoteTotal': r.first_vote_total, 'secondVoteTotal': r.second_vote_total})
     return jsonify({'data': final_data})

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')  # Catch All urls, enabling copy-paste url
def home(path):
    return send_from_directory(CLIENT_APP_FOLDER, 'index.html')


app.run(debug=True)
