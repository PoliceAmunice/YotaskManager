import React, { useContext, useLayoutEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Context } from '..';
import { ROUTE_HOME, ROUTE_TASK_EDIT } from '../utils/consts';


function TaskView() {
	const { taskStore } = useContext(Context)
	const { id } = useParams()
	const history = useHistory()
	const task = taskStore.getTask(id) || {}

	// On view/idqsdfg
	useLayoutEffect(() => {
		if (id && task.id) return
			history.push('/404')
	}, [])

	function handleDelete() {
		const sure = confirm("Подтвердите удаление")
		if (!sure) return
		taskStore.deleteTask(id)
		history.push(ROUTE_HOME)
	}

	return (
		<div className="container">
			<main>
				<nav className="nav-top">
					<div className="nav-top__group">
						<button role="link" className="nav-top__item btn_minor"
							onClick={() => history.goBack()}> Назад
						</button>
						<button role="link" className="nav-top__item btn_prime"
							onClick={() => history.push(ROUTE_TASK_EDIT + '/' + id)}>
							Редактировать
						</button>
					</div>

					<div className="nav-top__group">
						<button className="nav-top__item btn_accent"
							onClick={handleDelete}> Удалить
						</button>
					</div>
				</nav>

				<article className="task-view">
					<div className="task-view__block">
						<h4 className="task-view__block-title">Название задачи</h4>
						<span className="task-view__block-body">{task.name || ''}</span>
					</div>
					<div className="task-view__block">
						<h4 className="task-view__block-title">Дата создания</h4>
						<span className="task-view__block-body">{task.date || ''}</span>
					</div>
					<div className="task-view__block">
						<h4 className="task-view__block-title">Приоритет</h4>
						<span className="task-view__block-body">{task.priority || ''}</span>
					</div>
					<div className="task-view__block">
						<h4 className="task-view__block-title">Отметки</h4>
						<span className="task-view__block-body">{task.marks && task.marks.join(', ') || ''}</span>
					</div>
					<div className="task-view__block">
						<h4 className="task-view__block-title">Описание</h4>
						<p className="task-view__block-body">{task.descr || ''}</p>
					</div>
				</article>
			</main>
		</div>
	);
}

export default TaskView;