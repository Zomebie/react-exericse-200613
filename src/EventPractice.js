import React, { Component } from 'react'

class EventPractice extends Component {
	state = {
		message: '',
	}

	// constructor(props) {
	// 	super(props)
	// 	// this.handleOnChangeInContructor = this.handleOnChange.bind(this)
	// 	this.handleOnChange = this.handleOnChange.bind(this)
	// 	// this.handleOnClick = this.handleOnClick.bind(this)
	// }

	name = ' jello'
	// 일반 함수는 자신이 종속된 객체를 this로 가리키며, 화살표 함수는 자신이 종속된 인스턴스를 가리킴
	// 그렇기 때문에 this binding이 필요없다.
	// 일반 함수로 선언하면 생성자에 this binding 필요.
	// 1. 일반 함수
	// handleOnChange(e) {
	// 	// this.setState({
	// 	// 	message,
	// 	// })
	// 	console.log(this.name)
	// }

	// 2 . 화살표 함수
	handleOnChange = ({ target: { value: message } }) => {
		// this.setState({
		// 	message,
		// })
		console.log(this.name)
	}

	// handleOnClick = () => {
	// 	alert(this.state.message)
	// 	this.setState({
	// 		message: '',
	// 	})
	// }

	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				<input
					type="text"
					name="message"
					placeholder="아무거나 입력해 보세요"
					value={this.state.message}
					onChange={this.handleOnChange}
				/>
				{/* <button onClick={this.handleOnClick}>확인</button> */}
			</div>
		)
	}
}

export default EventPractice
