const { Users } = require("../../models");
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
    // TODO: urclass의 가이드를 참고하여 POST /login 구현에 필요한 로직을 작성하세요.
    // HINT: auth-session과 마찬가지로, sequelize를 사용해 DB를 조회하세요.

    const data = await Users.findOne({
        where: { userId: req.body.userId, password: req.body.password },
    });
    if(!data){
        res.status(404).send({"data": null, "message": "not authorized"})
    }else{
        const payload = {
            id : data.id,
            userId : data.userId,
            email : data.email,
            createdAt : data.createdAt,
            updatedAt : data.updatedAt
        }
        const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, { expiresIn: '1d'});
        const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, {expiresIn: '2d'});

        res.cookie('refreshToken', refreshToken)
        res.status(200).send({"data": {"accessToken": accessToken}, "message" : "ok"})

    }
};
