import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";

import styles from './styles.module.scss';
import img from '../../assets/img/img.jpg'

const SecondPage = () => {
	const mockArr = [
		{img, id: 1},
		{img, id: 2},
		{img, id: 3},
		{img, id: 4},
		{img, id: 5},
		{img, id: 6},
	];
	const history = useHistory();

	useEffect(()=>{
		localStorage.setItem('images', JSON.stringify(mockArr));
	}, [])

	const handleClick = (e) => {
		history.push(`/image/${e.target.id}`)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.sidebar}>
				Rakitina Vlada
			</div>
			<div className={styles.content}>
				{mockArr.map((item) => (
					<div>
						<img src={item.img} id={item.id} alt={item.id} onClick={e => handleClick(e)}/>
					</div>
				))}
			</div>
		</div>
	);
}

export default SecondPage;
