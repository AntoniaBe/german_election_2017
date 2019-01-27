import csv
from app.models import Party, Federal_State, Constituency, Result



def get_party_votes(row, party):
	results = []

	index = 19

	first_vote_total = row[15]
	second_vote_total = row[17]

	while index < len(row) - 1:

		first_vote = 0
		second_vote = 0

		try:
			if row[index]:
				first_vote = row[index]


		except IndexError:
			pass

		try:
			if row[index + 1]:
				second_vote = row[index + 1]

		except IndexError:
			pass

		results.append(Result(first_vote = first_vote, second_vote = second_vote, first_vote_total = first_vote_total, second_vote_total = second_vote_total , party = party[int((index - 19) / 4 )] ))
		index += 4

		#print(results)
	return results





def row_without_space(row, index):
	new_list = []
	new_list = [item for item in row[index] if item != '']
	return new_list

def get_parties(rows):
	new_row = row_without_space(rows, 2)
	parties = []
	for i in new_row[7:]:
		parties.append(Party(name=i))
	return parties

def read_csv(federal_territory):
		with open ('btw17_kerg.csv', 'r') as cvs_file:
			csv_reader = csv.reader(cvs_file, delimiter=';')
			rows = list(csv_reader)
			parties = get_parties(rows)
			federal_state = Federal_State()
			constituencies = []

			#print(parties)
			for row in rows:
				try:
					if row[0] == '99':
						federal_territory.id = row[0]
						federal_territory.name = row[1]
						federal_territory.results = get_party_votes(row, parties)
					elif row[2] == '99':
						federal_state.id = row[0]
						federal_state.name = row[1]
						federal_state.results= get_party_votes(row, parties)
						federal_territory.federal_states.append(federal_state)
						federal_state = Federal_State()
						constituencies = []
					elif int(row[2]) in range(17):
						results = get_party_votes(row, parties)
						constituencies.append(Constituency(name = row[1], id = row[0], federal_state = federal_state, results = results))



				except IndexError:
					pass

				except ValueError:
					pass



		return federal_territory















def reader():
	print("reader")
