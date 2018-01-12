from flask import Flask, url_for, redirect, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/characters')
def characters():
    return render_template('characters.html')

@app.route('/jane')
def jane_meter():
    return render_template('meter-jane.html')

@app.route('/ed')
def ed_meter():
    return render_template('meter-ed.html')

@app.route('/beth')
def beth_meter():
    return render_template('meter-beth.html')

@app.route('/sang')
def sang_meter():
    return render_template('meter-sang.html')

@app.route('/nina')
def nina_meter():
    return render_template('meter-nina.html')

@app.route('/devon')
def devon_meter():
    return render_template('meter-devon.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.debug = True
    app.run()
