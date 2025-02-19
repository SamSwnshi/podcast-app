import React, { useState } from 'react'
import upload from "./Upload.module.css";
import icnos from "../../assets/colorlogo.png";
import diamond from "../../assets/diamond-line.png"
import widget from "../../assets/checkbox-multiple-blank-line.png";
import add from "../../assets/add-line.png";
import pencil from "../../assets/pencil-line.png";
import setting from "../../assets/settings-2-line.png";
import cloudUpload from '../../assets/cloud_upload.png';
import feed from "../../assets/image 1.png";
import youtube from "../../assets/image 2.png";
import update from "../../assets/Vector.png";
import cross from "../../assets/close-large-line.png"
const Upload = () => {
    const data = [
        {
            heading: "RSS Feed",
            subheading: "Lorem ipsum dolor sit amet.",
            image: feed,

        },
        {
            heading: "Youtube Video",
            subheading: "Lorem ipsum dolor sit amet.",
            image: youtube,

        },
        {
            heading: "Upload files",
            subheading: "Lorem ipsum dolor sit amet.",
            image: update,

        },
    ]
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    }
    return (
        <div className={upload.mainContainer}>
            <div className={upload.left}>
                <div>
                    <img src={icnos} alt="icon" />
                </div>
                <div>
                    <div><img src={add} alt="Plus" />Add your Podcast(s)</div>
                    <div><img src={pencil} alt="Create" />Create & Repurpose</div>
                    <div><img src={widget} alt="Widget" />Podcast Widget</div>
                    <div><img src={diamond} alt="Upgrade" />Upgrade</div>
                </div>
                <hr />
                <div>
                    <img src={setting} alt="Help" /> Help
                </div>
                <hr />
            </div>
            <div className={upload.right}>
                <h1 className={upload.addPodcast}>Add Podcast</h1>
                <div className={upload.dataMap}>
                    {data.map((items, idx) => (
                        <div key={idx} className={upload.divs}>
                            <div className={upload.details}>
                                <h1 className={upload.heading}>{items.heading}</h1>
                                <p className={upload.subheading}>{items.subheading}</p>
                            </div>

                            <img src={items.image} alt={items.heading} className={upload.icons} />
                        </div>
                    ))}
                </div>
                <div className={upload.uploadingData}>
                    <img src={cloudUpload} alt="cloud upload" className={upload.cloudPhoto} />
                    <p className={upload.para1}>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
                    <p className={upload.para2}>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
                    <button onClick={handleModal} className={upload.selectFile}>Select File</button>
                </div>
            </div>
            {modal && (
                <div className={upload.modalContainer}>
                    <div className={upload.modalContent}>
                        <div className={upload.header}>
                            <div className={upload.iconHeader}>
                                <img src={youtube} alt="Youtube Icon" className={upload.youtube} />
                                <h1 className={upload.headerHeading}>Upload from Youtube</h1>
                            </div>
                            <div onClick={handleModal} className={upload}>
                               <img src={cross} alt="cross" className={upload.cross} />
                            </div>
                        </div>
                        <div className={upload.formInput}>
                            <label className={upload.name}>Name</label>
                            <input type="text" className={upload.inputTag} />
                        </div>
                        <div className={upload.formInput}>
                            <label className={upload.name}>Transcript</label>
                            <textarea type="text" className={upload.inputTextarea}/>
                        </div>
                        <div className={upload.uploadDiv}>
                            <button className={upload.uploadButton}>Upload</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Upload
