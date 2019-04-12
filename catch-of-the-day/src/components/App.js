import React     from 'react';
import Header    from './Header';
import Inventory from './Inventory';
import Order     from './Order';

// ***KEY CONCEPT***
// State is an object stored inside a component that contains data it needs and
// it's children may need
// It's a single source of truth

// This is the parent component
// We'll be mounting all components from here.
class App extends React.Component {
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Imported Daily" age={40} cool={true}  />
				</div>
				<Inventory />
				<Order />
			</div>
		)
	}
}

export default App;
