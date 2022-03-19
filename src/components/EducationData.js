import React from "react";

export const EducationData = (props) => {
    return (
        <div>
            <h2>General information</h2>
            <p>School name: {props.schoolName}</p>
            <p>Title of study: {props.studyTitle}</p>
            <p>{props.schoolFrom} – {props.schoolTo}</p>
            <button name='educationSubmitBtn' onClick={props.unSubmitBtn}>Edit</button>
        </div>
    )
}