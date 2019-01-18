import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui modals dimmer visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="ui icon header">
                    <i className={`${props.icon} icon`}/>
                    {props.title}
                </div>
                <div className="content">
                    <p>
                        {props.content}
                    </p>
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;