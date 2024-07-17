import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";


// describe("Contact us Page Test Cases ", () => {

//     test("Should load Contact us Page", () => {
//         render(<Contact />);
//         const heading = screen.getByRole("heading");
//         expect(heading).toBeInTheDocument();
//     });

//     test("Should load button inside Contact Component ", () => {
//         render(<Contact />);
//         const button = screen.getByRole("button");
//         expect(button).toBeInTheDocument();
//     });

//     test("Should load input name inside Contact Component", () => {
//         render(<Contact />);
//         const input = screen.getByPlaceholderText("name");
//         expect(input).toBeInTheDocument();
//     });

//     test("Should load 3 Input Boxes on Contact Component ", () => {
//         render(<Contact />);
//         //Querying
//         const inputBoxes = screen.getAllByRole("textbox");  //input==textbox in react
//         console.log(inputBoxes.length);
//         // expect(inputBoxes.length).toBe(3);
//         expect(inputBoxes.length).not.toBe(1);
//     });
// });



describe("Contact us Page Test Cases ", () => {

    it("Should load Contact us Page", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    it("Should load button inside Contact Component ", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it("Should load input name inside Contact Component", () => {
        render(<Contact />);
        const input = screen.getByPlaceholderText("name");
        expect(input).toBeInTheDocument();
    });

    it("Should load 3 Input Boxes on Contact Component ", () => {
        render(<Contact />);
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");  //input==textbox in react
        console.log(inputBoxes.length);
        // expect(inputBoxes.length).toBe(3);
        // expect(inputBoxes.length).not.toBe(1);
        expect(inputBoxes.length).toBeTruthy();
    });
});

//it is an alias of test, both are same.so you can use any of these
//we can have nested describe test Block