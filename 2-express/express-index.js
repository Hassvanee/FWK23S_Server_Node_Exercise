let express = require ('express');
let app = express ();
app.listen (3000);
console.log('Servern körs på port 3000');

app.get('/', function(req, res){
    res.send('Välkommen till Rotsidan.');
});

let fs = require('fs');
app.get('/filhantering', function(req, res) {
    data = fs.readFileSync ('data.txt');
    res.set ({'content-type': 'text/html; charset=utf8'});
    res.write('Läser in text från fil:<br>');
    res.write(data);
    res.send();
});

app.get('/visitors', function(req, res) {
let antal = fs.readFileSync('visitors.txt');
antal = Number(antal);
antal++;
antal = antal.toString();
fs.writeFileSync('visitors.txt', antal);
res.send(`Denna sida har laddats ${antal} gånger`);

});
