import React, { Component } from 'react'

class Counter extends Component {
	state = {
		number: -2,
	}
	// constructor(props) {
	// 	super(props)
	// 	// state initialize
	// 	this.state = {
	// 		number: 0,
	// 	}
	// }

	render() {
		const { number } = this.state
		const { add } = this.props
		const onClick = () => {
			this.setState(
				({ number }) => ({
					number: number + add,
				}),
				() => {
					console.log(this.state)
				}
			)
		}

		return (
			<div>
				<h1>{number}</h1>
				<button onClick={onClick}>+1</button>
			</div>
		)
	}
}

export default Counter
