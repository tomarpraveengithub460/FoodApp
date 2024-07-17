import { render,screen } from "@testing-library/react"
import { act } from 'react';
import RestaurentMenu from "../RestaurentMenu"
import MOCK_DATA_NAME from '../mocks/mockResMenu.json'
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/dom'



global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA_NAME),
    });
  });

it("Should load Restaurant Menu Component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <RestaurentMenu />
                </Provider>
            </BrowserRouter>
        )
    );
    // const accordianHeader = screen.getByText("Recommended (20)");
    // fireEvent.click(accordianHeader);
    // expect(screen.getAllByTestId('foodItems').length);
});