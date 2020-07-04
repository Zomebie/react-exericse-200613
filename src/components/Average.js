import React, { useState, useMemo, useCallback, useRef } from 'react'

const getAverage = (numbers) => {
	console.log('평균값 계산 중 ...')
	if (numbers.length === 0) return 0

	const sum = numbers.reduce((a, b) => a + b)

	return sum / numbers.length
}

const Average = () => {
	const [list, setList] = useState([])
	const [number, setNumber] = useState('')
	const inputEl = useRef(null)

	const onChange = useCallback((e) => {
		setNumber(e.target.value)
	}, []) // 컴포넌트가 처음 렌더링될때만 함수 생성

	const onInsert = useCallback(() => {
		const nextList = list.concat(parseInt(number))
		setList(nextList)
		setNumber('')
		inputEl.current.focus()
	}, [number, list]) // number 혹은 list가 바뀌었을 때만 함수 생성
	// number 과 list는 변경 되는 state이기 때문에 컴포넌트가 처음 렌더링될때만 생성되면 안된다.
	// onInsert가 그때 그때 생성이 되어야 바뀐 state값을 참조할 수 있다.

	const avg = useMemo(() => getAverage(list), [list])

	return (
		<div>
			<input value={number} onChange={onChange} ref={inputEl} />
			<button onClick={onInsert}>등록</button>
			<ul>
				{list.map((value, index) => (
					<li key={index}> {value}</li>
				))}
			</ul>
			<div>
				<b>평균값 :</b> {avg}
			</div>
		</div>
	)
}

export default Average
