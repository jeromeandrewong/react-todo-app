import Hero from "./components/Hero";
import Logo from "./components/Logo";
import { useState, useEffect } from "react";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";

const getLocalStorage = () => {
  let items = localStorage.getItem("items");
  if (items) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
};

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(getLocalStorage());

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItems = {
      id: uuidv4(),
      title: text,
    };
    setItems([newItems, ...items]);
    setText("");
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  useEffect(() => {
    // everytime items change, local storage is updated
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // useEffect(() => {
  //   console.log(items);
  // }, [items]);
  return (
    <>
      <main>
        <Logo />
        <Hero />
        <form
          className="flex items-center justify-center mt-10"
          onSubmit={handleSubmit}
        >
          <input
            className="py-2 px-5 rounded-md bg-gray-700 text-white tracking-wider"
            type="text"
            name="text"
            placeholder="Enter your todo item"
            autoComplete="off"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </form>
        <List items={items} setItems={setItems} handleDelete={handleDelete} />
      </main>
    </>
  );
}

export default App;
