import React, { useState } from 'react'
import upload from "./Upload.module.css";
import icnos from "../../assets/colorlogo.png";
import diamond from "../../assets/diamond-line.png"
import widget from "../../assets/checkbox-multiple-blank-line.png";
import add from "../../assets/add-line.png";
import pencil from "../../assets/pencil-line.png";
import setting from "../../assets/settings-2-line.png";
import profile from "../../assets/profile.png"
import UploadRight from '../UploadRight/UploadRight';
import Transcript from '../Transcript/Transcript';
const Upload = () => {

    return (
        <div className={upload.mainContainer}>

            <div className={upload.left}>
                <div>
                    <div className={upload.leftImageDiv}>
                        <img src={icnos} alt="icon" className={upload.leftIcon} />
                    </div>
                    <div className={upload.leftContent}>
                        <div className={upload.leftData}><img src={add} alt="Plus" className={upload.leftIconsData} />Add your Podcast(s)</div>
                        <div className={upload.leftData}><img src={pencil} alt="Create" className={upload.leftIconsData} />Create & Repurpose</div>
                        <div className={upload.leftData}><img src={widget} alt="Widget" className={upload.leftIconsData} />Podcast Widget</div>
                        <div className={upload.leftData}><img src={diamond} alt="Upgrade" className={upload.leftIconsData} />Upgrade</div>
                    </div>
                </div>

                <hr />
                <div className={upload.leftDownDiv}>
                    <div className={upload.leftHelp}>
                        <img src={setting} alt="Help" className={upload.leftIconsData} /> Help
                    </div>
                    <hr className={upload.hrline} />
                    <div className={upload.settingContainer}>
                        <div><img src={profile} alt="Profile" /></div>
                        <div>
                            <p>UserName</p>
                            <p>test@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
            <UploadRight />
            <Transcript />
            </div>
        </div>
    )
}

export default Upload;
