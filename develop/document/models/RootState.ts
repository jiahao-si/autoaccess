import { Example } from "./Example";
import { Wiki } from "./";
import { FetcherState } from "@tencent/qcloud-redux-fetcher";

export interface RootState {
    wikis?: FetcherState<Wiki[]>;
    examples?: Example[];
    activeWiki?: Wiki;
    activeExample?: Example;
}
