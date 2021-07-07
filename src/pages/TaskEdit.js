import React, { useContext, useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from "react-router-dom";
import { Context } from '..';
import { ROUTE_TASK_VIEW } from '../utils/consts';


function TaskEdit() {
	const {taskStore} = useContext(Context)
	const {id} = useParams()
	const history = useHistory()
	const {register, handleSubmit, formState: { errors }} = useForm()
	const task = taskStore.getTask(id) || {}

	// On edit/idqsdfg
	useLayoutEffect(() => {
		if (id && !taskStore.getTask(id))
			history.push('/404')
	}, [])	

	const onSubmit = data => {
		let urlId = id
		if (taskStore.getTask(id))
			taskStore.editTask(id, data)
		else
			urlId = taskStore.addTask(data)
		return history.push(ROUTE_TASK_VIEW + '/' + urlId)
	}

	return (
		<div className="container">
			<main>
				<nav className="nav-top">
					<button role="link" className="nav-top__item btn_minor"
						onClick={() => history.goBack()}> Назад
					</button>
				</nav>

				<article className="task-view">
					<form className="form" onSubmit={handleSubmit(onSubmit)}>
						
						<div className="form__group task-view__block">
							<h4 className="form__group-title_small">Название задачи</h4>
							<input type="text" tabIndex="0"
								className="form__input-text"
								defaultValue={task.name || ''}
								{...register("name", {required: true})}/>
							{errors.name && <span className="form__error">Заполните это поле</span>}
						</div>

						<div className="form__group task-view__block">
							<h4 className="form__group-title_small">Приоритет</h4>
							<select className="form__select"
								defaultValue={task.priority || "norm"} {...register("priority")}>
								<option value="high">high</option>
								<option value="norm">normal</option>
								<option value="low">low</option>
							</select>
						</div>

						<div className="form__group task-view__block">
							<h4 className="form__group-title_small">Отметки</h4>
							<select className="form__select" multiple
								defaultValue={task.marks} {...register("marks")}>
								<option value="research">research</option>
								<option value="design">design</option>
								<option value="dev">development</option>
							</select>
						</div>

						<div className="form__group task-view__block">
							<h4 className="form__group-title_small">Описание</h4>
							<textarea className="form__textarea" placeholder="..."
								defaultValue={task.descr || ''} {...register("descr")}>
							</textarea>
						</div>

						<footer className="task-view__footer">
							<button className="btn_prime" type="submit">
								Сохранить
							</button>
						</footer>
					</form>
				</article>
			</main>
		</div>
	);
};

export default TaskEdit;