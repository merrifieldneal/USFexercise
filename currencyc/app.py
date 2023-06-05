from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from forex_python.converter import CurrencyRates, CurrencyCodes

app = Flask(__name__)

app.config['SECRET_KEY']="hashbrowns514"
app.debug = True
debug=DebugToolbarExtension(app)


@app.route('/')
def home_page():
    """HOME PAGE"""
    return render_template("base.html")

@app.route('/convert')
def make_conversion():
    """Request a convesion (forms)"""
    return render_template("hello.html")


@app.route('/convert', methods=['POST'])
def handle_conversion():
    """ Handle a conversion"""

    # Guide rails for inputs
    fromc = request.form['fromc']
    toco = request.form['toc']
    amount = request.form['amount']

    converted_amount = convert_currency(fromc,toco,amount)
    symbol = get_symbol(toco)

    return render_template("goodbye.html", converted_amount=converted_amount, symbol=symbol)

# Move This out of app.py (later)
def convert_currency(from_currency, to_currency, amount):
    c = CurrencyRates()
    result = c.convert(from_currency, to_currency, amount)
    return result

def get_symbol(location):
    c =  CurrencyCodes()
    location=location.upper()
    symbol = c.get_symbol(location)
    return symbol