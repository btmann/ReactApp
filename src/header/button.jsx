import React from 'react';

export class button extends React.Component {
	render() {
		return (
			<div><button type='button'onclick="alert('Hello world!')">Click Me!</button></div>

		);
	}
/*	var x = new XMLHttpRequest();
		x.open("GET", "https://multichannel-custom-qa.homedepot.com/COMOrder/rs/getOrderDetail", true);
		x.onreadystatechange = function () {
		  if (x.readyState == 4 && x.status == 200)
		  {
		    var doc = x.responseXML;
		    // …
		  }
		};
		x.send(null);*/
}
