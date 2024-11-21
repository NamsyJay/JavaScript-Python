from config import db 

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(80), unique=False, nullable=False) # nullable means you cannot pass a null value
    email_address = db.Column(db.String(120), unique=True, nullable=False) # unique is true because no 2 mails can have the same name.

    def to_json(self):
        return {
            "id": self.id,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "emailAddress": self.email_address,
        }