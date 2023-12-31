let express = require ('express');
let app = express ();
let port = 8080;

let httpServer = app.listen(port, function() {
    console.log(`Webbserver körs på post ${port}`); // samma som webb
});

// serva en statsik webbsida (form.html) som innehåller formulär
app.get('/form', function (req, res) {
    res.sendFile (__dirname + '/form.html');
});

// hit kommer data när get-formulär skickas
app.get('/get-route', function(req, res) {
    console.log(req.query);
    let summa = Number(req.query.tal1) / Number(req.query.tal2);
    console.log(summa);

    res.send(`${req.query.tal1}/${req.query.tal2}=${summa}`);
});