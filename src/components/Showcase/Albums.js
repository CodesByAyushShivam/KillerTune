import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'

function Albums(props) { //albums ,setAlbumId
    const navigate = useNavigate(); //for navigating to /albums


    return (
        <div className="flex overflow-x-auto flex-nowrap gap-4 m-2 pb-2 hide-scrollbar">
            {props.albums.map((album) => {
                return (
                    <Card
                        onClick={() => { props.setAlbumId(album.id); navigate("/albums") }}
                        key={album.id}
                        image={album.image}
                        name={album.name.replace(/&quot;/g, '"')}
                    />
                )
            })}
        </div>
    )
}
export default Albums
