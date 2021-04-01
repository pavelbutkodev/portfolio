import React, {useState} from 'react';
import {useHistory, useParams} from "react-router-dom";

import styles from './styles.module.scss';
import {Box, ImageList, ImageListItem} from "@material-ui/core";

const ImagePage = () => {
	const {id} = useParams()
	const [images, setImages] = useState(JSON.parse(localStorage.getItem('images')).filter((el) => el.id === Number(id)));
	const history = useHistory();
	const handleClickPhoto = (e) => {
		localStorage.setItem('infoImg', JSON.stringify([{father: id, children: e.target.id}]));
		history.push(`/photo/${e.target.id}`)
	}

	return (
		<Box sx={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
			<ImageList variant="masonry" cols={3} gap={8}>
				{images[0].catalog.map((item) => (
					<ImageListItem key={item.img}>
						<img
							srcSet={`${item.img}?w=161&fit=crop&auto=format 1x,
                ${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
							alt='img'
							id={item.id}
							loading="lazy"
							onClick={handleClickPhoto}
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
}

export default ImagePage;
