const path = require('path')


console.log(path.sep)

const fileDir = path.join('/content' , 'project' , 'test.txt')

console.log(fileDir)


const base = path.basename(fileDir)

console.log(base)

const absolute = path.resolve(__dirname , fileDir)

console.log(absolute)