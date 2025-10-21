from __future__ import annotations

import os
from pathlib import Path

from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

BASE_DIR = Path(__file__).resolve().parent
STATIC_ROOT = BASE_DIR

app = Flask(__name__, static_folder=str(STATIC_ROOT), static_url_path="")
CORS(app)


@app.route("/")
def serve_index():
    """Return the main landing page for the portfolio site."""
    return send_from_directory(app.static_folder, "index.html")


@app.route("/<path:resource>")
def serve_static(resource: str):
    """Serve any other static asset in the repository.

    If the resource does not exist, respond with a JSON 404 message so that
    the client receives a meaningful response instead of the default HTML 404
    from Flask.
    """
    file_path = Path(app.static_folder) / resource
    if file_path.is_file():
        # send_from_directory handles proper MIME types and caching headers
        return send_from_directory(app.static_folder, resource)

    return jsonify({"error": "Resource not found", "resource": resource}), 404


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 3000))
    app.run(host="0.0.0.0", port=port)
