import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'One Punch';

    test('debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={ category }/> );
        expect( screen.getByText('Cargando...') ); 
        expect( screen.getByText( category) ); 
    })

    test('debe mostrar Items cuando se cargan las imágenes', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpj'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpj'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })
        render( <GifGrid category={ category }/> );
        expect( screen.getAllByRole('img').length ).toBe(2);

    })
})