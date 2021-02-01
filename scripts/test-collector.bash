echo "Setting up..."
yarn json-server --port 3001 mock-backend.json &
export JSON_SERVER_PID=$!;
sleep 2;
echo "Testing...."
node scripts/collector.js;
kill $JSON_SERVER_PID;
[[ $(jq '.components | length' mock-backend.json) > 0 ]] || exit 1;

