import { extend } from "@tencent/qcloud-lib";
import { generateFetcherActionCreator } from "@tencent/qcloud-redux-fetcher";
import * as ActionType from "../constants/ActionTypes";
import * as WebAPI from "../WebAPI";
import { ReduxAction } from "../../../types";

const namespaceFetcherActions = generateFetcherActionCreator({
    actionType: ActionType.FetchNamespaces,
    fetcher: WebAPI.fetchNamespaces
});

export const namespaceActions = extend({}, namespaceFetcherActions);

export const moduleActions = {
    select: (moduleName: string) => {
        return {
            type: ActionType.SelectModule,
            payload: moduleName
        }
    }
}