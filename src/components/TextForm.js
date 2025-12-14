import React,{ useState} from 'react'

export default function TextForm(props) {
  const[text,setText]=useState(''); //here text is a variable which is actually state of the component and setText is a function for updating the text variable.
  const [textColor, setTextColor] = useState('black')
  const handleUpClick=()=>{
    console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLoClick=()=>{
    console.log("Lowercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handleRedClick=()=>{
    console.log("Lowercase was clicked"+text);
    setTextColor('red');
  }

  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  // setText('Enter text here2');

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea color={textColor} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <div className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</div>
        <div className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</div>
        <div className="btn btn-primary mx-2" onClick={handleRedClick}>ColorRed</div>

    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p> Time to Read: {0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
