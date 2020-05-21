import React from 'react'

const Lists = () => {
  return (
    <>
      <div>
        {/* default list */}
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        {/* nested list */}
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services
            <ul>
              <li>Web Design</li>
              <li>Programming</li>
              <li>Databases</li>
            </ul>
          </li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default Lists
