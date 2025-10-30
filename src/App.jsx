import { useState } from "react";

function App() {
  const [showList, setShowList] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDescending, setIsDescending] = useState(true);

  const list = [
    {
      title: "React",
      url: "https://react.dev/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: "Vue.js",
      url: "https://vuejs.org/",
      author: "Evan You",
      num_comments: 5,
      points: 8,
      objectID: 2,
    },
    {
      title: "Angular",
      url: "https://angular.io/",
      author: "Google Team",
      num_comments: 6,
      points: 7,
      objectID: 3,
    },
    {
      title: "Svelte",
      url: "https://svelte.dev/",
      author: "Rich Harris",
      num_comments: 4,
      points: 9,
      objectID: 4,
    },
  ];
  const filteredList = list.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <h1>this is app.jsx</h1>
      <label htmlFor="search">search</label>
      <input
        type="text"
        id="search"
        name="search"
        onChange={(e) => {
          setSearchTerm(e.target.value)
          setShowList(true);
        }}
      />
      {showList && (<>
        <button>sort</button>
        <ul>
          {filteredList.map(function (item) {
            return (
              <li key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title} </a>
                </span>
                <span>{item.author} </span>
                <span>{item.num_comments} </span>
                <span>{item.points}</span>
              </li>
            );
          })}
        </ul></>
      )}
      <br />
      <button onClick={() => setShowList(!showList)}>
        {showList ? "Hide list" : "Show list"}{" "}
      </button>
    </>
  );
}

export default App;
