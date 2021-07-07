import Home from "./pages/Home";
import TaskEdit from "./pages/TaskEdit";
import TaskView from "./pages/TaskView";
import { 
	ROUTE_TASK_EDIT,
	ROUTE_HOME,
	ROUTE_TASK_VIEW
} from "./utils/consts";



export const publicRoutes = [
	{
		path: ROUTE_HOME,
		Component: Home
	},
	{
		path: ROUTE_TASK_EDIT,
		Component: TaskEdit
	},
	{
		path: ROUTE_TASK_EDIT + '/:id',
		Component: TaskEdit
	},
	{
		path: ROUTE_TASK_VIEW + '/:id',
		Component: TaskView
	},
]