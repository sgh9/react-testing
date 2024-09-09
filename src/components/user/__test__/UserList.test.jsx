import { render, screen, within } from "@testing-library/react";
import UserList from "../UserList";

let users = [
    { 
        name: "Sangamesh",
        email: "sangamesh@gmail.com",
        mobile: "545454"
    }
];

test("show users", ()=> {
    const {rerender} = render(<UserList/>);
    rerender(<UserList users={users}/>);
    //screen.logTestingPlaygroundURL();
    //1)container and html query selector 2)testId and within

    // const row = screen.getAllByRole("row")[1];
    const row = within(screen.getByTestId("users")).getByRole("row");
    const [name, email, mobile] = row.childNodes;
    expect(name.textContent).toMatch("Sangamesh")

})