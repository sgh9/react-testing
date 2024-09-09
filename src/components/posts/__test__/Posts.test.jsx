import { act, getByRole, getByText, render, screen, waitFor } from "@testing-library/react"
import Posts from "../Posts";
import axios from "axios";
import userEvent from "@testing-library/user-event";

jest.mock("axios");
const api = axios.get;
// axios.get = jest.fn();
const users= [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]

const posts1 = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
    
];

const posts3 = [
      {
        "userId": 3,
        "id": 21,
        "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
        "body": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
      },
      {
        "userId": 3,
        "id": 22,
        "title": "dolor sint quo a velit explicabo quia nam",
        "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
      },
];

const posts5 = [
        {
        "userId": 5,
        "id": 41,
        "title": "non est facere",
        "body": "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe"
        },
        {
        "userId": 5,
        "id": 42,
        "title": "commodi ullam sint et excepturi error explicabo praesentium voluptas",
        "body": "odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut"
        },
]

const user1 = users[0];
const user3 = users[2];
const user5 = users[4];

describe("user api call check", ()=> {

	afterEach(()=> {
		// jest.clearAllMocks();
		// api.mockClear();
		// jest.resetModules();
	});

	afterEach(()=> {
		api.mockClear();
	});

	describe("API TEST", ()=> {
		beforeEach(()=> {
			act(()=> {
				//on mount
				api.mockResolvedValueOnce({
					data: users
				});
	
				api.mockResolvedValueOnce({
					 data: posts1
				});
	
				api.mockResolvedValueOnce({
					data: user1
				});
	
				//1st rerender on user click 3
				api.mockResolvedValueOnce({
					data: posts3
			   });
	
	
				api.mockResolvedValueOnce({
					data: user3
				});
	
				//2nd rerender on user click 5
	
				api.mockResolvedValueOnce({
					data: posts5
				});
	
				api.mockResolvedValueOnce({
					data: user5
				});
				
			 });
		});
		test("call", async()=> {
			const isGetDataCalled = jest.fn();
		
			const { getByTestId, rerender } = render(<Posts call="" visible={true} isGetDataCalled={isGetDataCalled}/>);
		
		
			const post = await waitFor(()=> getByTestId("1"));
			expect(post.textContent).toEqual("1)" +posts1[0].title);
	
			const userName = await waitFor(()=> getByTestId("Leanne Graham"));
			expect(userName).toBeInTheDocument();
	
			//first click
	
			const userId3 = await waitFor(()=> getByTestId(`user-3`));
			userEvent.click(userId3)
			const userName3 =  await waitFor(()=>getByTestId("Clementine Bauch"));
			expect(userName3).toBeInTheDocument();
	
			//2nd click
			
			const userId5 = await waitFor(()=> getByTestId(`user-5`))
			userEvent.click(userId5);
	
			const userName5 = await waitFor(()=> getByTestId("Chelsey Dietrich"));
			expect(userName5).toBeInTheDocument();
	
			await waitFor(()=> {
				expect(isGetDataCalled).toHaveBeenCalledTimes(3)
				expect(api).toHaveBeenCalledTimes(7)
			})
		})
	})

	describe("API CALL ERROR", ()=> {
		beforeEach(()=> {
			act(()=> {
				api.mockRejectedValueOnce(()=>Promise.reject("err"));
				api.mockRejectedValueOnce(()=>Promise.reject("err"));
				api.mockRejectedValueOnce(()=>Promise.reject("err"));
			})
		});

		test("Api err", async()=> {
			const isGetDataCalled = jest.fn();
			const { getByTestId, rerender } = render(<Posts visible={true} isGetDataCalled={isGetDataCalled}/>);
		
		
			const post = await waitFor(()=> getByTestId("err"));
			expect(post).toBeInTheDocument();
			screen.debug();
		})
	});

	describe("API CALL ERROR USER", ()=> {
		beforeEach(()=> {
			act(()=> {
				api.mockRejectedValueOnce(()=>Promise.reject("err"));
				api.mockResolvedValueOnce({ data: posts1 });
				api.mockRejectedValueOnce(()=>Promise.reject("err"));
			})
		});

		test("Api err", async()=> {
			const isGetDataCalled = jest.fn();
			const { getByTestId, rerender } = render(<Posts visible={true} isGetDataCalled={isGetDataCalled}/>);
		
		
			const post = await waitFor(()=> getByTestId("err"));
			expect(post).toBeInTheDocument();
			screen.debug();
		});

		test("Api err", async()=> {
			const isGetDataCalled = jest.fn();
			const { getByTestId, rerender } = render(<Posts isGetDataCalled={isGetDataCalled} />);
		
		
			const post = await waitFor(()=> getByTestId("err"));
			expect(post).toBeInTheDocument();
			screen.debug();
		})
	})
    
})  