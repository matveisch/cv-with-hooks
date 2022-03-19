import React from "react";

export const Experience = (props) => {
    return (
        <div>
            <h2>Practical experience</h2>
            <form>
                <label htmlFor="companyInput">Company name</label>
                <input name='companyName' value={props.companyName} onChange={props.saveValue} type="text" id="companyInput"/>

                <label htmlFor="positionInput">Position title</label>
                <input name='positionTitle' value={props.positionTitle} onChange={props.saveValue} type="email" id="positionInput"/>

                <label htmlFor="tasksInput">Main tasks</label>
                <input name='mainTasks' value={props.mainTasks} onChange={props.saveValue} type="text" id="tasksInput"/>

                <label htmlFor="dateFromInput">From</label>
                <input name='companyFrom' value={props.companyFrom} onChange={props.saveValue} type="date" id="dateFromInput"/>

                <label htmlFor="dateToInput">To</label>
                <input name='companyTo' value={props.companyTo} onChange={props.saveValue} type="date" id="dateToInput"/>
                <div id={'buttons'}>
                    <button name='experienceSubmitBtn' onClick={props.changeButtonStatus} type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}