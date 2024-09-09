import { render, screen } from "@testing-library/react";
import UserForm from "../UserForm";
import userEvent from "@testing-library/user-event";


const setUp = ()=> {
    const addUser = jest.fn();
    const wraper = render(<UserForm addUser={addUser}/>);

    return { addUser, wraper };
}

test("it shows 3 inputs and a btn", ()=> {
    setUp();
    const btn = screen.getByRole("button");
    const inputs = screen.getAllByRole("textbox");

    expect(inputs).toHaveLength(3);
    expect(btn).toBeInTheDocument();
});

test("test change", async()=> {

    const { addUser }= setUp();

    // const users = [];
    // const addUser = (user)=> {
    //     users.push(user)
    // };
    //render(<UserForm addUser={addUser}/>);

    const btn = screen.getByRole("button");
    const [name ,email, mobile] = screen.getAllByRole("textbox");

    // const name = screen.getByRole("textbox", { name: /name/i});
    // const email = screen.getByRole("textbox", { name: /email/i});
    // const mobile = screen.getByRole("textbox", { name: /mobile/i});

    // userEvent.type(name, "Sangamesh");
    // userEvent.type(email, "Sangamesh@gmail.com");
    // userEvent.type(mobile, "7795167682");

    userEvent.click(name);
    userEvent.keyboard("Sangamesh");

    userEvent.click(email);
    userEvent.keyboard("Sangamesh@gmail.com")

    userEvent.click(mobile);
    userEvent.keyboard("77777");

    userEvent.click(btn);
    //validation case 
    userEvent.click(btn);

    // expect(users).toHaveLength(5)
    expect(addUser).toHaveBeenCalledTimes(1);
});