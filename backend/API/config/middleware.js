require('dotenv').config();
const token = require("./token");
let connectDB = require('./db');

async function middelware(req, res, next) {
    // if is route with token or not
    if (req.originalUrl.split('/')[1] === "todos" || req.originalUrl.split('/')[1] === "users") {
        // verif token in header
        const tokenData = token.verif(req);
        if (tokenData.code === 401) {
            res.status(499).json(
                {
                    "msg": "No token, authorization denied"
                });
            return;
        } else if (tokenData.code === 400) {
            res.status(498).json(
                {
                    "msg": "Token is not valid"
                });
            return;
        } else {
            try {
                const _id = tokenData.data._id;
                // connect to data base
                const database = await connectDB();

                // verif if the account already exists
                database.connect((err, results) => {
                        database.query(`
                            SELECT EXISTS (SELECT * FROM user WHERE id = '${_id}') AS article_exists
                            `, async (err, results, fields) => {
                                if (err) {
                                    console.log(err);
                                    return;
                                } else {
                                    if (results[0].article_exists === 0) {
                                        res.status(404).json(
                                            {
                                                "msg": "Not found"
                                            });
                                        return
                                    } else {
                                        next();
                                    }
                                }
                            });
                    });
            } catch (error) {
                console.log(error);
                res.status(500).json(
                    {
                        "msg": "Internal server error",
                    });
                return
            }
        }
    } else {
        next();
    }
}

module.exports = middelware;
