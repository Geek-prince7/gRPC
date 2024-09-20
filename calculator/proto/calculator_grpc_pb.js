// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var file_pb = require('./file_pb.js');

function serialize_calculator_DiffRequest(arg) {
  if (!(arg instanceof file_pb.DiffRequest)) {
    throw new Error('Expected argument of type calculator.DiffRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_DiffRequest(buffer_arg) {
  return file_pb.DiffRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_DiffResponse(arg) {
  if (!(arg instanceof file_pb.DiffResponse)) {
    throw new Error('Expected argument of type calculator.DiffResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_DiffResponse(buffer_arg) {
  return file_pb.DiffResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_ProdRequest(arg) {
  if (!(arg instanceof file_pb.ProdRequest)) {
    throw new Error('Expected argument of type calculator.ProdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_ProdRequest(buffer_arg) {
  return file_pb.ProdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_ProdResponse(arg) {
  if (!(arg instanceof file_pb.ProdResponse)) {
    throw new Error('Expected argument of type calculator.ProdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_ProdResponse(buffer_arg) {
  return file_pb.ProdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_SumRequest(arg) {
  if (!(arg instanceof file_pb.SumRequest)) {
    throw new Error('Expected argument of type calculator.SumRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_SumRequest(buffer_arg) {
  return file_pb.SumRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_SumResponse(arg) {
  if (!(arg instanceof file_pb.SumResponse)) {
    throw new Error('Expected argument of type calculator.SumResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_SumResponse(buffer_arg) {
  return file_pb.SumResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorServiceService = exports.CalculatorServiceService = {
  sum: {
    path: '/calculator.CalculatorService/Sum',
    requestStream: false,
    responseStream: false,
    requestType: file_pb.SumRequest,
    responseType: file_pb.SumResponse,
    requestSerialize: serialize_calculator_SumRequest,
    requestDeserialize: deserialize_calculator_SumRequest,
    responseSerialize: serialize_calculator_SumResponse,
    responseDeserialize: deserialize_calculator_SumResponse,
  },
  diff: {
    path: '/calculator.CalculatorService/Diff',
    requestStream: false,
    responseStream: false,
    requestType: file_pb.DiffRequest,
    responseType: file_pb.DiffResponse,
    requestSerialize: serialize_calculator_DiffRequest,
    requestDeserialize: deserialize_calculator_DiffRequest,
    responseSerialize: serialize_calculator_DiffResponse,
    responseDeserialize: deserialize_calculator_DiffResponse,
  },
  prod: {
    path: '/calculator.CalculatorService/Prod',
    requestStream: false,
    responseStream: false,
    requestType: file_pb.ProdRequest,
    responseType: file_pb.ProdResponse,
    requestSerialize: serialize_calculator_ProdRequest,
    requestDeserialize: deserialize_calculator_ProdRequest,
    responseSerialize: serialize_calculator_ProdResponse,
    responseDeserialize: deserialize_calculator_ProdResponse,
  },
};

exports.CalculatorServiceClient = grpc.makeGenericClientConstructor(CalculatorServiceService);
