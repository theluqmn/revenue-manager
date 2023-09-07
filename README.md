# Revenue-Manager
A revenue manager website (backend included).
Not much at the moment. Haven't got a name for it yet so for now, it's `revenue-manager`.

# Some notes
Below are some notes you should take note of regarding how it all works.

## Structure
All backend code is in the `backend` folder. Everything outside is frontend, or misc.

## Database
**Backend**. Database used is PostgreSQL. For `database.js` to work, it requires a JSON which should contain something like the following:
```json
{
    "user": "postgres",
    "host": "localhost",
    "database": "database-name",
    "password": "your-password",
    "port": 8080
}
```
Please require the file as a variable, then enter it as an argument in the `new Client()` function. By default, it searches
for a JSON file in the same directory named `db_details.json` - which I have in the local version of my machine.
