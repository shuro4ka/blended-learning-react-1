import { Component } from "react";
import './App.css';
import { Button } from "./components/Button/Button";
import data from "./data.json";
import { getReducedData } from "tools/getReducedData";
import { GalleryList } from "components/Gallery/GalleryList";
import { Modal } from "./components/Modal/Modal"

export class App extends Component {
  state = { 
    isShown: false, 
    movies: getReducedData(data),
    currentImage: "",
  };

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

    openModal = (imageUrl) => {
      this.setState({ currentImage: imageUrl })
    }

  render() {
    
    const {isShown, movies, currentImage} = this.state;
    return (
      <div>
        { currentImage && <Modal imageUrl = { currentImage } /> }
        { isShown ? 
        (<GalleryList 
          movies = {movies} 
          idToDelete = {this.deleteFilm}
          toggleStatus = {this.toggleStatus}
          openModal = {this.openModal}
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
