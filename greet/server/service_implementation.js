const pb = require('../proto/greet_pb')

exports.greet =  (call, callback)=>{
    console.log("greet was invoked")
    const resp = new pb.GreetResponse().setResult(`Hello ${call.request.getFirstName()}`)
    callback(null,resp) //cb(error, resp)
}

exports.sum = (call, cb)=>{
    console.log('sum invoked')
    const resp = new pb.SumResponse().setResultSum(call.request.getNumberOne() + call.request.getNumberTwo())
    cb(null, resp)
}