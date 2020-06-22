import React, { useState } from 'react'

const EventPracticeFunc = () => {
	const [form, setForm] = useState({
		username: '',
		message: '',
	})

	const { username, message } = form
	const handleOnChange = ({ target: { name, value } }) =>
		setForm({
			...form,
			[name]: value,
		})
	const handleOnClick = () => {
		alert(username + message)
		setForm({
			username: '',
			message: '',
		})
	}
	return (
		<div>
			<h1>이벤트 연습</h1>
			<input
				type="text"
				name="username"
				placeholder="사용자이름"
				value={username}
				onChange={handleOnChange}
			/>
			<input
				type="text"
				name="message"
				placeholder="아무거나 입력해 보세요"
				value={message}
				onChange={handleOnChange}
			/>
			<button onClick={handleOnClick}>확인</button>
		</div>
	)
}

export default EventPracticeFunc
