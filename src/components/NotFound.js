import React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTE_HOME } from '../utils/consts';

function NotFound() {
	const history = useHistory()
	
	return (
		<div className="container">
			<section className="not-found">
				<div>
					<h1 className="not-found__title">404</h1>
					<h2 className="not-found__sub-title">Страница не найдена!</h2>
				</div>
				<button role="link" className="btn_minor"
					onClick={() => history.push(ROUTE_HOME)}> Домой
				</button>
			</section>
		</div>
	)
}

export default NotFound;