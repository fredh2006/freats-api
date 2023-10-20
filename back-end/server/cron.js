const cron = require ('cron');
const axios = require ('axios')

const job = new cron.CronJob('*/13 * * * *', function(){
    console.log('restarting server')

    axios
    .get('https://freats-api-59bw.onrender.com', (res)=>{
        if(res.statusCode==200){
            console.log('server restarted')
        }else{
            console.log('failed to restart server')
        }
    })
})

module.exports={
    job,
}