var fs=require("fs"),transformers=require("./cer-transformers.js"),loadNERModel=function(){return{machines:fs.readFileSync(require.resolve("./languages/cur/models/eng-cer-meta-model.json"),"utf8"),transformers:transformers}};module.exports=loadNERModel;