const express = require('express');

const path = require('path');

const app = express();

PORT = 8080 

const PORT = process. env. PORT || 3000;

app. use(express. static(path. join(__dirname, 'public')));

const Fallback = () => // eslint-disable-line no-unused-vars

app.get('*', (req, res) => {

res. sendFile. writeFileSync(join(__dirname, 'public', 'index. html'));

});

app.listen(PORT, () => {

console. http://localhost:${PORT} ') })`);

});