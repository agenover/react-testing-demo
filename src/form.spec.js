import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import CoolForm from "./form";
import userEvent from "@testing-library/user-event"
import * as router from 'react-router'

describe('testing form', () => {
    it('when in form page and clicking on back to home page it should get back to home page', async () => {
        // Arrange
        const navigate = jest.fn()
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
        render(
            <MemoryRouter>
                <CoolForm />
            </MemoryRouter>
        )
        
        // Act
        const homePageButton = screen.getByText('Back to home page')
        await userEvent.click(homePageButton)

        // Assert
        expect(navigate).toHaveBeenCalledWith('/home')
    });
    
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
        const saveButton = screen.getByRole('button', {name: /save/i})
        
        // Assert
        expect(formTitle).toBeInTheDocument();
        expect(genderTitle).toBeInTheDocument();
        expect(stateTitle).toBeInTheDocument();
        expect(isPrivate).toBeInTheDocument();
        expect(isPreferred).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(firstName).toBeInTheDocument();
        expect(lastName).toBeInTheDocument();
        expect(saveButton).toBeInTheDocument();
    });

    it('when pressing save a required message should appear in required fields when left blank', async () => {
        const handleClick = jest.fn();
    
        render(
            <MemoryRouter>
                <CoolForm onSubmit={handleClick} />
            </MemoryRouter>
            )
    
        // Act
        const saveButton = screen.getByText('Save')
        await userEvent.click(saveButton)

        // Assert
        await screen.findByText("First Name is required")
        await screen.findByText("Last Name is required")
        await screen.findByText("Age is required")
        await screen.findByText("gender is required")
        await screen.findByText("State is required")
    });
    
    it('when pressing save and form completed should print form in the console', async () => {
    // Arrange
    const handleClick = jest.fn();
    
    render(
        <MemoryRouter>
            <CoolForm onSubmit={handleClick} />
        </MemoryRouter>
        )

    // Act
    const firstName = screen.getByLabelText('First Name')
    const lastName = screen.getByLabelText('Last Name')
    const age = screen.getByLabelText('Age')
    const gender = screen.getByText('Male')
    const state = screen.getByLabelText('Living')
    const save = screen.getByText('Save')

    await userEvent.type(firstName, 'John')
    await userEvent.type(lastName, 'Smith')
    await userEvent.type(age, '21')
    await userEvent.click(gender)
    await userEvent.click(state)

    await userEvent.click(save)

    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveBeenCalledWith({
        firstName: 'John',
        lastName: 'Smith',
        state: 'living',
        gender: 'male',
        description: '',
        age: '21',
        isPreferred: false,
        isPrivate: false,
    })

    });
})