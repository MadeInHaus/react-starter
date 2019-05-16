export const getCharacterIdByFirstName = (fetch, name) => {
    return fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then(response => response.json())
        .then(data => data.results[0].id);
};

export const getCharacterOriginById = (fetch, id) => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => data.origin.name);
};
