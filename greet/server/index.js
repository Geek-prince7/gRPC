const grpc = require('@grpc/grpc-js')
const serviceImplementation = require('./service_implementation')
const {GreetServiceService} = require('../proto/greet_grpc_pb')
const ADDRESS = 'localhost:8000'

function cleanUp(server){
    if(server){
        server.forceShutdown();
        console.log('Server stopped!')
    }
}

function main(){
    const server = new grpc.Server();
    const creds = grpc.ServerCredentials.createInsecure(); //using insecure credentials for now

    process.on('SIGINT',()=>{
        console.log("cleanup called");
        cleanUp(server)
        
    })

    server.addService(GreetServiceService, serviceImplementation)

    server.bindAsync(ADDRESS, creds, (error)=>{
        if(error) return cleanUp(server);
        server.start();
        console.log("server is up ",ADDRESS)
    })
}
main();
