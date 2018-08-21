const json = require("./TestJson")
//console.log(json.obj);


let jsonString = JSON.stringify(json.obj)
console.log(jsonString);



let jsonObj = JSON.parse(jsonString)
console.log(jsonObj);
