import csv



def row_without_space(row, index):
	new_list = []
	new_list = [item for item in row[index] if item != '']
	return new_list

def get_parties(rows):
	new_row = row_without_space(rows, 2)
	parties = []
	for i in new_row[7:]:	
		parties.append(i)
	return parties
		
def read_csv():
		with open ('btw17_kerg.csv', 'r') as cvs_file:
			csv_reader = csv.reader(cvs_file, delimiter=';')
			rows = list(csv_reader) 
			parties = get_parties(rows)
			print(parties)










def reader():
	print("reader")