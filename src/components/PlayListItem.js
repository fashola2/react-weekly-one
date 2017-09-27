import React, {Component} from 'react'

class PlayListItem extends Component {
  constructor(props) {
  super(props)
  }
  render(){
  const item = this.props.songs.map(song => {
    return (
      <div className="sectionDiv" key={song._id}>
        <ul className="list">
          <li className="listItem">User: {song.userName}</li>
            <li className="listItem">Artist: {song.songArtist}</li>
              <li className="listItem">Title: {song.songTitle}</li>
                <li className="listItem">Notes: {song.songNotes}</li>
        </ul>
      </div>
    )
  })
  return (
    <div>
      {item}
    </div>
  )
}
}

export default PlayListItem
