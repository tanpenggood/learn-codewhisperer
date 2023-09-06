# Parse a CSV string of songs and return a list of dictionaries
# Fields includes artist, album, title and year
# Ignore lines starting with #
def parse_csv(csv_string):
    songs = []
    for line in csv_string.splitlines():
        if line.startswith('#'):
            continue
        fields = line.split(',')
        songs.append({
            'artist': fields[0],
            'album': fields[1],
            'title': fields[2],
            'year': fields[3]
        })
    return songs