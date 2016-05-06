
export async function fetchNamespaces() {
    return new Promise(resolve => {
        setTimeout(() => resolve(["qce/a", "qce/b"]), 2000);
    });
}