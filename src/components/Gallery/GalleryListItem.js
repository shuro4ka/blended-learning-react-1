import PropTypes from "prop-types";

export const GalleryListItem = ({ 
    id, 
    poster, 
    title, 
    votes, 
    watched, 
    idToDelete, 
    toggleStatus 
}) => {
    return (
        <li>
            <h2>{title}</h2>
            <p>Votes: {votes}</p>
            <p>
                Watched: 
                <span onClick = {() => toggleStatus(id)}>
                    {watched.toString()}
                </span>
            </p>
            <button type="button" onClick={() => idToDelete (id)}>Delete</button>
            <button type="button">Show poster</button>
        </li>  
    );  
};

GalleryListItem.propTypes = {
    id: PropTypes.number.isRequired, 
    poster: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    votes: PropTypes.number.isRequired, 
    watched: PropTypes.bool.isRequired, 
    idToDelete: PropTypes.func.isRequired,
    // toggleStatus: PropTypes.func.isRequired,   
};