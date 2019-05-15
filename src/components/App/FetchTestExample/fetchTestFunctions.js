export const getCharacterOrigin = (fetch, id) => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => data.origin.name);
};
