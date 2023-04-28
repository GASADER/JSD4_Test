function logger(req, res, next) {
    console.log(`[Logger]: Requesting to ${req.method} ${req.url}`)

    //call function for working to next function
    next()
}

module.exports = logger