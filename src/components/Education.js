import React from "react";

export const Education = (props) => {
    return (
        <div>
            <h2>Educational experience</h2>
            <form>
                <label htmlFor="schoolInput">School name</label>
                <input name='schoolName' value={props.schoolName} onChange={props.saveValue} type="text" id="schoolInput"/>

                <label htmlFor="titleInput">Title of study</label>
                <input name='studyTitle' value={props.studyTitle} onChange={props.saveValue} type="email" id="titleInput"/>

                <label htmlFor="dateFromInput">From</label>
                <input name='schoolFrom' value={props.schoolFrom} onChange={props.saveValue} type="date" id="dateFromInput"/>

                <label htmlFor="dateToInput">To</label>
                <input name='schoolTo' value={props.schoolTo} onChange={props.saveValue} type="date" id="dateToInput"/>
                <div id={'buttons'}>
                    <button name='educationSubmitBtn' onClick={props.changeButtonStatus} type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}