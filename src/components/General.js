import React from "react";

export const General = (props) => {
    return (
        <div>
            <h2>General information</h2>
            <form>
                <label htmlFor="nameInput">Name</label>
                <input name='name' value={props.name} onChange={props.saveValue} id="nameInput"/>

                <label htmlFor="emailInput">Email</label>
                <input name='email' value={props.email} onChange={props.saveValue} type="email" id="emailInput"/>

                <label htmlFor="phoneInput">Phone</label>
                <input name='phone' value={props.phone} onChange={props.saveValue} type="tel" id="phoneInput"/>
                <div id={'buttons'}>
                    <button name='generalSubmitBtn' onClick={props.changeButtonStatus} type="submit">Submit</button>
                </div>
            </form>

        </div>
    )
}