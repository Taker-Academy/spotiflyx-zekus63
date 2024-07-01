const User = require('../../../db/model/model_User');
const bcrypt = require('../../config/bcrypt');
const token = require('../../config/token')

async function verif_params(body) {
    if (!(body) || typeof body !== "object" || Object.keys(body).length !== 4 ||
    !body.email || !body.password || !body.firstName || !body.lastName ||
    typeof body.email !== "string" || typeof body.password !== "string" ||
    typeof body.lastName !== "string" || typeof body.firstName !== "string") {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    return 0;
}

const register_action = async (req, res) => {
    console.log("POST: /auth/register");
    const body = req.body;
    console.log(body);
    try {
        if (verif_params(body, res) === 1) {
            return;
        }
        // const newUseRes = await creat_new_Users(body);
        const hash_password = await bcrypt.create(body.password);
        const newUser = new User({
            email: body.email,
            password: hash_password,
            firstName: body.firstName,
            lastName: body.lastName
        });
        const savedUser = await newUser.save();
        res.status(201).json({
            token: token.create({ _id: newUser.insertId }),
            Data: savedUser.dataValues
        });
    } catch (error) {
        if (error && error.errors[0] && error.errors[0].message && error.errors[0].message === "email must be unique") {
            res.status(400).json({"msg": "Mauvais identifiants."});
            return;
        }
        console.error('Erreur lors du traitement de la requête :', error);
        res.status(500).json({"msg": "Internal server error"});
        return;
    }
}

module.exports = register_action;
