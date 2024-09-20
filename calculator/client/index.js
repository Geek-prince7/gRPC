const grpc = require('@grpc/grpc-js')
const {CalculatorServiceClient} = require('../proto/calculator_grpc_pb')
const {SumRequest, DiffRequest, ProdRequest} = require('../proto/file_pb')

const add = (client)=>{
    console.log('sum invoked')
    const req = new SumRequest().setFirst(10).setSecond(4);
    client.sum(req, (err,resp)=>{
        if(err){
            console.log(`error occured : ${err}`)
            return
        }
        console.log(`Sum : ${resp.getResult()}`)
    })
}

const minus = (client)=>{
    console.log('diff invoked')
    const req = new DiffRequest().setFirst(10).setSecond(4);
    client.diff(req, (err,resp)=>{
        if(err){
            console.log(`error occured : ${err}`)
            return
        }
        console.log(`diff : ${resp.getResult()}`)
    })
}

const multiply = (client)=>{
    console.log('prod invoked')
    const req = new ProdRequest().setFirst(10).setSecond(4);
    client.prod(req, (err,resp)=>{
        if(err){
            console.log(`error occured : ${err}`)
            return
        }
        console.log(`Prod : ${resp.getResult()}`)
    })
}

const creds = grpc.ChannelCredentials.createInsecure();
const client = new CalculatorServiceClient('localhost:8000',creds);
add(client);
minus(client);
multiply(client);

