import React, { useState } from 'react'
import project from "./Project.module.css"
import logo from "../../assets/colorlogo.png";
import notification from "../../assets/notifications.png"
import setting from "../../assets/icon.png";
import plus from "../../assets/plus.png";
import group from "../../assets/Group 16.png";

const Project = () => {
    const [modal, setModal] = useState(false)
    const handleModal = () => {
        setModal(!modal)
    }
    return (
        <div className={project.container}>
            <div className={project.header}>
                <div>
                    <img src={logo} alt="" className={project} />
                </div>
                <div className={project.icons}>
                    <img src={setting} alt="setting" className={project} />
                    <img src={notification} alt="notification" className={project} />
                </div>
            </div>
            <div className={project.details}>
                <h1 className={project.heading}>Create a New Project</h1>
                <img src={group} alt="Group Photo" className={project.mainImg} />
                <p className={project.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae impedit quibusdam quisquam quidem, excepturi deserunt maiores nostrum odio aspernatur veniam. Maiores excepturi inventore error a quaerat autem in magnam voluptate.</p>
                <button className={project.buttonTag} onClick={handleModal}>
                    <img src={plus} alt="addition" className={project.add} />Create New Project</button>
            </div>
            {modal && (
                <div className={project.modalOverlay}>
                    <div className={project.modalContent}>
                        <h1 >Create Project</h1>
                        <div className={project.inputData}>
                            <label >
                                Enter Project Name:
                            </label>
                            <input type="text" placeholder='Type Here' />
                        </div>
                        <div>
                            <button onClick={handleModal}>Cancel</button>
                            <button>Create</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Project
