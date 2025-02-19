import React, { useState } from 'react';
import styles from './Transcript.module.css';
import arrow from "../../assets/ep_back.png"

const Transcript = () => {
    const [transcript, setTranscript] = useState([
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",

    ]);

    const [editedTranscript, setEditedTranscript] = useState(transcript);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (index, value) => {
        const newTranscript = [...editedTranscript];
        newTranscript[index] = value;
        setEditedTranscript(newTranscript);
    };

    const handleSave = () => {
        setTranscript(editedTranscript);
        setIsEditing(false);
        alert('Transcript saved!');
    };

    const handleDiscard = () => {
        setEditedTranscript(transcript);
        setIsEditing(false);
    };
    const handleEditClick = () => {
        setIsEditing(true);
    };

    return (
        <div className={styles.container}>

            <div className={styles.mainContent}>
                <div className={styles.header}>
                    <h2 className={styles.headerTitle}><img src={arrow} alt="arrow" className={styles.arrowIcon} />Edit Transcript</h2>
                    <div className={styles.headerButtons}>
                        {isEditing ? (
                            <>
                                <button className={styles.discardButton} onClick={handleDiscard}>Discard</button>
                                <button className={styles.saveButton} onClick={handleSave}>Save</button>
                            </>
                        ) : (
                            <button className={styles.editButton} onClick={handleEditClick}>Edit</button>
                        )}
                    </div>
                </div>
                <div className={styles.transcriptContainer}>
                    {editedTranscript.map((text, index) => (
                        <div key={index} className={styles.transcriptItem}>
                            <textarea
                                className={styles.textarea}
                                value={text}
                                onChange={(e) => handleEdit(index, e.target.value)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Transcript;
