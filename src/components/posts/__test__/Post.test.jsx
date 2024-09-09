import { render, waitFor } from "@testing-library/react"
import Post from "../Post";

const post = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

test("post test", async()=> {
    const { getByTestId } = render(<Post post={post}/>);
    const postElm =await waitFor(()=> getByTestId(post.id));
    expect(postElm).toBeInTheDocument();

})