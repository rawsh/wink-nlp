var loadCoreModel=require("./load-core-model.js"),loadNERModel=require("./load-ner-model.js"),loadSBDModel=require("./load-sbd-model.js"),loadPOSModel=require("./load-pos-model.js"),loadNEGATIONModel=require("./load-negation-model.js"),loadSAModel=require("./load-sa-model.js"),loadCERMetaModel=require("./load-cer-meta-model.js"),featureFn=require("./feature.js"),model=Object.create(null);model.core=loadCoreModel,model.sbd=loadSBDModel,model.pos=loadPOSModel,model.ner=loadNERModel,model.negation=loadNEGATIONModel,model.sa=loadSAModel,model.metaCER=loadCERMetaModel,model.featureFn=featureFn,module.exports=model;