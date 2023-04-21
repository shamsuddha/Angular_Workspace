#!/bin/bash
curl -d '{"id":1, "name":"name 1"}' -H "Content-Type: application/json" -X POST http://localhost:7001/user/save
curl -d '{"id":2, "name":"name 2"}' -H "Content-Type: application/json" -X POST http://localhost:7001/user/save
curl -d '{"id":3, "name":"name 3"}' -H "Content-Type: application/json" -X POST http://localhost:7001/user/save
curl -d '{"id":4, "name":"name 4"}' -H "Content-Type: application/json" -X POST http://localhost:7001/user/save



# Run
#   chmod +x http_req.sh
#   ./http_req.sh
