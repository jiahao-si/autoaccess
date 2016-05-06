import * as express from "express";
import * as path from "path";
import * as fs from "fs";
import * as marked from "marked";

export function serveDocument(app: express.Express) {

    const documentMiddleware = (request: express.Request, response: express.Response, next: Function) => {

        if (/\/wikis/.test(request.url)) {
            const contentDir = fs.readdirSync(path.resolve(__dirname, "../wikis"));
            response.json(contentDir.map(name => {
                const content = fs.readFileSync(path.resolve(__dirname, "../wikis", name), "utf-8");
                return { name, content };
            }));
        } else {
            next();
        }

    };

    app.use("/document", documentMiddleware);
    app.use("/document", express.static(path.resolve(__dirname, "../static")));
}
