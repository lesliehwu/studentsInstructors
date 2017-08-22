var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

for(var person in users){
	console.log(person);
	for (var i = 0; i < users[person].length; i++){
		var output = "";
		output += (i+1);
		output += " - ";
		output += users[person][i].first_name.toUpperCase();
		output += " ";
		output += users[person][i].last_name.toUpperCase();
		output += " - ";
		output += (users[person][i].first_name.length + users[person][i].last_name.length);
		console.log(output);
	}
}
