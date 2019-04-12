import React from 'react';
import {getFunName} from '../helpers';

// We can only have one jsx parent element per render method.
// You can nest as many child elements in the parent
// that you want but in order to use sibling elememts
// we need to wrap our jsx in <fragment> tags
// React will eventully use empty tags <></> for this

class StorePicker extends React.Component {
	// This is a prop
	myInput = React.createRef();

	// In order to access our component with 'this' in our handler we need to make it a prop of the component
	// So, we use the arrow function syntax, otherwise 'this' won't be bound to our component and will 
	// render as undefined
	goToStore = e => {
		// 1. stop default behavior
		e.preventDefault();
		// 2. get the text from the input field
		const storeName = this.myInput.current.value;
		// 3. change page with Router
			// Because Router component is the parent of StorePicker we have access to it's methods
			// You can view those in router's props
			// This is fast cause we're not actually reloading the page
			// We're going from route to route
		this.props.history.push(`/store/${storeName}`);
	};

	render() {
		return (
			//when we use curly brackets inside jsx, it tells the component we're back in javascript 
			//we can write js in here as well as comments
			//also we need to remember that comments need to be inside the parent element or the fragment element
			//We put are event handler on the form
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please select a store</h2>
				{/*We function call with () when we want to call the function on page mount
					For onClick or other event handlers, omit the () so it doesn't call on page load
				*/}
				<input
				type ="text"
				ref={this.myInput}
				required
				placeholder ="Store Name"
				defaultValue ={getFunName()}
				/>
				<button type="submit">Visit Store</button>
			</form>
		);
	};
}

export default StorePicker;
