import React from 'react'
import _ from 'lodash'
import Albums from './albums'

export default (props) => {
	return (
		  <div>
		    <h1>Kates Albums</h1>
		    <ul>
		      {_.map(props.albums, (album => {
		      	return <Albums album={album} />
		      }))}
		    </ul>

		    <button onClick={() => props.getAlbums()}>Get Albums</button>
		  </div>
		)
} 
