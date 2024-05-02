const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

app.get('/', (req, res) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection(config)
    const insert = `INSERT INTO people(name) values('Silvio')`
    connection.query(insert)
    const retrieve = `SELECT name FROM people`;

    connection.query(retrieve, (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar nomes: ', error);
            res.status(500).send('Erro ao buscar nomes');
        } else {
            let html = '<h1>Full Cycle</h1>';
            results.forEach(row => {
                html += `<h2>${row.name}</h2>`;
            });
            res.send(html);
        }
    });

})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})