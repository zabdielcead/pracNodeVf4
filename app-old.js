const http = require('http');
//console.log('Hola Mundo');

// se crea el servidor

http.createServer((request, response) => {
        //     response.writeHead(200, { 'Content-Type': 'application/json' });

        //     const persona = {
        //         id: 1,
        //         nombre: 'CEADDS'
        //     }

        //     response.write(JSON.stringify(persona));
        //     response.end();
        // })
        // .listen(9080);

        // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv'); //descarga archivo en excel
        // response.writeHead(200, { 'Content-Type': 'application/json' });

        // response.write('id nombre\n');
        // response.write('1, Fernando\n');
        // response.write('2, Maria\n');
        // response.write('3, Juan\n');
        // response.write('4, Pedro\n');

        response.write('Hola Mundo');

        response.end();
    })
    .listen(9080);


console.log('escuchando en el puerto', 9080)