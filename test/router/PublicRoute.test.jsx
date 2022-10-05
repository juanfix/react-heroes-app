import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('Pruebas en <PublicRoute />', () => {
    test('Debe de mostrar el children si no esta autenticado', () => {

        const contextValue = {
            isLogged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Public route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        //screen.debug();
        expect(screen.getByText('Public route')).toBeTruthy();
    });

    test('Debe de navegar si esta autenticado', () => {

        const contextValue = {
            isLogged: true,
            user: {
                id: 123,
                name: 'User123'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={ 
                            <PublicRoute>
                                <h1>Public route</h1>
                            </PublicRoute>
                         } />
                        <Route path="marvel" element={ <h1>Marvel page</h1> } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        //screen.debug();
        expect(screen.getByText('Marvel page')).toBeTruthy();

    });
    
});
