import React from 'react';

class Nav extends React.Component {
	constructor ( props ) {
		super( ...props );
		this.state = {
			width: document.body.scrollWidth
		};
		window.addEventListener( 'resize', () => {
			let width = document.body.scrollWidth;
			console.log( 'resized' );
			this.setState( { width } );
		});
	}
	render () {
		let { width } = this.state;
		return (
		<nav style={{ border: '1px solid black' }}>
			<p>(I would implement custom display for what a generic nav would do)</p>
			{ width > 1000 ? this.props.children : 'Too small' }
			<p>This would come after their custom content</p>
		</nav>
		);
	}
}
export default Nav;
