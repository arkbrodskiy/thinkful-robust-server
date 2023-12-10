const users = require("../data/users-data");

// Middleware
const userExists = (req, res, next) => {
    const { userId } = req.params;
    const foundUser = users.find(user => user.id === Number(userId));
    if (foundUser) {
        res.locals.user = foundUser;
        return next();
    }
    next({
        status: 404,
        message: `User id not found: ${userId}`,
    });
}

// CRUDL
const read = (req, res, next) => {
    res.json({ data: res.locals.user });
};

const list = (req, res) => {
    res.json({ data: users });
}





module.exports = {
    list,
    read: [userExists, read],
    userExists,
};