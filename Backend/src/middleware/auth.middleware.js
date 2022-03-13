const { verifyToken } = require('../helpers/JwtValidation');

const AdminAuth = (req, res, next) => {
    verifyToken(req, res, next, 'admin');
}
const ManagerAuth = (req, res, next) => {
    verifyToken(req, res, next, 'manager');
};
const NationalManager = (req, res, next) => {
    verifyToken(req, res, next, 'nationalManager');
};

module.exports = {
    AdminAuth,
    ManagerAuth,
    NationalManager,

};