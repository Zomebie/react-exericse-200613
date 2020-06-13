import React from 'react'
import PropTypes from 'prop-types'

const MyComponent = ({ name, age, children }) => {
	return (
		<>
			<div>
				안녕하세요. 제 이름은 {name}입니다. 나이는 {age}예요
			</div>
			{children}
		</>
	)
}

MyComponent.defaultProps = {
	name: 'summer',
	age: 23,
}

MyComponent.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number.isRequired,
}
export default MyComponent
