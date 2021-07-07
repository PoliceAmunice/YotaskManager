import React from 'react'
import { useHistory } from 'react-router-dom'
import { ROUTE_TASK_VIEW } from '../utils/consts'


const TaskItem = ({task}) => {
	let history = useHistory()
	return (
		<article className="task-item" role="link"
			onClick={() => history.push(ROUTE_TASK_VIEW + '/' + task.id)}>
			<header>
				<h3 className="task-item__title">{task.name}</h3>
			</header>
			<main>
				<p>Создано: {task.date}</p>
				<p>Приоритет: {task.priority}</p>
				<p>Отметки: {task.marks.join(', ')}</p>
			</main>
		</article>
	)
}

export default TaskItem


// function TaskItem({task}) {
// 	let history = useHistory()
// 	return (
// 		<article className="task-item" role="button"
// 			onClick={() => history.push(ROUTE_TASK_VIEW + '/' + task.id)}>
// 			{/* <header>
// 				<h3 className="task-item__title">{task.name}</h3>
// 			</header>
// 			<main>
// 				<p>Создано: {task.date}</p>
// 				<p>Приоритет: {task.priority}</p>
// 				<p>Отметки: {task.marks.split(', ')}</p>
// 			</main> */}
// 		</article>
// 	)
// }

// export default TaskItem
