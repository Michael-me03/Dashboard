from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/portfolio')
def portfolio():
    return jsonify({
        "totalValue": 15632.13,
        "totalInvested": 14032.13
    })


@app.route('/api/graph-data')
def graph_data():
    return jsonify({
        "dates": ["Jun 1", "Jun 2", "Jun 3", "Jun 4", "Jun 5", "Jun 6", "Jun 7"],
        "values": [12000, 12500, 13000, 13500, 14500, 15000, 15632]
    })

@app.route('/api/recent-activity')
def recent_activity():
    return jsonify({
        "activities": [
            {"description": "Sold AWP | Dragon Lore", "amount": 1025.00, "date": "Jun 4"},
            {"description": "Bought AWP | Dragon Lore", "amount": 1025.00, "date": "Jun 4"},
            {"description": "Sold AK-47 | Fire Serpent", "amount": 750.00, "date": "Jun 3"}
        ]
    })

if __name__ == '__main__':
    app.run(debug=True)