const mongoose = require('mongoose')

const { mongoUri } = require('../../../dist/config')

mongoose.connect(mongoUri)

const Event = require('../../../dist/src/models/Event').default
const User = require('../../../dist/src/models/User').default
const Mod = require('../../../dist/src/models/Mod').default
const Recommendation = require('../../../dist/src/models/Recommendation').default
const { recommendationTypesEnum } = require('../../../dist/src/models/Recommendation')
var _ = require('lodash');

//calculate jaccard index
function jaccardIndex(user1, user2) {
    console.log("1. calculating jaccard");
    numerator = _.size(_.intersectionBy(user1, user2, 'likedMod'));
    denominator = _.size(_.unionBy(user1, user2, 'likedMod'));
    return parseFloat(numerator) / parseFloat(denominator);
}

//filter users who liked a mod
function likedUsers(module) {
    console.log("2. filtering users");
    return new Promise(function(resolve, reject) {
        users = [];
        Event.aggregate([
            { $match: { type : "likedMod"}},
            { $match: { modId : module}},
            { $group: { _id: '$userId'}}
        ]).then(events => {
            for (var i = 0; i < events.length; i++) {
                users.push(events[i]);
            }
        })
        resolve(users);
    });
}

//calculate recommendation index
function recommendationIndex(user, module) {
    console.log("3. calculating index");
    return new Promise((resolve, reject) => {
        var users = likedUsers(module);
        var sum = 0;
        for (var i = 0; i < users.length; i++) {
            sum += jaccardIndex(user, users[i]);
        }
        resolve(parseFloat(sum) / parseFloat(_.size(users)));
    });
}

//TODO: find modules that user has not liked

//save recommendation on Recommendation
function recommend(user) {
    console.log("4. calculating recommendation");
    return new Promise((resolve, reject) => {
        Mod.find().then(modules => {
            var promises = [];
            recommendations = [];
            for (var i = 0; i < modules.length; i++) {
                promises.push(recommendationIndex(user, modules[i]));
            }
            Promise.all(promises).then(function(res) {
                for (var i = 0; i < modules.length; i++) {
                    var mod = {
                        modId: modules[i].modId,
                        recIndex: res[i]
                    };
                    recommendations.push(mod);
                }
                recommendations = sortRecommendations(recommendations);
                resolve(recommendations);
            });
        });
    });
}

//sort recommendation by recommendation index
function sortRecommendations(recommendations) {
    console.log("5. sorting recommmendations");
    for (var i = 1; i < recommendations.length; i++) {
        for (var j = 0; j < recommendations.length - 1; j++) {
            if (recommendations[j].recIndex < recommendations[j+1].recIndex) {
                var temp = recommendations[j];
                recommendations[j] = recommendations[j+1];
                recommendations[j+1] = temp;
            }
        }
    }
    return recommendations;
}

/*
//generate recommendations for all users
function generateRecommendations() {
    console.log("6. generating recommmendations");
    User.find().then(users => {
        var sortedRecommendations = [];
        for (var i = 0; i < users.length; i++) {
            var recommendation = sortRecommendations(recommend(users[i]._id));
            for (var j = 0; j < recommendation.length; j++) {
                sortedRecommendations.push(recommendation[j].modId);
            }
            const newRecommendation = new Recommendation({
                userId: users[i]._id,
                recommendations: sortedRecommendations, //store string array of mods
                type: recommendationTypesEnum.likes
            });
            newRecommendation.save()
        }
    });
}

generateRecommendations();
console.log("Successfully generated recommendations");*/