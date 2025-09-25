const { getUsers, findUserById } = require("../controllers/users_controller");

const userRoutes = (req, res) => {

    if (req.method === "GET" && req.url === "/users") {
        return getUsers(req, res);
    } else if (req.method === "GET" && req.url.startsWith("/users/")) {
        const userId = parseInt(req.url.split('/')[2]); 
        req.params = { userId };
        return findUserById(req, res);
    }

}

module.exports = userRoutes;