import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { publicRoutes } from '../routes';
import NotFound from './NotFound';


function AppRouter() {
	return (
		<Switch>
			{publicRoutes.map(({path, Component}) => 
				<Route key={path} path={path} component={Component} exact/>
			)}
			<Route component={NotFound}/>
		</Switch>
	);
};

export default AppRouter;