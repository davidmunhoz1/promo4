let mysql = require("mysql2");

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Undertaker_11',
    database: 'classicmodels'
})

connection.connect(function(error){
    if(error){
        console.log(`No se ha podido conectar a la base de datos : ${error}`)
    }else{
        console.log('Conectado a mysql!');
    }
})


//SACA POR PANTALLA CUSTOMERNUMBER, COUNTRY, CITY
connection.query('SELECT * FROM customers' , [], function(error, results, fields){
    if(error){
        console.log(`Error al ejecutar la query: ${error}`)
    }else{
        for(i=0; i<results.length; i++){
            console.log(results[i].customerNumber)
            console.log(results[i].country)
            console.log(results[i].city)
        }
    }
})

//SACA POR CONSOLA MAX, MIN, MEDIA DE LA COLUMNA AMOUNT DE LA TABLA PAYMENT
connection.query(
  "SELECT * FROM payments",
  [],
  function (error, results, fields) {
    if (error) {
      console.log(`Error al ejecutar la query: ${error}`);
    } else {
      let maximo = Number(results[0].amount);
      let minimo = Number(results[0].amount);
      let sumatorio = 0;

      for (i = 0; i < results.length; i++) {
        if (Number(results[i].amount) > maximo) {
          maximo = Number(results[i].amount) ;
        }
        if (Number(results[i].amount) < minimo) {
           minimo = Number(results[i].amount) ;
        }
sumatorio += Number(results[i].amount)

      }
        console.log(`Máximo:${maximo}, Minimo:${minimo} Media: ${(sumatorio/results.length).toFixed(2)}`)

    }
  }
);


// SACAR POR CONSOLA CITY Y EL NÚMERO DE CLIENTES EN ESE CITY

connection.query("SELECT * FROM customers",[103, "France"], function (error, results, fields) {
    if (error) {
      console.log(`Error al ejecutar la query: ${error}`);
    } else {
        let ciudades = [];
       for(i=0; i < results.length; i++){
        let j = 0;
        let ciudadEncontrada = false;

        for(j = 0; j < ciudades.length; j++ ){
            if(result[i].city === ciudades[j].ciudad){
                ciudadEncontrada = true;
            }
        }
        if(!ciudadEncontrada){
            ciudades.push({ciudad: results[i].city, contandor:1})
        }else{
            ciudades[j].contandor++;
        }
    
        console.log(ciudades)
        }
        }



connection.query("SELECT * FROM customers WHERE customerNumber = ? and country = ?", [103, "France"], function(error, results, fields){
    if(error){
        console.log(`Error al ejecutar la query: ${error}`)
    }else{
        console.log(results);
    }
})



connection.end(function(error){
    if(error){
        console.log(`No se ha podido conectar a la base de datos : ${error}`)
    }else{
        console.log('Conectado a mysql!');
    }
})
