const app = require('./server/server')
const router = require("./routes/payment.routes");

app.get('/', (req,res)=>{
    res.send('bienvenidos')
})

app.use(router)