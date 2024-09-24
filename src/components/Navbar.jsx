import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <div>
                <ul>
                    <li><a href="http://">Home</a></li>
                    <li><a href="http://">Product</a></li>
                    <li><a href="http://">Contact</a></li>
                    <li><a href="http://">About</a></li>
                </ul>
                <form>
                    <input type="text" placeholder="Search..."/>
                </form>
                <div>
                    <a href="http://">Login</a>
                    <a href="http://">Register</a>

            </div>
        </div>
    )
}
