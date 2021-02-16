export default {

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

    get(url, success, error){ this.request(url, success, error, {})},

    post(url, success, error, dataJson){
        this.request( url, success, error, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataJson)
        })
    },

    put(url, success, error, dataJson){
        this.request(url, success, error, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataJson)
        })
    },

    delete(url, success, error){
        this.request(url, success, error, {
            method: 'DELETE'
        })
    }
}