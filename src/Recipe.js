import React from 'react';
import style from './Recipe.module.css';


const Recipe = ({title,calories,source,image}) => {

	return(

			<div className= {style.recipe}>
					<h1>{title}</h1>
					<p>{calories}</p>
					<p>{source}</p>
					<img src={image} alt="" />
			</div>

	);
}

export default Recipe;