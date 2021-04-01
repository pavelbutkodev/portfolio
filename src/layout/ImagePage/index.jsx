import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import styles from './styles.module.scss';

const ImagePage = () => {
	const {id} = useParams()
	const [images, setImages] = useState(JSON.parse(localStorage.getItem('images')).filter((el) => el.id === Number(id)));

	return (
		<div className={styles.wrapper}>
			<img src={images[0].img} alt='img'/>
		</div>
	);
}

export default ImagePage;
