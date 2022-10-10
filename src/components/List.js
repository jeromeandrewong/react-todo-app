import React from "react";
import { IoClose } from "react-icons/io5";
const List = ({ items, setItems }) => {
  return (
    <div>
      <article>
        <ul className="bg-gray-700 mx-5 rounded-lg overflow-hidden mt-10">
          {items.map(({ id, title }) => (
            <div className="flex items-center justify-between border-b border-gray-600 px-5">
              <li className="text-white tracking-wider py-3  " key={id}>
                {title}
              </li>
              <button className="text-xl">
                <IoClose className="text-red-400" />
              </button>
            </div>
          ))}
          <ul className="flex justify-between items-center px-5 py-3">
            <li>
              <p className="text-sm text-gray-400">{items.length} items left</p>
            </li>
            <li>
              <button
                className="text-sm text-gray-400"
                onClick={() => setItems([])}
              >
                Clear List
              </button>
            </li>
          </ul>
        </ul>
      </article>
    </div>
  );
};

export default List;
