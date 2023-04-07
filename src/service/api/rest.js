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

        if (res.ok === false) {

            if (res.status === 403) {              
                const result = await res.json();
                return result.message;               
            }
            if (res.status === 404) {
                return
            }
        }

        const result = await res.json();

        return result;
    }
    catch (err) {
        console.log(err.message);
    }
}

const get = requester.bind(null, "GET");
const post = requester.bind(null, "POST");
const put = requester.bind(null, "PUT");
const patch = requester.bind(null, "PATCH");
const del = requester.bind(null, "DELETE");

export { get, post, put, patch, del }


