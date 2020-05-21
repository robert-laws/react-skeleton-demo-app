import React from 'react'
import { Link } from 'react-router-dom';

const Buttons = () => {
  return (
    <>
      <div>
        {/* regular buttons */}
        <button>Regular Button</button>
        <input type="submit" value="Submit" />
        <input type="button" value="Another Submit"/>
        <a href="#" className="button">Link as Button</a>
      </div>

      <div>
        {/* primary buttons */}
        <Link to='/'>
          <button className="button-primary">Regular Button</button>
        </Link>
        <input class="button-primary" type="submit" value="Submit" />
        <input class="button-primary" type="button" value="Another Submit"/>
        <a href="#" className="button button-primary">Link as Button</a>
      </div>

      <div>
        {/* full width - not just for buttons */}
        <button className="u-full-width">Full Width Button</button>
        <button className="u-full-width button-primary">Full Width Button</button>
      </div>
    </>
  )
}

export default Buttons
