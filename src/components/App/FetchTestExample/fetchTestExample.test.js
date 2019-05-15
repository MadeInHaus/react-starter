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
                    location: {
                        name: 'Earth (Replacement Dimension)',
                        url: 'https://rickandmortyapi.com/api/location/20',
                    },
                    image:
                        'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
                    episode: [
                        'https://rickandmortyapi.com/api/episode/1',
                        'https://rickandmortyapi.com/api/episode/2',
                    ],
                    url: 'https://rickandmortyapi.com/api/character/2',
                    created: '2017-11-04T18:50:21.651Z',
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
