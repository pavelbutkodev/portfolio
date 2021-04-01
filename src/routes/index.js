import StartedPage from "../layout/StartedPage/";
import SecondPage from "../layout/SecondPage";
import ImagePage from "../layout/ImagePage";

export const routes = [
	{
		path: '/',
		component: StartedPage,
		exact: true,
	},
	{
		path: '/home',
		component: SecondPage,
		exact: true,
	},
	{
		path: '/image/:id',
		component: ImagePage,
		exact: true,
	},
]