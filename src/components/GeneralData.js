import React from "react";

export const GeneralData = (props) => {
    return (
        <div>
            <h2>General information</h2>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
            <button name='generalSubmitBtn' onClick={props.unSubmitBtn}>Edit</button>
        </div>
    )
}