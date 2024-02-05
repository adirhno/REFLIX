import React from "react";

export default function User({ user, handleUser }) {
	return (
		<div>
			<div onClick={()=>(handleUser(user.name))} className={user.color}>{user.name}</div>
		</div>
	);
}
