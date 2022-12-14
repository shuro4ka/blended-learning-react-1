
import PropTypes from "prop-types";
import { GalleryListItem } from "./GalleryListItem";

export const GalleryList = ({ movies, idToDelete, toggleStatus, openModal }) => {
    return (
        <ul>
            {movies.map(({ id, poster, title, votes, watched }) => {
                return(
                    <GalleryListItem 
                        key={id} 
                        id={id} 
                        poster={poster} 
                        title={title} 
                        votes={votes} 
                        watched={watched}
                        idToDelete={idToDelete}
                        toggleStatus={toggleStatus}
                        openModal={openModal}
                    />
                )
            })}
        </ul>
        );    
    };

    GalleryList.propTypes = { 
        idToDelete: PropTypes.func.isRequired,
        toggleStatus: PropTypes.func.isRequired,
        openModal: PropTypes.func.isRequired,
        movies: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired, 
            poster: PropTypes.string.isRequired, 
            title: PropTypes.string.isRequired, 
            votes: PropTypes.number.isRequired, 
            watched: PropTypes.bool.isRequired,
                
            })
        ),
    };
        