import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
	render() {
		return (
			<div className="inventory">
				<h2>Inventory!</h2>
				{/*
					Need to pass our addFish function down 1 more level
					via props. If you look in the react console
					you can see the function is available in 
					the inventory componant as a prop
					Remember, because we are getting this from Inventory's props
					it this.props.addfish
				*/}
				<AddFishForm addFish={this.props.addFish}/>
				<button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
			</div>
		);
	}
}

export default Inventory;
