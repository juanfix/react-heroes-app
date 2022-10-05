import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"

import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en el componente <NavBar />', () => { 

    const logout = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });
    
    const contextValue = {
        isLogged: true,
        user: {
            id: 123,
            name: 'User 123'
        },
        logout
    }

    test('Debe de mostrar el nombre del usuario si esta logueado', () => { 

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>                
            </MemoryRouter>
        )

        //screen.debug();
        expect(screen.getByText('User 123')).toBeTruthy();
        
    });

    test('Debe de llamar el logout() y el navigate al hacer click en el boton Logout', () => {

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>                
            </MemoryRouter>
        )
        
        //screen.debug();
        const btnLogout = screen.getByLabelText('btnLogout');
        fireEvent.click(btnLogout);

        expect(logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {'replace': true});

    });
    
 })