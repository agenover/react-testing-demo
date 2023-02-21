import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import userEvent from "@testing-library/user-event";
import * as router from 'react-router'

describe('testing home page', () => {
    it('when in home page you should see Welcome to Coolform! and Create User button"', async () => {
        // Arrange
        await render(
            <MemoryRouter>
                <App></App>
            </MemoryRouter>
        )

        // Act
        const welcome = screen.getByText(/welcome to coolform!/i)
        
        // Assert
        expect(welcome).toBeInTheDocument();
    });
    it('when in home page and clicking Create User button it should redirect to form page', async () => {
        // Arrange
        const navigate = jest.fn()
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)

        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        
        // Act
        const createNewUser = screen.getByText('Create New User')
        await userEvent.click(createNewUser)

        // Assert
        expect(navigate).toHaveBeenCalledWith('/create-user')
    });
})