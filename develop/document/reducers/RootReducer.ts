import { combineReducers } from 'redux';
import { generateFetcherReducer, FetcherTrigger, FetcherState } from "@tencent/qcloud-redux-fetcher";
import { reduceToPayload, serialReducer } from "@tencent/qcloud-lib";
import { Wiki, Example, RootState } from "../models";
import { ReduxAction } from "../../../types";
import { ExampleList } from "../examples";
import * as ActionTypes from "../constants/ActionTypes";

let _RootReducer = combineReducers({

    wikis: generateFetcherReducer({
        actionType: ActionTypes.FetchWikis,
        initialData: []
    }),

    examples: () => ExampleList,

    activeWiki: (state = null, action: ReduxAction<Wiki>) => {
        if (action.type === ActionTypes.SelectWiki) {
            return action.payload;
        }
        if (action.type === ActionTypes.SelectExample) {
            return null;
        }
        return state;
    },

    activeExample: (state = null, action: ReduxAction<Example>) => {
        if (action.type === ActionTypes.SelectExample) {
            return action.payload;
        }
        if (action.type === ActionTypes.SelectWiki) {
            return null;
        }
        return state;
    }
});

_RootReducer = serialReducer(_RootReducer, (state: RootState, action: ReduxAction<FetcherState<Wiki[]>>) => {
    if (action.type === ActionTypes.FetchWikis + <string><any>FetcherTrigger.Done) {
        if (!state.activeExample && !state.activeWiki) {
            state.activeWiki = state.wikis.data[0];
        }
    }

    return state;
});

export const RootReducer = _RootReducer;