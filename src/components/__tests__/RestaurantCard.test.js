import { render ,screen} from '@testing-library/react'
import RestaurentCard from '../RestaurentCard'
import MOCK_DATA from '../mocks/resCardMock.json'
import '@testing-library/jest-dom';

test("Should Render Restaurant Card Component with props Data", () => {
    render(<RestaurentCard resData={MOCK_DATA} />);
    const name = screen.getByText("Burger King");
    expect(name).toBeInTheDocument("Burger King");
});