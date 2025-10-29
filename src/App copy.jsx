function App() {
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
  ];
  return (
    <>
      <h1>this is app.jsx</h1>
      <label htmlFor="search">search</label>
      <input type="text" id="search" name="search" />
      <ul>
        {list.map(function (item) {
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
      </ul>
    </>
  );
}

export default App;
