const { mainModule } = require("process");

const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", socket => {
    console.log("IO Connect");
});

module.exports = {
    app,
    server
};
