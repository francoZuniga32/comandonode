const inquirer = require('inquirer');

inquirer.prompt({
	name: 'color',
	message: 'cual es el colo',
	default: 'default'
}).then((answers)=>{
	console.log(answers);
}).catch(err=>{
	console.log(err);
})
