from flask import Flask, jsonify, request, json
import paramiko

app = Flask(__name__)


@app.route("/api", methods=["POST", "GET"])
def api():
    if request.method == "POST":
        request_data = json.loads(request.data)
        ip = request_data["ip"]
        user_name = request_data["username"]
        password = request_data["password"]
    return ip, user_name, password


@app.route("/api", methods=["GET"])
def app():
    """ssh = paramiko.SSHClient()
    ssh.connect(hostname=ip, username=user_name)
    ssh.load_system_host_keys()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    stdin, stdout, stderr = ssh.exec_command("-ps aux")
    output = stdout.readlines()
    ssh.close()"""
    output = "Some proccesses"

    return {
        "output": output,
    }


if __name__ == "__main__":
    app.run(debug=True)