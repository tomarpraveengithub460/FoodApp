import { render, screen} from "@testing-library/react"
import Contact from "../Contact";

test("Should load Contact us Page",()=>{
    render(<Contact/>);
    screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});