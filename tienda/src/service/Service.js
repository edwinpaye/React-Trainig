const Service = {

    // get: async (url, success, err) => {
    //     try{
    //         const resp = await fetch(url);
    //         if(resp.error)
    //             throw 'request error';
    //         const json = await resp.json();
    //         success(json);
    //     }catch(e){
    //         err(e);
    //     }
    // },

    request: (url, success, error, dataRequest) => {
        fetch(url, dataRequest)
        .then(resp => {
            if (!resp.ok) throw resp
            return resp.json()
        })
        .then(success)
        .catch(error)
    },

    get: (url, success, error) => request(url, success, error, {}),

    post: (url, success, error, object) => request(
        url, success, error, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        }
    ),

    put: (url, success, error, object) => request( 
        url, success, error, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        }
    ),

    delete: (url, success, error) => request(
        url, success, error, {
            method: 'DELETE'
        }
    )
}

export default Service;