const express = require('express')

class AppController{

    constructor(){
        this.express = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.express.use(express.json());
    }
    routes(){
        this.express.get('/health/', (req, res) => {res.send({nome:"Evelyn", idade:"17", CPF: 47806760881});
    });

    }
}

module.exports = new AppController().express;