//NOT WORKING DO NOT USE

const mongoose = require('mongoose')

const { mongoUri } = require('../../../dist/config')

mongoose.connect(mongoUri)

const Event = require('../../../dist/src/models/Event').default
const User = require('../../../dist/src/models/User').default
const Mod = require('../../../dist/src/models/Mod').default
const Recommendation = require('../../../dist/src/models/Recommendation').default
const { recommendationTypesEnum } = require('../../../dist/src/models/Recommendation')
var _ = require('lodash');

var pearsonCorrelation = function(dataset,p1,p2){
    var existp1p2 = {};
    var numExistence = 0;
    for(item in dataset[p1]){
        if(item in dataset[p2]){
            existp1p2[item] = 1;
            numExistence += 1;
        }
    }
    
    if(num_existence ==0) return 0;
    //store the sum and the square sum of both p1 and p2
    //store the product of both
    var p1Sum=0,
        p2Sum=0,
        p1SqSum=0,
        p2SqSum=0,
        p1p2Prod = 0;
    //calculate the sum and square sum of each data point
    //and also the product of both point
    for(var item in existp1p2){
        p1Sum += dataset[p1][item];
        p2Sum += dataset[p2][item];
        p1SqSum += Math.pow(dataset[p1][item],2);
        p2SqSum += Math.pow(dataset[p2][item],2);
        p1p2Prod += dataset[p1][item]*dataset[p2][item];
    }
    var numerator =p1p2Prod - (p1Sum*p2Sum/numExistence);
    var st1 = p1SqSum - Math.pow(p1Sum,2)/numExistence;
    var st2 = p2SqSum -Math.pow(p2Sum,2)/numExistence;
    var denominator = Math.sqrt(st1*st2);
    if(denominator ==0) return 0;
    else {
        var val = numerator / denominator;
        return val;
    }     
}

function recommendationEngine(dataset,person,distance) {
    var totals = {
        setDefault:function(props,value){
            if(!this[props]){
                this[props] =0;
            }
            this[props] += value;
        }
    },
    simsum = {
        setDefault:function(props,value){
            if(!this[props]){
                this[props] =0;
            }
            this[props] += value;
        }
    },
    rankList =[];
    for(var other in dataset){
        if(other ===person) continue;
        var similar = distance(dataset,person,other); 
        if(similar <=0) continue;
        for(var item in dataset[other]){
            if(!(item in dataset[person]) ||(dataset[person][item]==0)){
                totals.setDefault(item,dataset[other][item]*similar);
                simsum.setDefault(item,similar);    
            }
        }
    }
        
    for(var item in totals){    
        if(typeof totals[item] !="function"){
            var val = totals[item] / simsum[item];
            rankList.push({val:val,items:item});
        }
    }
    rankList.sort(function(a,b){
        return b.val < a.val ? -1 : b.val > a.val ? 
        1 : b.val >= a.val ? 0 : NaN;
    });
    var recommend = []; 
    for(var i in rankList){
        recommend.push(rankList[i].items);
    }
    return [rankList,recommend];
}

//dataset should be database?
function recommend(dataset, user) {
    return recommendationEngine(dataset, user, pearsonCorrelation);
}

module.exports = recommend

