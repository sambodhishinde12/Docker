from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/submit", methods=["POST"])
def submit():
    name = request.form.get("name")
    email = request.form.get("email")

    print("Name:", name)
    print("Email:", email)

    return jsonify({
        "name": name,
        "email": email
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
