import { Wiki } from "./models";
import { request } from "./helpers/request";


let cachedWikis: Promise<Wiki[]>;
export async function getAllWikies({ noCache } = { noCache: false }) {
    if (!cachedWikis || noCache) {
        cachedWikis = request("/document/wikis");
    }
    const wikis = await cachedWikis;
    wikis.forEach(wiki => {
        wiki.name = wiki.name.replace(/\.md$/, "");
        wiki.title = resolveWikiTitle(wiki.content);
    });
    return wikis;
}

function resolveWikiTitle(wikiContent: string) {
    return /^(.+)$/m.exec(wikiContent)[1];
}
