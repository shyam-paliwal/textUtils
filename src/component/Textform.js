import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted upper case", "success");
    }

    const handleLoClick = () => {
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("converted lower case", "success");
    }

    const handleClear = () => {
      let newText='';
      setText(newText);
      props.showAlert("clear the textarea", "success");
    }

    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("copy clipboard", "success");

    }

    const handleExtraSpace = () => {
      let newText=text.split(/[ ]+/);
      setText(newText.join(' '));
      props.showAlert("removed extra space", "success");

    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const [text, setText]=useState("");
  return (
   <>
    <div className="container" >
      <h2 className="mb-4" style={{color:`${props.mode==='dark'?'white':'#042743'}`}}>{props.heading}</h2>
      <div className="mb-3" style={{backgroundColor:`${props.mode==='dark'?'#042743':'white'}`}}>
      <textarea className="form-control" id="mvBox" value={text} style={{backgroundColor:`${props.mode==='dark'?'#13466e':'white'}`,color:`${props.mode==='dark'?'white':'#042743'}`}} onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>change to upercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>change to lowercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClear}>clear text</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>copy text</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>remove extra space</button>

    </div>
    <div className='container' style={{color:`${props.mode==='dark'?'white':'#042743'}`}} >
      <h2 >text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} character</p>
      <p>{0.008 * text.split(' ').length} minut read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"enter preview about something"}</p>
    </div>
   </>
  )
}
