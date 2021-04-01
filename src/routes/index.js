import StartedPage from "../layout/StartedPage/";
import SecondPage from "../layout/SecondPage";
import ImagePage from "../layout/ImagePage";
import BigSizePhoto from "../layout/BigSizePhoto";

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
		path: '/images/:id',
		component: ImagePage,
		exact: true,
	},
	{
		path: '/photo/:id',
		component: BigSizePhoto,
		exact: true,
	},
]