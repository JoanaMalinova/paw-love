async function requester(method, url, data) {

    let options = {
        method,
        headers: {}
    };

    if (data !== undefined) {
        options.headers = { "Content-Type": "application/json" };
        options.body = JSON.stringify(data);
    }

    const user = JSON.parse(localStorage.getItem('auth'));

    if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }

    try {

        const res = await fetch(url, options);

        if (res.status === 204) {
            return res;
        }

        const result = await res.json();

        if (res.ok === false) {
            if (res.status === 403) {
                localStorage.removeItem('user');
            }
            throw new Error(result.message)
        }

        return result;
    }
    catch (err) {
        alert(err.message)
        throw err;
    }
}

const get =  requester.bind(null, "GET");
const post = requester.bind(null, "POST");
const put = requester.bind(null, "PUT");
const patch = requester.bind(null, "PATCH");
const del = requester.bind(null, "DELETE");

export {get, post, put, patch, del}


