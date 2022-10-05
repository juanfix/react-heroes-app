import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <SearchPage />', () => { 

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrarse correctamente con valores por defecto', () => { 
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        //screen.debug();
        expect( container ).toMatchSnapshot();
     });

     test('Debe de mostrar Batman y el input con el valor del queryString', () => { 
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )

        //screen.debug();
        const input = screen.getByRole('textbox');
        expect( input.value ).toContain('batman');

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg')

        const { style } = screen.getByLabelText('alert-secondary');
        expect( style.display ).toBe('none');

     });

    test('Debe de mostrar un error si no se encuentra el hero (batman123)', () => { 
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );
        
        //screen.debug();
        const { textContent } = screen.getByLabelText('alert-danger');
        expect(textContent).toContain('batman123');

    });

    test('Debe de llamar el navigate a la pantalla nueva', () => { 

        const inputValue = 'superman'

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        //screen.debug();
        const searchText = screen.getByLabelText('searchText');
        fireEvent.change(searchText, {target: { value: inputValue }});

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${ inputValue }`);

    });

     
 })