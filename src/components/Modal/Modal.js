import { ModalBox } from './Modal.styled';

export const Modal = ({ imageUrl }) => (
    <ModalBox>
        <div>
            <div>
                {/* <button type="button">
                    Close
                </button> */}
                <img src={imageUrl} alt="poster" />
            </div>
        </div>
    </ModalBox>
);