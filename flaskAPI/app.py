from flask import Flask, jsonify
import random

from quotes import funny_quotes
from flask import Flask, render_template

app = Flask(__name__)


# Routes
@app.route("/")
def main():
    return render_template("index.html")

@app.route("/doug")
def doug():
    return 'doug'

@app.route("/api/funny")
def serve_funny_quote():
	quotes = funny_quotes()
	nr_of_quotes = len(quotes)
	selected_quote = quotes[random.randint(0, nr_of_quotes - 1)]
	return jsonify(selected_quote)


if __name__ == "__main__":
	app.run(debug=True)
