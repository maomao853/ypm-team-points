echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r dist/* xiao@rpi2.local:/var/www/xiaoz.ca/

echo "Done!"