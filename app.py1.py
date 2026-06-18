from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

# CREATE DATABASE
def init_db():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()

    c.execute('''
        CREATE TABLE IF NOT EXISTS applications (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            phone TEXT,
            amount TEXT
        )
    ''')

    conn.commit()
    conn.close()

init_db()

# HOME PAGE
@app.route('/')
def home():
    return render_template("index.html")

# FORM SUBMIT
@app.route('/apply', methods=['POST'])
def apply():

    name = request.form['name']
    email=request.form['email']
    phone = request.form['phone']
    amount = request.form['amount']

    conn = sqlite3.connect('database.db')
    c = conn.cursor()

    c.execute('''
        INSERT INTO applications
        (name,email, phone, amount)
        VALUES (?, ?, ?, ?)
    ''', (name,email, phone, amount))

    conn.commit()
    conn.close()

    return "Loan Application Submitted Successfully"

if __name__ == "__main__":
    app.run(debug=True)