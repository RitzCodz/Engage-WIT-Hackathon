# import the Flask class from the flask module
from flask import Flask, render_template, redirect, \
    url_for, request, session, flash, g
from functools import wraps
import sqlite3

# create the application object
app = Flask(__name__)

# config
app.secret_key = 'my precious'
app.database = 'sample.db'


# login required decorator
def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            flash('You need to login first.')
            return redirect(url_for('login'))
    return wrap


# use decorators to link the function to a url
@app.route('/')
@login_required
def home():
    # return "Hello, World!"  # return a string
    g.db = connect_db()
    cur = g.db.execute('select * from posts')
    posts = [dict(title=row[0], description=row[1]) for row in cur.fetchall()]
    g.db.close()
    return render_template('index.html', posts=posts)  # render a template

@app.route('/index')
def index():
    return render_template('index.html')


# route for handling the login page logic
@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if (request.form['username'] != 'admin') \
                or request.form['password'] != 'admin':
            error = 'Invalid Credentials. Please try again.'
        else:
            session['logged_in'] = True
            flash('You were logged in.')
            return redirect(url_for('index'))
    return render_template('login.html', error=error)

@app.route('/myBody')
@login_required
def myBody():
    return render_template('myBody.html')  # render a template

@app.route('/myMind')
@login_required
def myMind():
    return render_template('myMind.html')  # render a template

@app.route('/myLife')
@login_required
def myLife():
    return render_template('myLife.html')  # render a template

@app.route('/signup')
def signup():
    return render_template('signup.html')  # render a template

@app.route('/logout')
@login_required
def logout():
    session.pop('logged_in', None)
    flash('You were logged out.')
    return render_template('logout.html')

# connect to database
def connect_db():
    return sqlite3.connect(app.database)


# start the server with the 'run()' method
if __name__ == '__main__':
    app.run(debug=True)