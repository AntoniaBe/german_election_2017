import csv
from app.models import Party, Federal_State

def get_votes(rows,parties):
	new_row = row_without_space(rows, 3)
	results= []
	index = 3
	while index < len(new_row) - 1:
		first_vote = 0
		if new_row[index]:
			first_vote = new_row[index]
			#print(first_vote)

	    		




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
			#print(parties)
			for column in rows:
				try:
					if column[0] == '99':
						federal_territory.id = column[0]
						federal_territory.name = column[1]
					elif column[2] == '99': 
						federal_state.id = column[0]
						federal_state.name = column[1]
						federal_territory.federal_states.append(federal_state)
						federal_state = Federal_State()


				except IndexError:
					pass

				except ValueError:
					pass


 

		print(federal_territory)
		return federal_territory


			

		










def reader():
	print("reader")