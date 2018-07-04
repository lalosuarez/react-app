import React from 'react';

const post = (props) => {
	const cardStyle = {
		margin: '10px'
	}

	return (
		<div className="card" style={cardStyle} onClick={props.onPostClick}>
			<img className="card-img-top" src=".../100px180/" alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text"></p>
				</div>
		</div>	
	);
}
	
export default post;