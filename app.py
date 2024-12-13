from flask import Flask, jsonify

import webbrowser
import os

# Get the absolute path to the HTML file
file_path = os.path.abspath("./templates/index.html")

# Open the HTML file in the default web browser
webbrowser.open(f"file://{file_path}")