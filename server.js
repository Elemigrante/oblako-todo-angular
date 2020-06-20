const express = require('express');

const app = express();

app.use(express.static('./dist/oblako-todo-angular'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/oblako-todo-angular/'}),
);

app.listen(process.env.PORT || 8080);
