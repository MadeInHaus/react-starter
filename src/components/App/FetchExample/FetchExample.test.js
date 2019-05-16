import {
    getCharacterIdByFirstName,
    getCharacterOriginById,
} from './FetchExampleUtils';

const fakeDataById = {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
    },
};

const fakeDataByName = {
    results: [
        {
            id: 2,
            name: 'Morty Smith',
            status: 'Alive',
            species: 'Human',
            type: '',
            gender: 'Male',
        },
    ],
};

it('returns character id from character name', () => {
    const fakeFetch = jest.fn().mockReturnValue(
        Promise.resolve({
            json: () => Promise.resolve(fakeDataByName),
        })
    );
    return getCharacterIdByFirstName(fakeFetch, 'morty').then(result => {
        expect(result).toBe(2);
        expect(fakeFetch).toBeCalledWith(
            'https://rickandmortyapi.com/api/character/?name=morty'
        );
    });
});

it('returns character origin from character id', () => {
    const fakeFetch = jest.fn().mockReturnValue(
        Promise.resolve({
            json: () => Promise.resolve(fakeDataById),
        })
    );
    return getCharacterOriginById(fakeFetch, 2).then(result => {
        expect(result).toBe('Earth (C-137)');
        expect(fakeFetch).toBeCalledWith(
            'https://rickandmortyapi.com/api/character/2'
        );
    });
});

// combine the two tests (integration test)
it('returns character origin from character name', () => {
    const fakeFetchName = jest.fn().mockReturnValue(
        Promise.resolve({
            json: () => Promise.resolve(fakeDataByName),
        })
    );
    const fakeFetchId = jest.fn().mockReturnValue(
        Promise.resolve({
            json: () => Promise.resolve(fakeDataById),
        })
    );
    return getCharacterIdByFirstName(fakeFetchName, 'morty').then(id => {
        getCharacterOriginById(fakeFetchId, id).then(result => {
            expect(result).toBe('Earth (C-137)');
            expect(fakeFetchName).toBeCalledWith(
                'https://rickandmortyapi.com/api/character/?name=morty'
            );
            expect(fakeFetchId).toBeCalledWith(
                'https://rickandmortyapi.com/api/character/2'
            );
        });
    });
});
