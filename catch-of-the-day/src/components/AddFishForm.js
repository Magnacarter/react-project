import React from 'react';

class AddFishForm extends React.Component {
	nameRef    = React.createRef();
	priceRef   = React.createRef();
	statusRef  = React.createRef();
	descRef    = React.createRef();
	imageRef   = React.createRef();

	createFish = e => {
		e.preventDefault();
		// We need to place the fish object into state.
		// Where does state live?
		// Every componant in react can have it's own state
		// However, ususally there is a parent state on a parent componant
		// then you pass that state down to the children
		// Right now there's no way to share the form data to the other componants
		// unless the data live at a igher level
		// You can't pass data up
		// We need to go into our app componant and create state there
		const fish = {
			name   : this.nameRef.current.value,
			price  : parseFloat( this.priceRef.current.value ),
			status : this.statusRef.current.value,
			desc   : this.descRef.current.value,
			image  : this.imageRef.current.value,
		}
		// now we will pass the fish object to our function and
		// place it in the App componant's state object
		// Again, remember to access the function via our props
		this.props.addFish(fish);
		// Refresh the form
		// There is a reset method that lives on all forms
		e.currentTarget.reset();
	};
	render() {
		return (
			<form className="fish-edit" onSubmit={this.createFish}>
				<input name="name" ref={this.nameRef} type="text" placeholder="name"/>
				<input name="price" ref={this.priceRef} type="text" placeholder="price"/>
				<select name="status" ref={this.statusRef}>
					<option>Available</option>
					<option>Sold out</option>
				</select>
				<textarea name="desc" ref={this.descRef} placeholder="desc"></textarea>
				<input name="image" ref={this.imageRef} type="text" placeholder="image"/>
				<button type="submit">+ Add Fish</button>
			</form>
		);
	}
}

export default AddFishForm;
