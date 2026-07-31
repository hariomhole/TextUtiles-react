import  {useState} from 'react'


export default function TextBox(props) {



 const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);





  let data = "";
  const  ConvertUpCase = () => {
        
         console.log("Hii succeful clicked",Text);
         let data  = Text.toUpperCase();
         setText(data);   
         props.showAlert("Converted into Uppercase..!","success"); 
         
 setUndoStack([...undoStack, Text]);
  setRedoStack([]);
  }

const ConvertLwCase = () => {
  let data1  = Text.toLowerCase();
         setText(data1);    
          props.showAlert("Converted into Lowercase..!","success"); 

 setUndoStack([...undoStack, Text]);
  setRedoStack([]);
}

const ClearText = () =>{
 let data1  = "";
         setText(data1);    
 props.showAlert("Cleared All Text..!","success"); 

 setUndoStack([...undoStack, Text]);
  setRedoStack([]);
}
const CopyText = async() => {
 
   
     await navigator.clipboard.writeText(Text);
    props.showAlert("Copy all Text..!","success"); 
     
 setUndoStack([...undoStack, Text]);
  setRedoStack([]);
  setText(" ");
 
}

  const HandleOnChange = (e) => {
       
   console.log("Onchange Function Run ");
        
        console.log(e.target.value);
        setText(e.target.value);
   
  }

  const Removespace = ()=> {

    
 setUndoStack([...undoStack, Text]);
  setRedoStack([]);

    console.log("remove space clicked");
    
  let newText = Text.split(/[ ]+/);
  setText(newText.join(" "));
   props.showAlert("Extra space has been removed..!","success"); 
  }

  //reverse Text
  const ReverseString = () =>{

 setUndoStack([...undoStack, Text]);
  setRedoStack([]);

     setText(Text .split(" ").map(word => word.split("").reverse().join("")).join(" "))

 props.showAlert("Coverted Text Into Reverse ..!","success"); 
  }


  const undo = () => {
     props.showAlert("Last change undone...!","success");
    if (undoStack.length === 0) return;

    const previous = undoStack[undoStack.length - 1];

    setRedoStack([...redoStack, Text]);
    setUndoStack(undoStack.slice(0, -1));
    setText(previous);
  };

    const redo = () => {
        props.showAlert("Last change restored...!","success");
    
    if (redoStack.length === 0) return;

    const next = redoStack[redoStack.length - 1];

    setUndoStack([...undoStack, Text]);
    setRedoStack(redoStack.slice(0, -1));
    setText(next);
  };





 const [Text, setText] = useState("");

  
  return (

   <>
 


   <div className="container" style={{color:props.mode === "dark"?"white":"black"}}>
      <h3 className="headong" >Enter Text for Analyze Text  </h3>
      <label htmlFor="mybox" className="form-label"  style={{ textAlign: "start", display: 'block', fontSize: "13px" }}>Enter Text here</label>
      <textarea className="form-control" id="mybox" rows="8" onChange={HandleOnChange} placeholder="Enter Text Here To Analyze" value={Text} style={{backgroundColor:props.mode === "light"?"white":"gray",color:props.mode == "light"?"black":"white"}} ></textarea>

    </div>
    <div className="btns">

 <button className="btn  btn-outline-primary mt-3" onClick={ConvertUpCase}>Covert To Uppercase</button>
  
 <button className="btn  btn-outline-success mt-3" id="btn2" onClick={ConvertLwCase}>Covert To Lowercase</button>


 <button className="btn  btn-outline-warning  mt-3" id="btn3" onClick={CopyText}>Copy All Text</button>
 <button type="button" className="btn btn-outline-danger mt-3 mx-2" id="btn4" onClick={ClearText}>Clear Text</button>
<button type="button" className="btn btn-outline-info mt-3 mx-2" id="btn5" onClick={Removespace}>Remove Extra Space</button>
<button type="button" className="btn btn-outline-success mt-3 mx-2" id="btn6" onClick={ReverseString}>Reverse Text</button>
  <button onClick={undo} disabled={undoStack.length === 0} style={{color:props.mode === "dark"?"black":"white",backgroundColor:props.mode === "dark"?"white":"black"}} id="undo"><i className="fa-solid fa-rotate-left"></i> </button>
   <button onClick={redo} disabled={redoStack.length === 0} style={{color:props.mode === "dark"?"black":"white",backgroundColor:props.mode === "dark"?"white":"black"}} id="redo"><i className="fa-solid fa-rotate-right"></i></button>

    </div>
   <div className={`container1 my-3  border border-${props.mode === "light"? "dark":"light"}`} style={{color:props.mode === "dark"?"white":"black"}} >

     <h3>Your  Text Summary</h3>

     <p><b>{ Text.trim() === ""? 0: Text.trim().split(/\s+/).length}</b> Words And <b>{Text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length}</b>  Sentence <b>{(Text.match(/[a-zA-Z]/g) || []).length}</b> Character</p>

       </div>

       <div className="preview my-4" style={{color:props.mode === "dark"?"white":"black"}}>

          <h3>Preview Some Text</h3>
                    <p>{Text.length>0?Text:"Enter Some Text To Preview Here"}</p>
   </div>
    
    </>
  )
}

//