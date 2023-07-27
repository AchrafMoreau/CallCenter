import mongoos from 'mongoose'



const dbConnection = async ()=>{
    try{
        console.log(process.env.MONGODB_TOKEN)
        const conix = await mongoos.connect(process.env.MONGODB_TOKEN)
        console.log(`HOST CONNECTED : ${conix.connection.host}`)
    }catch(err){
        console.log(`SOMETHING WRONG ${err.message}`)
        process.exit(1)
    }
}

export default dbConnection