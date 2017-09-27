import React, {Component} from 'react';
import NavBar from "./NavBar"
import PlayListItem from "./PlayListItem"
import Playlist from "./Playlist"
import PlayListForm from "./PlayListForm"
import '../styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavBar/>
        </div>
        <div className="mainContent">
          <div className="PlayListForm">
            <PlayListForm/>
          </div>
          <div className="playList">
            <Playlist/>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
