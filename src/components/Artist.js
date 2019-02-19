import React from 'react';



const Artist = ({artist}) =>{
// safe guard to tell react when to render
if(!artist) return null
// you can use props.artist
const {images,name,popularity,genres,followers} = artist;

return(
    <div>
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>{genres.join(',')}</p>
      <img 
      style ={{
          width:200,
          height:200,
          borderRadius:100,
          objectFit:'cover'
      }}
      src={images[0] && images[0].url} alt="this is the artist profile"/>
    </div>
 )
}


export default Artist;