import React from "react";

const Items = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="font-semibold text-md">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-sm leading-6 text-gray-600 duration-300 cursor-pointer hover:text-Purple"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default Items;
