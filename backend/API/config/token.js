const jwt = require("jsonwebtoken");
require('dotenv').config();

function create(User) {
    const jsonData = User;
    const options = {expiresIn: '1h'};
    const token = ((jsonData, options) => {
            try {
                const token = jwt.sign(jsonData, process.env.SECRET, options);
                return token;
            } catch (error) {
                console.log(error);
                return null;
            }
        })(jsonData, options);
    return token;
}

function verif(req) {
    const token = req.headers.authorization;

    if(token) {
        try {
            const decode = jwt.verify(token, process.env.SECRET);

            return {
                code: 200,
                data: decode
            };
        } catch (error) {
            return {
                code: 400
            };
        }
    } else {
        return {
            code: 401
        };
    }
}

module.exports = {create, verif};
