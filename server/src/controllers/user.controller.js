const { UserService } = require('../services');
const db = require('../db');

const getInfo = async (req, res) => {
    const formatData = {
        userId: req.params._id
    }

    const userService = new UserService(db, formatData);

    let user = await userService.getInfo();
    if (!user) {
        return res.status(200)
            .json({
                message: "User dont exist",
            })
    }
    return res.status(200)
        .json({
            message: "Get info user success",
            result: {
                user
            }
        })

}

module.exports = {
    getInfo
};
