import React, { useState } from 'react'
import './ValidationSample.css'

const ValidationSample = () => {
	const [inputState, setInputState] = useState({
		password: '',
		clicked: false,
		validated: false,
	})

	let inputRef

	const { password, clicked, validated } = inputState

	const handleOnChange = ({ target: { value } }) =>
		setInputState({
			...inputState,
			password: value,
		})

	const handleOnClick = () => {
		setInputState({
			...inputState,
			clicked: true,
			validated: password === '0000',
		})
		inputRef.focus()
	}

	return (
		<div>
			<input
				ref={(ref) => (inputRef = ref)}
				type="password"
				value={password}
				onChange={handleOnChange}
				className={clicked ? (validated ? 'success' : 'falied') : ''}
			/>
			<button onClick={handleOnClick}>검증하기</button>
		</div>
	)
}

export default ValidationSample
