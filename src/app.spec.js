import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

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
    it('when in home page and clicking Create User button it should redirect to form page', () => {});
})