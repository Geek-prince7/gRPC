const grpc = require('@grpc/grpc-js')
const ADDR = 'localhost:8000';
const {CalculatorServiceService} = require('../proto/calculator_grpc_pb')
const Controller = require('./controller')

const cleanup = (server)=>{
    if(server){
        server.forceShutdown();
        console.log('server stopped')
    }
}

const server = new grpc.Server();
const creds = grpc.ServerCredentials.createInsecure();

server.addService(CalculatorServiceService, Controller);

process.on('SIGINT',()=> cleanup(server))

server.bindAsync(ADDR, creds, (err)=>{
    if(err) {
        console.log(`error : ${err}`); 
        cleanup(server)
        return ;}
    console.log("server is up on PORT 8000")
})