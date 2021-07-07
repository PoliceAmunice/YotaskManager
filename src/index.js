import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TaskStore from './store/TaskStore';

export const Context = createContext(null)

ReactDOM.render(
	<Context.Provider value={{taskStore: new TaskStore()}}>
		<App/>
	</Context.Provider>,
	document.getElementById('root')
);