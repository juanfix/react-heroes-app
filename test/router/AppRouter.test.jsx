import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { AppRouter } from "../../src/router/AppRouter"

describe('Pruebas en el <AppRouter />', () => { 
    test('Debe de mostrar el login si no esta autenticado', () => { 

        const contextValue = {
            isLogged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>                
            </MemoryRouter>
        )

        //screen.debug();
        expect(screen.getAllByText('Login').length).toBe(2);
     });

    test('Debe de mostrar el componente de Marvel si esta autenticado', () => { 

        const contextValue = {
            isLogged: true,
            user: {
                id: 123,
                name: 'User 123'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>                
            </MemoryRouter>
        )

        //screen.debug();
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
    })
 })