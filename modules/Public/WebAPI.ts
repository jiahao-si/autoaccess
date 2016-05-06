export async function fetchNamespaces() {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(["qce/a", "qce/b"]), 2000);
        // $.ajax('/').then(function(data) {
        //     resolve(data)
        //  }, reject)
    });
}