import React from "react";
import { Link} from "react-router-dom";
import Search from "./Search";
import Logo from "./Logo";
export default function NavBar() {
	return (
		<>
        <div className="navBar">
			<div className="links">
            <Link className="link" to={"/"}>Home</Link>
			<Link className="link" to={"/catalog"}>Catalog</Link>
            </div>
             <Logo />
		</div>
        <Search />
           
        </>
	);
}
