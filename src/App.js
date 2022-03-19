import React, {useState} from "react";

import {General} from "./components/General";
import {GeneralData} from "./components/GeneralData";
import {Education} from "./components/Education";
import {EducationData} from "./components/EducationData";
import {Experience} from "./components/Experience";
import {ExperienceData} from "./components/ExperienceData";

import './styles/App.css'
import './styles/Form.css'

const App = () => {
    const [state, setState] = useState({
        generalSubmitBtn: false,
        educationSubmitBtn: false,
        experienceSubmitBtn: false,

        // keys for General.js
        name: '',
        email: '',
        phone: '',

        // keys for Education.js
        schoolName: '',
        studyTitle: '',
        schoolFrom: '',
        schoolTo: '',

        // keys for Experience.js
        companyName: '',
        positionTitle: '',
        mainTasks: '',
        companyFrom: '',
        companyTo: ''
    });

    const saveValue = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const changeButtonStatus = (e) => {
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]: true
        })
        console.log(state);
    }

    const unSubmitBtn = (e) => {
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]: false
        })
    }

    return (
        <div id={'app'}>
            <h1>CV Creator</h1>
            <div id={'components'}>
                {(!state.generalSubmitBtn) ?
                    <General
                        saveValue={saveValue}
                        changeButtonStatus={changeButtonStatus}
                        name={state.name}
                        email={state.email}
                        phone={state.phone}/> :
                    <GeneralData
                        name={state.name}
                        email={state.email}
                        phone={state.phone}
                        unSubmitBtn={unSubmitBtn}/>}
                {(!state.educationSubmitBtn) ?
                    <Education
                        saveValue={saveValue}
                        changeButtonStatus={changeButtonStatus}
                        schoolName={state.schoolName}
                        studyTitle={state.studyTitle}
                        schoolFrom={state.schoolFrom}
                        schoolTo={state.schoolTo}/> :
                    <EducationData
                        schoolName={state.schoolName}
                        studyTitle={state.studyTitle}
                        schoolFrom={state.schoolFrom}
                        schoolTo={state.schoolTo}
                        unSubmitBtn={unSubmitBtn}/>}
                {(!state.experienceSubmitBtn) ?
                    <Experience
                        saveValue={saveValue}
                        changeButtonStatus={changeButtonStatus}
                        companyName={state.companyName}
                        positionTitle={state.positionTitle}
                        mainTasks={state.mainTasks}
                        companyFrom={state.companyFrom}
                        companyTo={state.companyTo}/> :
                    <ExperienceData
                        companyName={state.companyName}
                        positionTitle={state.positionTitle}
                        mainTasks={state.mainTasks}
                        companyFrom={state.companyFrom}
                        companyTo={state.companyTo}
                        unSubmitBtn={unSubmitBtn}/>}
            </div>
        </div>
    )
}

export default App;
