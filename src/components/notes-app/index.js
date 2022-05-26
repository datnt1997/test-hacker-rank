import React, { useState } from "react";
import "./index.css";

function NotesApp() {
  const [noteArray, setNoteArray] = useState([]);
  const [displayArray, setDisplayArray] = useState([]);
  const [noteTitle, setNoteTile] = useState('');
  const [noteStatus, setNoteStatus] = useState('');

  const onChangeNoteTitle = (e) => {
    setNoteTile(e?.target?.value || '');
  }

  const onChangeNoteStatus = (e) => {
    setNoteStatus(e?.target?.value || '');
  }

  const addNote = () => {
    const noteObject = { noteTitle, noteStatus };
    let newNoteArray = [...noteArray];
    newNoteArray.push(noteObject);
    setNoteArray(newNoteArray);
    setDisplayArray(newNoteArray);
    setNoteStatus('');
    setNoteTile('');
  }

  const displayData = (type) => {
    let displayArray = [];

    if (type === 'Active' || type === 'Completed') {
      displayArray = noteArray.filter(item => item.noteStatus === type);
    } else {
      displayArray = [...noteArray];
    }


    setDisplayArray(displayArray);
  }

  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
        <input data-testid="input-note-name" type="text" className="large mx-8"
          placeholder="Note Title" value={noteTitle} onChange={onChangeNoteTitle} />
        <input data-testid="input-note-status" type="text" className="large mx-8"
          placeholder="Note Status" value={noteStatus} onChange={onChangeNoteStatus} />
        <button className="" data-testid="submit-button" onClick={addNote}>Add Note</button>
      </section>

      <div className="mt-50">
        <ul className="tabs">
          <li className="tab-item slide-up-fade-in" data-testid="allButton" onClick={() => displayData('All')}>All</li>
          <li className="tab-item slide-up-fade-in" data-testid="activeButton" onClick={() => displayData('Active')}>Active</li>
          <li className="tab-item slide-up-fade-in" data-testid="completedButton" onClick={() => displayData('Completed')}>Completed</li>
        </ul>
      </div>
      <div className="card w-40 pt-30 pb-8">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody data-testid="noteList">
            {displayArray.map((item, index) => (
              <tr key={index}>
                <td>{item.noteTitle}</td>
                <td>{item.noteStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotesApp