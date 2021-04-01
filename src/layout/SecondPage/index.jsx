import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";

import styles from './styles.module.scss';
import img from '../../assets/img/img.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'

const SecondPage = () => {
	const mockArr = [
		{
			img: img,
			id: 1,
			category: 'Beauty',
			catalog: [
				{img: img3, id: 1},
				{img: img, id: 2},
				{img: img3, id: 3},
				{img: img},
				{img: img},
				{img: img3},
				{img: img3},
			]
		},
		{img: img, id: 2, category: 'Beauty'},
		{img: img, id: 3, category: 'Beauty'},
		{img: img2, id: 4, category: 'Men'},
		{img: img2, id: 5, category: 'Men'},
		{img: img2, id: 6, category: 'Men'},
	];
	const history = useHistory();

	useEffect(() => {
		localStorage.setItem('images', JSON.stringify(mockArr));
	}, [])

	const handleClick = (e) => {
		history.push(`/images/${e.target.id}`)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.sidebar}>
				<div className={styles.info}>
					Rakitina Vlada
				</div>
			</div>
			<div className={styles.content}>
				<h2 className={styles.category_name}>Beauty</h2>
				<div className={styles.img}>
					{mockArr.filter((el => el.category === 'Beauty')).map((item) => (
						<img src={item.img} id={item.id} alt={item.id} onClick={e => handleClick(e)}/>
					))}
				</div>
				<h2 className={styles.category_name}>Men</h2>
				<div className={styles.img}>
					{mockArr.filter((el => el.category === 'Men')).map((item) => (
						<img src={item.img} id={item.id} alt={item.id} onClick={e => handleClick(e)}/>
					))}
				</div>
			</div>
		</div>
	);
}

export default SecondPage;
