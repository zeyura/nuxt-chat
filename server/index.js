//const express = require("express");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");
const { app, server } = require("./app");

//const app = express();

let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

async function start() {
    const nuxt = new Nuxt(config);

    const { host, port } = nuxt.options.server;

    // build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    } else {
        await nuxt.ready();
    }

    // middleware
    app.use(nuxt.render);

    // Listen the server
    server.listen(port, () => {
        consola.ready({
            message: `Server listening on http://$(host):$(port)`,
            badge: true
        });
    });
}
start();
