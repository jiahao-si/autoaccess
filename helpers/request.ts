import * as $ from "jquery";

export async function request(url: string, options?: JQueryAjaxSettings) {
    return new Promise<any>((resolve, reject) => {
        $.ajax(url, $.extend({}, options, {
            success: resolve,
            error: reject
        }));
    });
}
