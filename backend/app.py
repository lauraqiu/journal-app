from flask import Flask, request, jsonify, abort
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# configure SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JSON_SORT_KEYS'] = False

# connect app with SQLAlchemy
db = SQLAlchemy(app)


# create database model
class JournalEntry(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # primary key is unique
    date = db.Column(db.DateTime, default=datetime.now)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)

    # defines how instances of database should be represented as a string (ex. printed out)
    def __repr__(self):
        return '<Journal {}'.format(self.title)


with app.app_context():
    db.create_all()


# add a journal entry
@app.route('/addEntry', methods=['POST'])
def add_entry():
    title = request.json['title']
    content = request.json['content']

    # create a new JournalEntry instance
    new_entry = JournalEntry(title=title, content=content)
    # add entry to database
    db.session.add(new_entry)
    db.session.commit()
    return jsonify(message='Entry added successfully')


# view journal entry
@app.route('/viewEntries', methods=['GET'])
def view_entries():
    entries = JournalEntry.query.all()
    entries_data = []

    for entry in entries:
        entry_data = {
            'id': entry.id,
            'date': entry.date.strftime("%B %d, %Y"),
            'title': entry.title,
            'content': entry.content,
        }
        entries_data.append(entry_data)  # add each entry into list

    return jsonify(entries_data)


# view journal entry using unique entry id
@app.route('/viewEntries/<entry_id>')
def view_entry(entry_id):
    # search in database for entry with matching id
    # if an id is found, it returns the object
    # first_or_404 returns first matching object or raises 404 error
    entry = JournalEntry.query.filter_by(id=entry_id).first_or_404()
    entry_data = {
        'id': entry.id,
        'date': entry.date.strftime("%B %d, %Y"),
        'title': entry.title,
        'content': entry.content
    }
    return jsonify(entry_data)


# delete journal entry
@app.route('/delete/<entry_id>', methods=['DELETE'])
def delete_entry(entry_id):
    # search database to retrieve entry with matching id
    entry = JournalEntry.query.filter_by(id=entry_id).first_or_404()
    if entry:
        db.session.delete(entry)
        db.session.commit()
        return jsonify(message='Entry deleted successfully')
    else:
        abort(404)


# edit journal entry
@app.route('/edit/<entry_id>', methods=['POST'])
def edit_entry(entry_id):
    # search database to retrieve entry with matching id
    entry = JournalEntry.query.filter_by(id=entry_id).first_or_404()

    # update entry with new data
    if entry:
        entry.title = request.json['title']
        entry.content = request.json['content']
        db.session.commit()
        return jsonify(message='Entry edited successfully')
    else:
        abort(404)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
