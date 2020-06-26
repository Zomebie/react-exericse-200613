import React, { useState } from 'react'
import '../style/Validation.scss'

const Validation = () => {
	const [inputState, setInputState] = useState({
		password: '',
		buttonClicked: false,
		passed: false,
	})

	const { password, buttonClicked, passed } = inputState
	let inputRef

	const handleInputOnChange = ({ target: { value } }) =>
		setInputState({
			...inputState,
			password: value,
		})

	const validatePassword = () => {
		setInputState({
			...inputState,
			buttonClicked: true,
			passed: password === '0000',
		})

		inputRef.focus()
	}

	return (
		<div>
			<input
				ref={(ref) => (inputRef = ref)}
				type="password"
				value={password}
				onChange={handleInputOnChange}
				className={buttonClicked ? (passed ? 'success' : 'falied') : ''}
			/>
			<button onClick={validatePassword}>검증하기</button>
		</div>
	)
}

export default Validation
