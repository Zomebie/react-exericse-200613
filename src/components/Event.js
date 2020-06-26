import React, { Component } from 'react'

class Event extends Component {
	state = {
		message: '',
	}

	name = 'jello'

	// constructor(props) {
	// 	super(props)
	// 	this.handleOnChange = this.handleOnChange.bind(this)
	// }

	// 일반 함수는 자신이 종속된 객체를 this로 가리키며, 화살표 함수는 자신이 종속된 인스턴스를 가리킴
	// 그렇기 때문에 화살표 함수는 this binding이 필요없다.
	// 일반 함수로 선언하면 생성자에 this binding 필요하다.

	// 1. 일반 함수
	// handleOnChange(e) {
	// 	// this.setState({
	// 	// 	message,
	// 	// })
	//  console.log(this.name) // this.binding 안하면 에러 날 것.
	// }

	// 2 . 화살표 함수
	handleOnChange = ({ target: { value: message } }) => {
		this.setState({
			message,
		})
		console.log(this.name)
	}

	render() {
		return (
			<div>
				<input
					type="text"
					name="message"
					placeholder="아무거나 입력해 보세요."
					value={this.state.message}
					onChange={this.handleOnChange}
				/>
			</div>
		)
	}
}

export default Event
