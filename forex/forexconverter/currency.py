"""Functions handling currency."""

from forex_python.converter import CurrencyCodes, CurrencyRates, RatesNotAvailableError


c =  CurrencyCodes()
r = CurrencyRates()

def check_currency_code(code):
    """Is currency code valid? """
    return c.get_currency_name(code) is not None

def convert_currency(from_currency, to_currency, amount):
    try:
            amt = f"{r.convert(from_currency, to_currency, amount):.2f}"
    except RatesNotAvailableError:
        return None
    symbol = c.get_symbol(to_currency)
    return f"{symbol} {amt}"

    