import React from 'react';
import {NavLink} from "react-router-dom";

import bg from '../../assets/img/1.jpg';
import styles from './styles.module.scss';

const StartedPage = () => {
	return (
		<div className={styles.container}>
			<img src={bg} alt="bg"/>
			<div className={styles.info}>
				<h1>Retoucher Vlada</h1>
				<h2>HI-END, BEAUTY, EDITORIAL</h2>
				<div className={styles.link_div}>
					<NavLink className={styles.a} to="/home">
						Portfolio
					</NavLink>
					<a className={styles.a} href="https://www.instagram.com/retoucher_vlada/" target="_blank">
						Instagram
					</a>
				</div>
			</div>
		</div>
	);
}

export default StartedPage;
