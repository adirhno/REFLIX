import React from "react";
import { Link} from "react-router-dom";
import Search from "./Search";
import Logo from "./Logo";
export default function NavBar({handleAddBtn, setTemplate, input, setInput, search, results, isResults, template, setIsResults, budget}) {
	return (
		<>
        <div className="navBar">
			<div className="links">
            <Link className="link" to={"/"}  onClick={()=>{ return setTemplate('landing'), setIsResults(false)}}>Home</Link>
			<Link className="link" to={"/catalog"}>Catalog</Link>
            </div>
             <Logo />
		</div>
       {template=== "catalog"? <Search handleAddBtn={handleAddBtn} search={search} isResults={isResults} results={results} setInput={setInput} input={input} budget={budget}  />:<></>}
           
        </>
	);
}
