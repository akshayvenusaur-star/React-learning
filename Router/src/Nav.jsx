import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
    return (
        <div>


            <section>

                <ul>
                    <Link to={"/"}> <li>Home</li></Link>
                    <Link to={"product"}><li>Product</li></Link>
                    <Link to={"login"}>  <li>Login</li></Link>
                    <Link to={"signup"}> <li>Signup</li></Link>
                </ul>
            </section>
            <Outlet></Outlet>

        </div>
    )
}

export default Nav
