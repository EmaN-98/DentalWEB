from flask import Flask, request,jsonify
from flask_mail import Mail, Message

app = Flask(__name__)

mail= Mail(app)

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'xx@gmail.com'
app.config['MAIL_PASSWORD'] = 'xxxxxx'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

@app.route("/contact-mail", methods=["POST"])
def index():
   request_data = request.get_json()
   name = request_data['name']
   email = request_data['email']
   telephone = request_data['telephone']
   date = request_data['date']
   cabinet = request_data['cabinet']
   message = request_data['message']
   msg = Message("Mail pacient", sender = email, recipients = ['x@gmail.com'])
   msg.body = "Mail pacient: "+ name+"; email: "+email+"; telefon: "+telephone+"; data: "+date+"; cabinet: "+cabinet+"; mesaj: "+message+"."
   mail.send(msg)
   return jsonify(success=True)

if __name__ == '__main__':
   app.run(debug = True)