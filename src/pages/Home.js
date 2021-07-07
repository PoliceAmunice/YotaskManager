import React from 'react';
import 'Styles/style.scss';
import TaskList from '../components/TaskList';
import Filter from '../components/Filter';
import { useHistory } from 'react-router-dom';
import { ROUTE_TASK_EDIT } from '../utils/consts';


function Home() {
	const history = useHistory()
	return (
		<div className="container">

			<Filter/>

			<main className="main_side">

				<nav className="nav-top">
					<button role="link" className="nav-top__item btn_prime"
						onClick={() => history.push(ROUTE_TASK_EDIT)}> Добавить задачу
					</button>
				</nav>

				<TaskList/>

			</main>
		</div>
	);
};

export default Home;