let ciudades = [];

        for (let i = 0; i < results.length; i++) {
            let j = 0;
            let ciudadEncontrada = false;
            
            while (!ciudadEncontrada && j < ciudades.length) {
                if (results[i].city == ciudades[j].ciudad) {
                    ciudadEncontrada = true;
                } else {
                    j++;
                }
            }

            if (!ciudadEncontrada) {
                ciudades.push({ciudad: results[i].city, contador: 1});
            } else {
                ciudades[j].contador++;
            }
        }

        console.log(ciudades);

        /**
 * Sacar por consola city y el numero de clientes en esa city (con for y for).
 * 
 * 'Malaga', 4
 * 'Cadiz', 8
 */
connection.query("SELECT * FROM customers", [], function(error, results, fields) {
    if (error) {
        console.log(`Error al ejectuar la query: ${error}`);
    } else {
        let ciudades = [];

        for (let i = 0; i < results.length; i++) {
            let ciudadEncontrada = false;

            for (let j = 0; j < ciudades.length; j++) {
                if (ciudades[j].ciudad == results[i].ciudad) {
                    ciudadEncontrada = true;

                    break;
                }
            }

            if (!ciudadEncontrada) {
                ciudades.push({ciudad: results[i].city, contador: 1});
            } else {
                ciudades[i].contador++;
            }
        }

        console.log(ciudades);
    }
});


connection.query("SELECT * FROM customers", [], function(error, results, fields) {
    if (error) {
        console.log(`Error al ejectuar la query: ${error}`);
    } else {
        let ciudades = [];
        for (let i = 0; i < results.length; i++) {
            let ciudadEncontrada = false;
            let indice =-1;
            for (let j = 0; j < ciudades.length; j++) {
                if (ciudades[j].ciudad == results[i].city) {
                    ciudadEncontrada = true;
                    indice=j;
                    break;
                }
            }
            if (!ciudadEncontrada) {
                ciudades.push({ciudad: results[i].city, contador: 1});
            } else {
                ciudades[indice].contador++;
            }
        }
        console.log(ciudades);
    }
  });