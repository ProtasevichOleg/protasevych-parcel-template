const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = require(packageJsonPath);

const githubUsername = 'your_username';
const repoName = 'your_repo_name';

// Оновіть поле homepage
packageJson.homepage = `https://${githubUsername}.github.io/${repoName}/`;

// Оновіть скрипт build
packageJson.scripts.build = `parcel build src/*.html --public-url /${repoName}/`;

// Збережіть зміни у файлі package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

// Запустіть скрипт у терміналі, виконавши команду:
// node setup.js
