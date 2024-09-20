npm i google-protobuf @grpc/grpc-js
npm i grpc-tools --save
./node_modules/.bin/grpc_tools_node_protoc --js_out=. --grpc_out=. dummy.proto  // can be automated write an executable sh file that ll automatically execute it and add it in package.lock -> scripts also use chmod +x path_to_scripts/script_file.sh