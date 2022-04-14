var user = {
	username: "Mark",
	password: "1234",
	status:   "married"
};

const database = [
 	{
		username: "Mark",
		password: "1234",
		status:   "married"
	}
	{
		username: "Mark",
		password: "1234",
		status:   "married"
	}
	{
		username: "Mark",
		password: "1234",
		status:   "married"
	}
	{
		username: "Mark",
		password: "1234",
		status:   "married"
	}
	{
		username: "Mark",
		password: "1234",
		status:   "married"
	}
]

var username = prompt("username");
var password = prompt("password");
var status = prompt("status");

database.push(username);
database.push(password);
database.push(status);

var signin = {username, status}


function signIn(username,password) {
	for (let i = 0; i<database.length; i++) {
		if (username === database[1].username && password === database[2].password) {

		}
		return signin
	else if(username !==database[1].username && password === database[2].password)
		return "sorry, wrong username or password"
	}
	
		
}

