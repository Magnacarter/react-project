import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
	renderOrder = key => {
		const fish  = this.props.fishes[key];
		const count = this.props.order[key];
		const isAvailable = fish.status === 'available';

		// Remember, changing the prop in Details won't work
		// Need to change state in the Fishes state to update the order li in real time
		if (!isAvailable) {
			return <li key={key}>Sorry, {fish ? fish.name : "that item"} is out of stock.</li>;
		}
		return (
			<li key={key}>
				{count} lbs {fish.name}
				{formatPrice( count * fish.price )}
			</li>
		);
	}

	render() {
		const orderIds = Object.keys(this.props.order);

		// Reduce method
		// first pram is function that takes an acumulator and the current item in the array
		// second param is the number where you want the accumulator to start counting at
		// Here reduce gets the key from the orderIds
		// We use the key on the fishes prop to get the specific fish object
		// Next we use the key on the order prop to get how many orders there are
		// We check to make sure the fish is available to order
		const total = orderIds.reduce(
			(prevTotal, key) => {
				const fish        = this.props.fishes[key];
				const count       = this.props.order[key];
				const isAvailable = fish && fish.status === 'available';

				// If its available we take the previous total (the accumulator)
				// and add it to the number of orders times the price of the fish
				if(isAvailable) {
					prevTotal = prevTotal + (count * fish.price);
					return prevTotal;
				}

				return prevTotal;
			}, 
		0);

		return (
			<div className="order-wrap">
				<h2>Order!</h2>
				<ul className="order">{orderIds.map(this.renderOrder)}</ul>

				<div className="total">
					Total :
					<strong>{formatPrice(total)}</strong>
				</div>
			</div>
		);
	}
}

export default Order;
