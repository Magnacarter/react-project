import React from 'react';

// This is a statless functional component
// We don't have to write the entire thing out like this
// class Header extends React.Component {
// 	render() {
// 		return (
// 			<Fragment>
// 				<header className="top">
// 					<h1>
// 						Catch
// 						<span className="ofThe">
// 							<span className="of">of</span>
// 							<span className="the">the</span>
// 						</span>
// 						Day
// 					</h1>
// 					<h3 className="tagline">
// 						<span>{this.props.tagline}</span>
// 					</h3>
// 				</header>
// 			</Fragment>
// 		)
// 	}
// }

// We can write a stateless components like this
// Notice there's no 'this' in a function so we give the
// function an arg of props
// We can also remove the curly bracket and return statement
// to make the return implicit
const Header = (props) => (
	<header className="top">
		<h1>
			Catch
			<span className="ofThe">
				<span className="of">of</span>
				<span className="the">the</span>
			</span>
			Day
		</h1>
		<h3 className="tagline">
			<span>{props.tagline}</span>
		</h3>
	</header>
);

export default Header;
