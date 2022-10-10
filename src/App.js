import Hero from "./components/Hero";
import Logo from "./components/Logo";
import { useState, useEffect } from "react";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItems = {
      id: uuidv4(),
      title: text,
    };
    setItems([newItems, ...items]);
    setText("");
  };

  useEffect(() => {
    console.log(items);
  }, [items]);
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
        <List items={items} setItems={setItems} />
      </main>
    </>
  );
}

export default App;
