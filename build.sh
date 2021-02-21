#!/bin/bash

echo What is the backend url?
read backend_url

rm -rf build
cd server
yarn build
cd ..

cd client
rm .env
touch .env
echo REACT_APP_BACKEND_URL=$backend_url >> .env
yarn build
cp -r build/* ../build/public/
