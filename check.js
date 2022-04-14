// var user = {
// 	username: "tijani",
// 	password: "pass",
// 	status:   "married"
// };

// const database = [];
// database[0]= {
// 		username: "tijani",
// 		password: "pass",
// 		status:   "married"
// 	}

var username = prompt("username");
var password = prompt("password");
var status = prompt("status");

const database = [];
database[0]= {
		username: "Mark",
		password: "1234",
		status:   "married"
	}

database[1]= {
		username: "John",
		password: "1234",
		status:   "married"
	}

database[2]= {
		username: "Peter",
		password: "1234",
		status:   "single"
	}

database[3]= {
		username: "Luke",
		password: "1234",
		status:   "divorced"
	}

database[4]= {
		username: "Moses",
		password: "1234",
		status:   "single"
	}
const databases = [];
databases[0]= username,
databases[1]= password,
databases[2]= status
var sign = {
	 username,
	 status
}

function signIn(username,password) {
	for (var i=0; i <= database.length; i++) {
		if (username === database.username && password === database.password) {
		return sign
		}
		if (username !== database.username || password !== database.password) {
		return "sorry, wrong username or password"
		}
	}
}

