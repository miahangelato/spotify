import React from 'react';

function Menu({ title, menuObject }) {
  // The function returns JSX, which is a way to write HTML in JavaScript.
  return (
    <div className='MenuContainer'>
      <p className='title'>{title}</p>

      <ul>
        {/* Loop through menuObject and create a list item for each entry. */}
        {menuObject &&
          Object.values(menuObject).map((menu) => (
            <li key={menu.name}>
              <a href="/">
                <i>{menu.icon}</i>
                <span>{menu.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

// Export the Menu component for use in other parts of the program.
export { Menu };
