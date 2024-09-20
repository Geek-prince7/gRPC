const grpc = require("@grpc/grpc-js")
const {GreetServiceClient} = require('../proto/greet_grpc_pb')
const {GreetRequest, SumRequest} = require('../proto/greet_pb')

function doGreet(client){
    console.log("doGreet invoked");
    const req = new GreetRequest().setFirstName("Prince");
    
    client.greet(req, (err, resp)=>{
        if(err){
            console.log(`error ${err}`)
            return
        }
        console.log(`Greet: ${resp.getResult()}`)
    })
}

function sum(client){
    console.log('sum invoked')
    const req = new  SumRequest().setNumberOne(10).setNumberTwo(4);

    client.sum(req, (err,resp)=>{
        if(err){
            console.log(`error ${err}`)
            return
        }
        console.log(`Sum: ${resp.getResultSum()}`)
    })
}

function main(){
    const creds = grpc.ChannelCredentials.createInsecure();
    const client = new GreetServiceClient('localhost:8000', creds)

    doGreet(client);
    sum(client);

    // client.close()
}

main()