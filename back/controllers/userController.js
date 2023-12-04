import bcrypt from "bcrypt"
import User from "../models/userModel.js"
import jwt from "jsonwebtoken"


// Système de connexion et extraction du token
export const Login = async (req, res) => {

    const user = await User.findOne({ email: req.body.email })

    if (user) {
        let checkPassword = bcrypt.compareSync(req.body.password, user.password)

        if (!checkPassword) {
            return res.json({ message: "Mot de passe incorrect, veuillez réessayer" })
        }

        // Création du token à la connexion, pas à l'inscription
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        })

        // Ne jamais renvoyer le mot de passe au client
        res.json({
            id: user._id,
            login: user.login,
            email: user.email,
            role: user.role,
            token: token
        })

    } else {
        res.json({message: "Cet utilisateur n'existe pas, veuillez réessayer"})
    }
    
}

// Système d'inscription comprenant la vérifications des doublons et des existants
export const Register = async (req, res) => {
    try {
        // Je vérifie si l'email n'existe pas
        let checkMailExist = await User.findOne({ email: req.body.email })

        // Je vérifie si le login n'est pas déjà utilisé
        let checkLoginExist = await User.findOne({ login: req.body.login })

        if (checkMailExist) {
            return res.json({ message: "Cet email existe déjà" })
        }

        if (checkLoginExist) {
            return res.json({ message: "Ce login existe déjà" })
        }

        let newUser = new User({
            login: req.body.login,
            email: req.body.email,
            password: req.body.password
        })

        // Là, mon hook va s'exécuter avant de sauvegarder dans la BDD (hachage du mot de passe)
        await newUser.save()

        res.json({ message: "Votre compte a bien été créé" })
    } catch (err) {
        console.log(err)
        res.json({ message: "Impossible de créer votre compte" })
    }
}