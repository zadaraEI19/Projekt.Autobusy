const mysql = require('mysql2');
async function main() {
	var connection = mysql.createConnection({
  	host     : 'localhost',
  	user     : 'matiz',
  	password : '1lx8jXEPqBYx!0cI',
  	database : 'projekt3_matiz'
	});
 
	connection.connect();
    
    responses = [];

    let zapytanie1 = await a.promise().query("INSERT INTO Książki (ISBN,Ewidencyjny,Tytul,Wydawca)  VALUE (",document.forms.formularz.isbn.value,",",document.forms.formularz.ewident1.value,",",document.forms.formularz.tytul.value,",",document.forms.formularz.wydawca.value,")");
	responses.push(q2);

	connection.end();
}
