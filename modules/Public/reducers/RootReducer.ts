import { combineReducers } from 'redux';
import { generateFetcherReducer, FetcherTrigger, FetcherState } from "@tencent/qcloud-redux-fetcher";
import { reduceToPayload, serialReducer } from "@tencent/qcloud-lib";
import { RootState } from "../models";
import { ReduxAction } from "../../../types";
import * as ActionTypes from "../constants/ActionTypes";

let _RootReducer = combineReducers({
    namespaces: generateFetcherReducer<string[]>({
        actionType: ActionTypes.FetchNamespaces,
        initialData: []
    }),
    currentModuleName: (state = null, action) => {
        if (action.type === ActionTypes.SelectModule) {
            return action.payload;
        }
        return state;
    }
});

export const RootReducer = _RootReducer;