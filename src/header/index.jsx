import React from 'react';
import Nav from './nav';
import button from './button'

// import Header from './';
class Header extends React.Component {
	render () {
		return (
		<header>
			<div>I am the header</div>
			<div>
				Here is the nav:
				<Nav>
					<ul>
						<li>Here</li>
						<li>Are</li>
						<li>My</li>
						<li>Nav</li>
						<li>Save</li>
					</ul>
				</Nav>
				<ul>
					<li>Here</li>
					<li>Are</li>
					<li>My</li>
					<li>Nav</li>
					<li>Items</li>
				</ul>
				<button>
				</button>
			</div>
		</header>
		);
	}
}
export default Header;


/*
var html = '<header>' +
	'I am the header' +
	'Here is the nav:' +
	nav +
	'</header>';


module.exports = html;
*/
