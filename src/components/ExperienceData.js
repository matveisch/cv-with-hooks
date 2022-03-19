import React from "react";

export const ExperienceData = (props) => {
    return (
        <div>
            <h2>General information</h2>
            <p>Company name: {props.companyName}</p>
            <p>Position title: {props.positionTitle}</p>
            <p>Main tasks: {props.mainTasks}</p>
            <p>{props.companyFrom} – {props.companyTo}</p>
            <button name='experienceSubmitBtn' onClick={props.unSubmitBtn}>Edit</button>
        </div>
    )
}