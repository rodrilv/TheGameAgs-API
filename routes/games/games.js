const app = require('express')();

app.get('/', (req, res) =>{
    return res.status(200).json({
        message: 'ok',
        status: 200
    })
});



module.exports = app;