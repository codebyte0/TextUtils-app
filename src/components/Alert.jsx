import React from 'react';
import '../App.css';

const Alert = (props) => {
    const capitalize = (word) => {
        if (!word) return ""; 
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alert && (
            <div className="alert h-5 alert-warning d-flex align-items-center" role="alert">
                <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Warning:"><use xlinkHref="#exclamation-triangle-fill" /></svg>
                <div>
                    <strong>{capitalize(props.alert.type)} </strong>
                    {props.alert.msg}
                </div>
            </div>
        )
    );
}

export default Alert;
