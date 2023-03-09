const express = require('express');
const app = express();

app.get('/', (request, response)=>{
	response.send('welcome to the home page');
});


app.listen(3000, ()=> {
	console.log('listening...');
});
