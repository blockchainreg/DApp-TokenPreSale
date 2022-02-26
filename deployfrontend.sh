rsync -r src/ docs/
rsync build/contracts/* docs/

git add .
git commit -am "dapp v0.2.0"
git push heroku master