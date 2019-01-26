from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import jsonify



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


from app import models
db.init_app(app)

from flask import session
from app.models import Federal_Territory, Party, Constituency, Result
from read_file import read_csv


with app.app_context():
	db.drop_all()
	db.create_all()
	federal_territory = Federal_Territory()
	party = Party()
	
	federal_territories = read_csv(federal_territory)
	db.session.add(federal_territories)
	db.session.commit()



@app.route('/api/federal_territory', methods=['GET'])
def federal_territories():

    data = []
    federal_territories = Federal_Territory.query.all()

    for ft in federal_territories:
    	data.append({'id': ft.id, 'name': ft.name})

    return jsonify({'data': data})

@app.route('/api/federal_territory/<int:federal_state_id>/constituencies', methods=['GET'])
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

app.run(debug=True)