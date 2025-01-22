const getUser = (req, res, next) => {
    console.log('we here')
    res.json({"msg": "hello user"})
}

module.exports = {
    getUser
}