import { type } from "@testing-library/user-event/dist/type";
import PropTypes from "prop-types";

//функциональний коипонент: именований експорт стрилочнои функции
export const Button = ({ handler, type, textContent }) => {
    return (
    <button onClick={handler} 
        type ={type}>
            { textContent }
    </button>
)};

Button.propTypes = {
    handler: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
};