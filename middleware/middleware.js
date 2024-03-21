const jwt = require('jsonwebtoken')
const db = require("../database/database");
const Utilisateur = require('../models/utilisateurModel')
require('dotenv').config()

exports.authenticator = (req, res, next)=>{
    const token = req.params.token ? req.params.token : req.headers.authorization
    console.log(token)
    if (token && process.env.SECRET_KEY){
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) =>{
            if(err){
                res.status(401).json({erreur: "accès refusé"})
            }
            else{
                console.log(decoded);
                next()
            }
        })
    }   else{
        res.status(401).json({erreur: "accès refusé"})
    }
}

// exports.isAdmin = async (req, res, next) => {
//     const token = req.params.token || req.headers.authorization;
//     console.log(token);
//
//     if (token && process.env.SECRET_KEY) {
//         try {
//             const decoded = jwt.verify(token, process.env.SECRET_KEY);
//             console.log(decoded);
//
//             const user = await Utilisateur.findOne({
//                 where: { email: decoded.email },
//             });
//
//             if (user && user.role === 1) {
//                 next();
//             } else {
//                 res.status(403).json({ erreur: "accès denied" });
//             }
//         } catch (err) {
//             res.status(401).json({ erreur: "accès refusé" });
//         }
//     } else {
//         res.status(401).json({ erreur: "accès refusé" });
//     }
// };

// exports.iscomptables = async (req, res, next) => {
//     const token = req.params.token || req.headers.authorization;
//     console.log(token);
//
//     if (token && process.env.SECRET_KEY) {
//         try {
//             const decoded = jwt.verify(token, process.env.SECRET_KEY);
//             console.log(decoded);
//
//             const user = await Utilisateur.findOne({
//                 where: { email: decoded.email },
//             });
//
//             if (user && user.role === 2) {
//                 next();
//             } else {
//                 res.status(403).json({ erreur: "accès denied" });
//             }
//         } catch (err) {
//             res.status(401).json({ erreur: "accès refusé" });
//         }
//     } else {
//         res.status(401).json({ erreur: "accès refusé" });
//     }
// };

// exports.isAdminOrComptable = async (req, res, next) => {
//     const token = req.params.token || req.headers.authorization;
//     console.log(token);
//
//     if (token && process.env.SECRET_KEY) {
//         try {
//             const decoded = jwt.verify(token, process.env.SECRET_KEY);
//             console.log(decoded);
//
//             const user = await Utilisateur.findOne({
//                 where: { email: decoded.email },
//             });
//
//             if (user && user.role === 1 || user && user.role === 2) {
//                 next();
//             } else {
//                 res.status(403).json({ erreur: "accès denied" });
//             }
//         } catch (err) {
//             res.status(401).json({ erreur: "accès refusé" });
//         }
//     } else {
//         res.status(401).json({ erreur: "accès refusé" });
//     }
// };