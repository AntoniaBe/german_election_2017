from app import db

# Wahlkreise
class Constituency(db.Model):
	__tablename__ = 'constituencies'
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String)

	federal_state_id =  db.Column(
		db.Integer,
		db.ForeignKey('federal_states.id'),
		nullable=False
	)

	federal_state = db.relationship("Federal_State", back_populates="constituencies")

	results = db.relationship('Result', backref='constituency', lazy=True) 


	def __repr__(self):
		return (
			f'{self.__class__.__name__}('
			f'{self.id},{self.name},{self.federal_state_id},{self.election_results!r})'
		)


# Parteien
class Party(db.Model):
	__tablename__ = 'parties'
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String)

	def __repr__(self):
		return (
			f'{self.__class__.__name__}('
			f'{self.id},{self.name})'
		)


# Bundesländer
class Federal_State(db.Model):
	__tablename__ = 'federal_states'
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String)

	federal_territory_id = db.Column(
		db.Integer,
		db.ForeignKey('federal_territories.id'),
		nullable=False
	)

	constituencies = db.relationship(
		'Constituency',
		lazy=True
	)

	results = db.relationship('Result', backref='federal_state', lazy=True) 



	def __repr__(self):
		return (
			f'{self.__class__.__name__}('
			f'{self.id},{self.name},{self.results!r},{self.constituencies!r})'
		)


class Result(db.Model):
	__tablename__ = 'results'
	id = db.Column(db.Integer, primary_key=True)
	first_vote = db.Column(db.Integer)
	second_vote = db.Column(db.Integer)
	first_vote_total = db.Column(db.Integer)
	second_vote_total = db.Column(db.Integer)

	party = db.relationship(Party)

	constituency_id = db.Column(db.Integer, db.ForeignKey('constituencies.id'), nullable=True)
	party_id = db.Column(db.Integer, db.ForeignKey('parties.id'))
	federal_state_id = db.Column(db.Integer, db.ForeignKey('federal_states.id'), nullable=True)
	federal_territory_id = db.Column(db.Integer, db.ForeignKey('federal_territories.id'), nullable=False)


	def __repr__(self):
		return (
			f'{self.__class__.__name__}('
			f'{self.id},{self.name}, {self.first_vote}, {self.second_vote}, {self.first_vote_total},{self.second_vote_total},{self.party!r})'
		)


# Bundesgebiet
class Federal_Territory(db.Model):
	__tablename__ = 'federal_territories'
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String)
	federal_states = db.relationship('Federal_State', lazy=True)

	results = db.relationship('Result', backref='federal_territory', lazy=True)


	def __repr__(self):
		return (
			f'{self.__class__.__name__}('
			f'{self.id},{self.name},{self.federal_states!r},{self.results!r})'
		)