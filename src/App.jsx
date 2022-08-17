import { Component } from "react";
import './App.css';
import { Button } from "./components/Button/Button";
import data from "./data.json";
import { getReducedData } from "tools/getReducedData";
import { GalleryList } from "components/Gallery/GalleryList";

export class App extends Component {
  state = { isShown: false, movies: getReducedData(data)};

    handler = () => {
      this.setState({ isShown: true });
    };

    deleteFilm = (idToDelete) => {
      this.setState(prevState => ({
        movies: prevState.movies.filter(({id}) => id !== idToDelete),
      }));
      };

    toggleStatus = (idToUpdate) => {
      this.setState(prevState => ({
        movies: prevState.movies.map(item=> {
          if(item.id !== idToUpdate) {
            return item;
            }
            return {...item, watched: !item.watched};
        }),
      }));
    };

  render() {
    const {isShown, movies} = this.state;
    return (
    <div>
      { isShown ? 
      (<GalleryList 
        movies = {movies} 
        idToDelete = {this.deleteFilm}
        toggleStatus = {this.toggleStatus}
        />
      ) : ( 
        <Button 
          handler = { this.handler } 
          type="button" 
          textContent="Show films list" 
        />
    )}
    </div>
   );     
  }
}
