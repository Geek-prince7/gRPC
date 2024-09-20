const protobuff = require('../proto/file_pb')

exports.sum = (call,cb)=>{
    console.log('sum invoked')
    const resp = new protobuff.SumResponse().setResult(call.request.getFirst()+call.request.getSecond());
    cb(null,resp)
}

exports.diff = (call,cb)=>{
    console.log('minus invoked')
    const resp = new protobuff.DiffResponse().setResult(call.request.getFirst() - call.request.getSecond());
    cb(null,resp)
}

exports.prod = (call,cb)=>{
    console.log('prod invoked')
    const resp = new protobuff.ProdResponse().setResult(call.request.getFirst() * call.request.getSecond());
    cb(null,resp)
}