const CronJob = require('cron').CronJob

function recommend(){
  console.log('Recommendations generated!')
}

new CronJob('* * * * * *', function() {
	recommend()
}, null, true, 'Asia/Singapore');