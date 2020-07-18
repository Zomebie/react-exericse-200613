import React, { useCallback } from 'react'
import { List } from 'react-virtualized'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos, onRemove, onToggle }) => {
	const rowRenderer = useCallback(
		({ index, key, style }) => {
			const todo = todos[index]
			return (
				<TodoListItem
					todo={todo}
					key={key}
					style={style}
					onRemove={onRemove}
					onToggle={onToggle}
				/>
			)
		},
		[onRemove, onToggle, todos]
	)

	return (
		<List
			width={512}
			height={513}
			rowCount={todos.length}
			rowHeight={57}
			rowRenderer={rowRenderer}
			list={todos}
			style={{ outline: 'none' }}
		/>
		// <StyledDiv>
		// 	{todos.map((todo) => (
		// 		<TodoListItem
		// 			todo={todo}
		// 			key={todo.id}
		// 			onRemove={onRemove}
		// 			onToggle={onToggle}
		// 		/>
		// 	))}
		// </StyledDiv>
	)
}

export default React.memo(TodoList)
