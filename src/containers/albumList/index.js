import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAlbums } from 'redux/actions/albumsList'
import AlbumList from 'components/albumList'

class AlbumsListContainer extends Component {

  render() {
    return (
      <AlbumList
        albums={this.props.albums}
        //Pass get albums as props
        getAlbums={() => this.props.dispatch(getAlbums())}
      />
    )
  }
}

export default connect((state) => state.albumsList)(AlbumsListContainer)
 
