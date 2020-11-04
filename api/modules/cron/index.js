const CronJob = require('cron').CronJob

const computeRecsByLikes = require('./compute-recs-by-likes.js')
const computeRecsMostRated = require('./compute-recs-most-rated')
const computeRecsTopRated = require('./compute-recs-top-rated')
const computeRecsMostViewed = require('./compute-recs-most-viewed')

new CronJob('0 3 * * *', function() {
	computeRecsByLikes()
}, null, true, 'Asia/Singapore');

new CronJob('0 2 * * *', function(){
  computeRecsMostRated()
  computeRecsTopRated()
  computeRecsMostViewed()
}, null, true, 'Asia/Singapore')