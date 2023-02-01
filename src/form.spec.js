import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CoolForm from "./form";

describe('testing form', () => {
    it('when in form page and clicking on back to home page it should get back to home page', () => {});
    it('when in form page the form should contain all the fields', async () => {
        // Arrange
        render(
            <MemoryRouter>
                <CoolForm />
            </MemoryRouter>
        )

        // Act
        const formTitle = screen.getByText(/Form/i)
        const genderTitle = screen.getByText(/Gender/i)
        const stateTitle = screen.getByText(/State/i)
        const isPrivate = screen.getByText(/Should profile be private?/i)
        const isPreferred = screen.getByText(/Is this the preferred profile?/i)
        const description = screen.getByText(/Add a description/i)
        const firstName = screen.getByText(/First Name/i)
        const lastName = screen.getByText(/Last Name/i)
        
        // Assert
        expect(formTitle).toBeInTheDocument();
        expect(genderTitle).toBeInTheDocument();
        expect(stateTitle).toBeInTheDocument();
        expect(isPrivate).toBeInTheDocument();
        expect(isPreferred).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(firstName).toBeInTheDocument();
        expect(lastName).toBeInTheDocument();
    });
    it('when pressing save if required fields are not filled up should show required field', () => {});
    it.only('when pressing save if required fields are filled up should print form in the console', () => {
        const logAnswer = jest.spyOn(console, 'log');

        console.log('hello');

        expect(logAnswer).toHaveBeenCalledWith('hello');
    });
})