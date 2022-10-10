import React from "react";
import { IoClose } from "react-icons/io5";
const List = ({ items, setItems, handleDelete }) => {
  const handleClearList = () => {
    let clear = window.confirm(`Are you sure you want to clear list`);
    if (clear) {
      setItems([]);
    }
  };
  return (
    <div>
      {items.length !== 0 ? (
        <article>
          <ul className="bg-gray-700 mx-10 rounded-lg overflow-hidden mt-10 md:max-w-xl md:mx-auto">
            {items.map(({ id, title }) => (
              <div
                key={id}
                className="flex items-center justify-between border-b border-gray-600 px-5"
              >
                <li className="text-white tracking-wider py-3  ">{title}</li>
                <button className="text-xl" onClick={(e) => handleDelete(id)}>
                  <IoClose className="text-red-400" />
                </button>
              </div>
            ))}
            <ul className="flex justify-between items-center px-5 py-3">
              <li>
                <p className="text-sm text-gray-400">
                  {items.length} items left
                </p>
              </li>
              <li>
                <button
                  className="text-sm text-gray-400"
                  //   onClick={() => setItems([])}
                  onClick={() => handleClearList()}
                >
                  Clear List
                </button>
              </li>
            </ul>
          </ul>
        </article>
      ) : (
        ""
      )}
    </div>
  );
};

export default List;
