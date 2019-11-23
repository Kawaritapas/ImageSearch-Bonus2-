import React from 'react';
import  './imaged.css';
import ImageCard from './ImageCard';


const imageList=(props)=>{
    
 const url = props.image.map((images)=>{
    return <ImageCard  key={images.id} images={images}/>;
 });
return (
<div className="image-list">
{url}
</div>);
}

export default imageList;



