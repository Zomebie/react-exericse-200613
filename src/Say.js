import React, { useState } from 'react'

const Say = () => {
	// useState를 호출하면 배열이 반환된다.
	// 첫번째 원소는 현재 상태 (state)
	// 두번째 원소는 상태를 바꿔주는 함수 (setter)
	// 배열 비구조화 할당으로 받고있음
	const [message, setMessage] = useState('ready')
	const onClickEnter = () => setMessage('hi')
	const onClickLeave = () => setMessage('bye')

	const [color, setColor] = useState('black')
	const onClickToSetGreen = () => setColor('green')
	const onClickToSetRed = () => setColor('red')

	let style = { color }
	return (
		<>
			<button onClick={onClickEnter}>enter</button>
			<button onClick={onClickLeave}>leave</button>
			<h1 style={style}>{message}</h1>
			<button onClick={onClickToSetGreen}>green</button>
			<button onClick={onClickToSetRed}>red</button>
		</>
	)
}

export default Say
