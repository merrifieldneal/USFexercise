from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
import currency

app = Flask(__name__)

app.config['SECRET_KEY']="hashbrowns514"
app.debug = True
debug=DebugToolbarExtension(app)


@app.route('/')
def home_page():
    """HOME PAGE"""
    return render_template("hello.html")


@app.route('/convert')
def handle_conversion():
    """ Handle a conversion"""

    # Guide rails for inputs


    fromc = request.args['fromc'].upper()
    # from currency

    toco = request.args['toc'].upper()
    # to currency
    amount = request.args['amount']

    errs = []

    #error handling of inputs 
    if amount is None:
        errs.append("Not a valid amount.")
        print("not valid amount:")

    if not currency.check_currency_code(fromc):
        errs.append(f"Not a valid code: {fromc}")
        print("bad from:")

    if not currency.check_currency_code(toco):
        errs.append(f"Not a valid code: {toco}")
        print("bad to:")

    if not errs:
        print("not errs:")
        result = currency.convert_currency(fromc, toco, amount)
        if result is None:
            errs.append("Conversion failed.")

    if errs:
        for err in errs:
            print(err)
            flash(err)
        return render_template("hello.html",
                               fromc=fromc,
                               toco=toco,
                               amount=amount or "")
    
    
    else:
        return render_template("goodbye.html", result=result)
   


    
    

