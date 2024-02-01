import React from "react";

export default function User({ user,userBtn }) {
	return (
		<div>
			<div onClick={userBtn} className={user.color}>{user.name}</div>
		</div>
	);
}
