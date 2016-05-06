import { extend } from "@tencent/qcloud-lib";
import { generateFetcherActionCreator } from "@tencent/qcloud-redux-fetcher";
import * as ActionType from "../constants/ActionTypes";
import * as WebAPI from "../WebAPI";
import { Wiki, Example } from "../models";
import { ReduxAction } from "../../../types";

const wikiFetcherActions = generateFetcherActionCreator({
    actionType: ActionType.FetchWikis,
    fetcher: (state, { noCache } = { noCache: false }) => {
        return WebAPI.getAllWikies({ noCache });
    }
});

const wikiSelectActions = {
    select(wiki: Wiki): ReduxAction<Wiki> {
        return {
            type: ActionType.SelectWiki,
            payload: wiki
        }
    }
};

export const wikiActions = extend({}, wikiFetcherActions, wikiSelectActions);

export const exampleActions = {
    select(example: Example) {
        return {
            type: ActionType.SelectExample,
            payload: example
        }
    }
}