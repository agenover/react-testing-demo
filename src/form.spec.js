import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CoolForm from "./form";
import userEvent from "@testing-library/user-event"

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

    it.only('when pressing save if required fields are not filled up should show required field message in all required fields', async () => {
        const handleClick = jest.fn();
        const user = userEvent.setup();
    
        render(
            <MemoryRouter>
                <CoolForm onSubmit={handleClick} />
            </MemoryRouter>
            )
    
        // Act
        const firstName = screen.getByLabelText('First Name')
        const lastName = screen.getByLabelText('Last Name')
        const age = screen.getByText('Age')
    
        // await user.click(firstName)
        // await user.click(lastName)
        // await user.click(age)

        // Tried to only press Save button to trigger all required alerts at once
        const saveButton = screen.getByText('Save')
        await user.click(saveButton)

        const firstNameRequired = screen.getByText('First Name is Required')
        const lastNameRequired = screen.getByText('Last Name is Required')
        const ageRequired = screen.getByText('Age is required')
        const genderRequired = screen.getByText('gender is required')
        const stateRequired = screen.getByText('State is required')

        screen.debug();
        // fireEvent.click(screen.getByText('Save'))
    
        // Assert
        expect(handleClick).not.toHaveBeenCalledTimes(1)
        expect(firstNameRequired).toBeInTheDocument();
        expect(lastNameRequired).toBeInTheDocument();
        expect(ageRequired).toBeInTheDocument();
        expect(genderRequired).toBeInTheDocument();
        expect(stateRequired).toBeInTheDocument();

    });
    
    it('when pressing save if required fields are filled up should print form in the console', async () => {
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

    await userEvent.type(firstName, 'John')
    await userEvent.type(lastName, 'Smith')
    await userEvent.type(age, '21')
    await userEvent.click(gender)
    screen.debug();
    // fireEvent.click(screen.getByText('Save'))

    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1)

    });
})