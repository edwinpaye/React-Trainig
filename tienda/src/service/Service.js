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

    get: (url, success, error) => {
        fetch(url)
        .then(resp => {
            if (!resp.ok) throw resp
            return resp.json()
        })
        .then(success)
        .catch(error)
    },

    post: (url, success, error, object) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        }).then( resp => {
            if (!resp.ok) throw resp
            return resp.json()
        }).then(success)
        .catch(error)
    }
}

export default Service;