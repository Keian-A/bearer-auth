# Bearer Auth

## Route Info

### POST '/signup'

- Encrypts password, then saves username & password infor from the req to the database. Sends back to the user this, along with a token generated from their information.

### POST '/signin'

- Uses the basic auth middleware to generate the `username` and `password` variables from the encoded request. Then uses this username to match one stored in the database, and tests the password against the hashed password. If this is valid, send the user back their user information, along with their token.

### GET '/users'

- maps through the `users` table on the database and returns a list of all the usernames on the database. Only allowed with a verified token (checked in middleware).

### GET '/secret'

- Requires a verified token, but will send back to the client: the string -> `Welcome to the secret area`.