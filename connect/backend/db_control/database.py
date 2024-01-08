import sqlite3
from sqlite3 import Error

DB_FILE = 'app.db'

def initialize_database():
    # Create tables if not exist
    create_table_query = '''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER NOT NULL
        -- Add other user fields as needed
    );

    CREATE TABLE IF NOT EXISTS skills (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        skill_name TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (id)
    );

    -- Add other tables as needed
    '''

    try:
        connection = sqlite3.connect(DB_FILE)
        cursor = connection.cursor()
        cursor.executescript(create_table_query)
        connection.commit()
    except Error as e:
        print(f"Error initializing database: {e}")
    finally:
        if connection:
            connection.close()

def insert_user(data):
    insert_user_query = '''
    INSERT INTO users (name, age) VALUES (?, ?)
    '''

    try:
        connection = sqlite3.connect(DB_FILE)
        cursor = connection.cursor()
        cursor.execute(insert_user_query, (data['name'], data['age']))
        user_id = cursor.lastrowid
        connection.commit()
        return user_id
    except Error as e:
        print(f"Error inserting user: {e}")
    finally:
        if connection:
            connection.close()

def get_user_skills(user_id):
    get_skills_query = '''
    SELECT skill_name FROM skills WHERE user_id = ?
    '''

    try:
        connection = sqlite3.connect(DB_FILE)
        cursor = connection.cursor()
        cursor.execute(get_skills_query, (user_id,))
        skills = cursor.fetchall()
        return [skill[0] for skill in skills]
    except Error as e:
        print(f"Error retrieving user skills: {e}")
    finally:
        if connection:
            connection.close()

def get_recommendations(user_id):
    # Implement logic to generate recommendations based on user skills
    # You may want to use the chatgpt response stored in the database for this
    # Return a list of recommendations

    # For simplicity, returning a dummy list
    return ["Recommendation 1", "Recommendation 2", "Recommendation 3"]