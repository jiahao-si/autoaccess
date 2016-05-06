import { FetcherState } from "@tencent/qcloud-redux-fetcher";

export interface RootState {
    namespaces?: FetcherState<string[]>;
    currentNamespace?: string;
    currentModuleName?: string;
}
