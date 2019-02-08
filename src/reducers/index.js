import { selectSong } from "../actions";
import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "All is well", duration: "4:5" },
    { title: "All is not well", duration: "3:5" },
    { title: "All is round ", duration: "1:5" },
    { title: "All is square", duration: "3:1" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectSong: selectedSongReducer
});
