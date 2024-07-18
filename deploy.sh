#!/bin/bash
echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -i ~/.ssh/id_ed25519 -P <port> -r -v dist/* <user>@<ip>:/var/www/<domain.com>/

echo "Done!"