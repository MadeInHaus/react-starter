import { getCharacterOrigin } from './fetchTestFunctions';

it('returns origin name from rick and morty api for character id', () => {
    const fakeFetch = jest.fn().mockReturnValue(
        Promise.resolve({
            json: () =>
                Promise.resolve({
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
                }),
        })
    );
    return getCharacterOrigin(fakeFetch, 2).then(result => {
        expect(result).toBe('Earth (C-137)');
        expect(fakeFetch).toBeCalledWith(
            'https://rickandmortyapi.com/api/character/2'
        );
    });
});
