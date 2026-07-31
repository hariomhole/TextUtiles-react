
import React,{useState} from 'react'



export default function Aboutus(props) {
const [myStyle , setmyStyle] = useState(
 {
    color:"white",
    backgroundColor:"black",
    text:"🌞"
})

const ToggleStyle = () => {

if(myStyle.color == "white")
{
  setmyStyle({
    color:"black",
    backgroundColor:"white",
    text:"🌙",
  })
  props.showAlert("Light Mode has been Enabled...!","success");
}
else{
   setmyStyle({
    color:"white",
    backgroundColor:"black",
    text:"🌞"
  })
  props.showAlert("Dark Mode has been Enabled...!","success");
}

}

  return (
    <>

   

<div className="container" style={{color:props.mode === "dark"?"white":"black"}}>
 <div className="toggle">
{/* <button id="darkMode" onClick={ToggleStyle} >{myStyle.text}</button> */}
  </div> 

    <h3>About Us</h3>
   <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"style={{backgroundColor:props.mode === "light"?"white":"black",color:props.mode === "dark"?"white":"black"}}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={{backgroundColor:props.mode === "light"?"white":"black",color:props.mode === "dark"?"white":"black"}}>
      <div className="accordion-body">
        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor:props.mode === "light"?"white":"black",color:props.mode === "dark"?"white":"black"}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor:props.mode === "light"?"white":"black",color:props.mode === "dark"?"white":"black"}}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor:props.mode === "light"?"white":"black",color:props.mode === "dark"?"white":"black"}}>
      <div className="accordion-body">
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor:props.mode === "light"?"white":"black",color:props.mode === "dark"?"white":"black"}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={{backgroundColor:props.mode === "light"?"white":"black",color:props.mode === "dark"?"white":"black"}}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

</div>
  
    
    </>
  
  )
}
