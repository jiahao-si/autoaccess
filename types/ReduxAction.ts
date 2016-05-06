/**
 * FSA (https://github.com/acdlite/flux-standard-action) with generic type
 * */
export interface ReduxAction<TPayload> {
    type: string | number;
    payload?: TPayload;
    error?: boolean;
    meta?: any;
}