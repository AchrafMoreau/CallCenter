
// not found middlware handler
const NotFound = (req, res, next)=>{
    
    const notfound = new Error(`Not Found ${req.originalUrl}`)
    res.status(400)
    next(notfound)
}


// random err middlware handler
const errHandler = (err, req, res, next)=>{
    const ErrStatus = res.statusCode === 200 ? 500 : res.statusCode

    res.status(ErrStatus).json({
        message: err.message,
        stack: process.env.ENV_MODE === 'development' ? err.stack : ""
    })
}

export { errHandler, NotFound }