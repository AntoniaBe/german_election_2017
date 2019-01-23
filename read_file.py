import csv
from app.models import Party, Federal_State, Constituency, Result



def get_party_votes(row, party):
	print(row, party)


	    		




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
					elif row[2] == '99': 
						federal_state.id = row[0]
						federal_state.name = row[1]
						federal_territory.federal_states.append(federal_state)
						federal_state = Federal_State()
						constituencies = []
					elif int(row[2]) in range(17): 
						get_party_votes(row, parties)
						constituencies.append(Constituency(name = row[1], id = row[0], federal_state = federal_state))



				except IndexError:
					pass

				except ValueError:
					pass


 

		#print(federal_territory)
		return federal_territory


			

		










def reader():
	print("reader")