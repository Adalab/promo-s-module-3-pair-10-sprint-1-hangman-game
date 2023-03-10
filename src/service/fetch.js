const callToApi = () => {
    return fetch ('https://dev.adalab.es/api/random/word')
    .then ((response) => response.json())
    .then ((response) => {
       //const result = response
       return response.word;
    })
}

export default callToApi;