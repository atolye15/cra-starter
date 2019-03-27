echo 'Building application...'
yarn build

echo 'Copying index.html as 404.html'
cp build/index.html build/404.html

echo 'Deploying...'
node_modules/.bin/surge --project ./build --domain cra-starter.surge.sh

echo 'Deployed 🚀'
