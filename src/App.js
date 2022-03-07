
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let [bookcount, setboookCount] = useState(0);
  let [pencount, setpenCount] = useState(0);
  let [notebookcount, setnoteboookCount] = useState(0);


  let [inkpencount, setinkpenCount] = useState(0);


  
  
  return (
    <div className='items'>

      <div>
        <h1>Books</h1>
        <button onClick={() => setboookCount(bookcount + 1)} className="addBook">
          add 
        </button>

        <button onClick={() => setboookCount(bookcount -1)}className="remBook" >
          remove 
        </button>
      </div>

      <div>
        <h1>Pens</h1>
        <button onClick={() => setpenCount(pencount + 1)} className="addPen">
          add 
        </button>

        <button onClick={() => setpenCount(pencount -1)}className="remPen" >
          remove 
        </button>
      </div>

      <div>
        <h1>Notebooks</h1>
        <button onClick={() => setnoteboookCount(notebookcount + 1)} className="addNotebook">
          add 
        </button>

        <button onClick={() => setnoteboookCount(notebookcount -1)}className="remNotebook" >
          remove 
        </button>
      </div>

      <div>
        <h1>InkPens</h1>
        <button onClick={() => setinkpenCount(inkpencount + 1)} className="addInkpen">
          add 
        </button>

        <button onClick={() => setinkpenCount(inkpencount -1)}className="remInkpen" >
          remove 
        </button>
      </div>

      <h1 className='totalBooks'>Books : {bookcount}</h1>
      <h1 className='totalPens'>Pen : {pencount}</h1>
      <h1 className='totalNotebooks'>NoteBooks : {notebookcount}</h1>
      <h1 className='totalInkpens'>InkPen : {inkpencount}</h1>

      <h1>totalOfAllItems : {bookcount+pencount+inkpencount+ notebookcount}</h1>

   
    </div>
  );
}

export default App;

