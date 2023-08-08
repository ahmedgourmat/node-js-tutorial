const {readFileSync , writeFileSync} = require('fs')

const project = readFileSync('./content/project.js' , 'utf8')

console.log(project)

writeFileSync('./content/projectCopy.js' , project)

