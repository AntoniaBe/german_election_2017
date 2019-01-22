import csv
from app.models import Party

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
	try:
		with open ('btw17_kerg.csv', 'r') as cvs_file:
			csv_reader = csv.reader(cvs_file, delimiter=';')
			rows = list(csv_reader) 
			parties = get_parties(rows)
			#print(parties)
	finally:
		cvs_file.close()
	return federal_territory


			

		










def reader():
	print("reader")