import React from "react";
import SongList from "./SongList";

class reduxapp extends React.Component {
  render() {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
        </div>
      </div>
    );
  }
}

const App = () => {
  return <div className="title">App is runnign </div>;
};

export default reduxapp;
