import { observer } from 'mobx-react-lite'
import React, { useContext, Suspense, lazy } from 'react'
import { Context } from '..'
import { useInfiniteScroll } from './Scroll'
const TaskItem = lazy(() => import('./TaskItem'))


const TaskList = observer(() => {
	const [isFetching, setIsFetching] = useInfiniteScroll(fetchTasks)
	const {taskStore} = useContext(Context)
	const tasks = taskStore.tasks

	function fetchTasks() {
		setTimeout(() => {
			taskStore.pushSomeTasks(15)
			setIsFetching(false)
		}, 2000)
	}

	return (
		<Suspense fallback={<div className="preloader"></div>}>
			<section className="task-list">
				{tasks.map(task =>
					<TaskItem key={task.id} task={task}/>
				)}
				{isFetching && <div className="preloader"></div>}
			</section>
		</Suspense>
	)
})

export default TaskList