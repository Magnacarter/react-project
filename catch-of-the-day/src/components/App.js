import React        from 'react';
import Header       from './Header';
import Inventory    from './Inventory';
import Order        from './Order';
import sampleFishes from '../sample-fishes.js';
import Fish         from './Fish';

// ***KEY CONCEPT***
// State is an object stored inside a component that contains data it needs and
// it's children may need
// It's a single source of truth
// With the react the golden rule is don't touch the DOM e.g. no $('#my-element').attr();
// or document.getElemetById()

// This is the parent component
// We'll be mounting all components from here.
class App extends React.Component {
	// 1. initialize state as an object
	// 2. this app will have 2 different states
	state = {
		fishes : {},
		order  : {}
	};

	// We can get the function to lower levels in the app via props
	addFish = fish => {
		console.log('adding a fish');
		// how do we update state? we need to use their existing
		// update state api
		// 1. Take a copy of the existing state
			// How do we take a copy of an object in JavaScript? ...
			// This is called an object spread
		const fishes = {...this.fishes};
		// 2. Add our new fish to that fishes var
			// give each new fish a unique key
			// fishesDatenow is equal to the object that got passed into the addFish function
		fishes[`fish${Date.now()}`] = fish;
		// 3. Set the new fishes object to state
			// use a built in method called setState
			// pass it the piece of state to be updated
		this.setState({
			// in es6, if your property and value have the same name you can omit value
			// fishes: fishes
			fishes
		});
	}

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};

	addToOrder = (key) => {
		// 1. Take a copy of state
		const order = {...this.state.order};

		// 2. Add to order or update number in our order
			// If fish exists in the order, increment by 1, if not update order to include fish
		order[key] = order[key] + 1 || 1;

		// 3. Set the new order object to state
		this.setState({ order });
	};

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Imported Daily" age={40} cool={true} />
					<ul className="fishes">
						{/*
							Each of these needs unique identifiers for React to be able to target, else we get errors
							We can use a property called key, which is built into react
							Give it a key of anything that is unique
						*/}
						{Object.keys(this.state.fishes).map(key => (
							<Fish
								key={key}
								index={key}
								details={this.state.fishes[key]}
								addToOrder={this.addToOrder}
							/>
						))}
					</ul>
				</div>
				<Order
					order={this.state.order}
					fishes={this.state.fishes}
				/>
				{/*
					pass the addFish function down to Inventory
					via a prop
				*/}
				<Inventory 
					addFish={this.addFish}
					loadSampleFishes={this.loadSampleFishes}
				/>
			</div>
		)
	}
}

export default App;
