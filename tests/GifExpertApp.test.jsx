import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react'
import { GifExpertApp } from "../src/GifExpertApp"


describe('Pruebas en <GifExpertApp />', () => {

    test('debe agregar una nueva categoría cuando onAddCategory se llama', () => {

        render( <GifExpertApp /> );
    
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
    
        fireEvent.input( input, { target: { value: 'Dragon Ball' } } );
        fireEvent.submit(form)
    
        expect(screen.getByText('Dragon Ball')).toBeInTheDocument()
    })

    test('no debe agregar una categoría existente', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Simular la entrada de un valor que ya existe
        fireEvent.input( input, { target: { value: 'OnePunch' } });

        // Simular el envío del formulario
        fireEvent.submit( form );

        // Verificar que la categoría no se haya agregado dos veces
        expect(screen.getAllByText('OnePunch').length).toBe(1);
    });

    test('debe mantener el orden de las categorías con la nueva en la parte superior', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Agregar una nueva categoría
        fireEvent.input( input, { target: { value: 'Naruto' } });
        fireEvent.submit( form );

        // Obtener todas las categorías en orden
        const categories = screen.getAllByRole('heading', { level: 3 });

        // Verificar el orden
        expect(categories[0].textContent.trim()).toBe('Naruto');
        expect(categories[1].textContent.trim()).toBe('OnePunch');
    });

    test('debe coincidir con el snapshot', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });



})