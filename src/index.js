const http = require("http");
const userRoutes = require("../src/routes/users_routes")
const PORT = 4000;

const server = http.createServer((req, res) => {

    if (req.url.startsWith("/home")) {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1> Server HTTP with Nodejs </h1>');
        res.end();     
    } else if (req.url.startsWith("/users")) {
        userRoutes(req, res);
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1> Page not found </h1>');
        res.end();
    }
    
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
