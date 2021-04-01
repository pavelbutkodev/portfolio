import React from 'react';
import {Link} from "react-router-dom";

import bg from '../../assets/img/1.jpg';
import styles from './styles.module.scss';

const StartedPage = () => {
	return (
		<div className={styles.container}>
			<img src={bg} alt="bg"/>
			<div className={styles.info}>
				<h1>Retoucher Vlada</h1>
				<h2>HI-END, BEAUTY, EDITORIAL</h2>
				<div>
					<Link to="/home">
						Portfolio
					</Link>
					<Link to="https://www.instagram.com/retoucher_vlada/" target="_blank">
						Instagram
					</Link>
				</div>
			</div>
		</div>
	);
}

export default StartedPage;
