import { ModalBox } from './Modal.styled';
import PropTypes from "prop-types";

export const Modal = ({ imageUrl, closeModal }) => (
    <ModalBox>
        <div>
            <div>
                <button type="button" onClick = { closeModal } >
                    Close
                </button>
                <img src={imageUrl} alt="poster" width="300" />
            </div>
        </div>
    </ModalBox>
);

Modal.propTypes = { 
    imageUrl: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
}