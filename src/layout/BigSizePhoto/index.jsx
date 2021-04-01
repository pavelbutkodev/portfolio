import React, {useState} from 'react';

import styles from './styles.module.scss';

const BigSizePhoto = () => {
	const [infoImg, setInfoImg] = useState(JSON.parse(localStorage.getItem('infoImg')));
	const [images, setImages] = useState(JSON.parse(localStorage.getItem('images'))
		.filter((el) => el.id === Number(infoImg[0].father))[0].catalog.filter((el) => el.id === Number(infoImg[0].children))
	);

	console.log('======>images', images);
	console.log('======>infoImg', infoImg);

	return (
		<div className={styles.big_img}>
			<img src={images[0].img} alt=""/>
		</div>
	);
}

export default BigSizePhoto;
