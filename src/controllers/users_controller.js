const users = [
    {
        id: 1,
        name: "Andre Julian",
        lastName: "Gutiérrrez Alcazar",
    },
    {
        id: 2,
        name: "Bryan de Jesús",
        lastName: "Chanona Hernández",
    },
    {
        id: 3,
        name: "Limberg",
        lastName: "Del Valle Vargas",
    }
];

const getUsers = (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: 200, data: users }));
};

const findUserById = (req, res) => {
    const { userId } = req.params;

    if (isNaN(userId)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: 400, message: "Invalid user id" }));
    }

    const user = users.find((user) => user.id === userId);

    if (user) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: 200, data: user }));
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: 404, message: "Not found" }));
}

module.exports = {
    getUsers,
    findUserById
}