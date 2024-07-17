import { fireEvent, render, screen } from "@testing-library/react"
import Header from '../Header'
import { Provider } from "react-redux"
import appStore from '../../utils/appStore'
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'

// 'it' is an alias of 'test'
it("Should render Header Component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    // const loginButton = screen.getByText("Login"); // Not Recommended
    // const loginButton = screen.getByRole("button"); //Recommended
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const cartItems = screen.getByText('🛒(0)');
    expect(cartItems).toBeInTheDocument();
});

it("Should change Login Button to Logout on Cick", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole('button', { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole('button', { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
});