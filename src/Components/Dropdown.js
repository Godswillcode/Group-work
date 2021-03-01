import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen? "grid grid-rows-4 text-center items-center bg-yellow-500" : "hidden"} onClick={toggle}>
              <Link className="p-4 text-2xl" to="/">Home</Link>
              <Link className="p-4 text-2xl" to="/about">About</Link>
              <Link className="p-4 text-2xl" to="/service">Service</Link>
              <Link className="p-4 text-2xl" to="/contact">Contact</Link>
        </div>
    )
}

export default Dropdown
