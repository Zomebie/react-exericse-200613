import React from 'react'
import useCustomHook from '../customHook'

// const reducer = (state, action) => {
// 	return {
// 		...state,
// 		[action.name]: action.value,
// 	}
// }

const InfoUseReducer = () => {
	// const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' })
	const [state, onChange] = useCustomHook({ name: '', nickname: '' })

	const { name, nickname } = state

	// const onChange = (e) => {
	// 	console.log(e.target.name, e.target.value)

	// 	dispatch(e.target)
	// }

	return (
		<div>
			<div>
				<input name="name" value={name} onChange={onChange} />
				<input name="nickname" value={nickname} onChange={onChange} />
			</div>

			<div>
				<div>
					<b>이름 : </b> {name}
				</div>
				<div>
					<b>닉네임 :</b> {nickname}
				</div>
			</div>
		</div>
	)
}

export default InfoUseReducer
