var fs=require("fs"),setter=require("./negation-setter.js"),loadNERModel=function(){var machines=fs.readFileSync(require.resolve("./languages/cur/models/eng-negation-model.json"),"utf8");return{machines:machines=JSON.parse(machines),setter:setter}};module.exports=loadNERModel;