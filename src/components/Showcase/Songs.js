import React from 'react'
import Card from './Card'


function Songs(props) {
 
    return (
        <div className="flex overflow-x-auto flex-nowrap gap-4 m-2 pb-2 hide-scrollbar">
            {props.songs.map((song) => {
                return (
                    <Card
                        onClick={() => props.searchFromId(song.id)}
                        key={song.id}
                        image={song.image}
                        name={song.name.replace(/&quot;/g, '"')}
                    />
                )
            })}
        </div>
    )
}

export default Songs
