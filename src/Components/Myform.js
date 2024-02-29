import React , {useState} from 'react'

export default function Myform(props) {
  // this function will conver the text in UPPER CASE

    const uppercase =()=>{
        console.log("done it bro"+text);
        let  newtxt=text.toUpperCase();
       setText(newtxt);
    }
    // this function is for convert the text in lower case
    const lowerCase =()=>{
      console.log("done it bro"+text);
      let newtxt=text.toLowerCase();
     setText(newtxt);
  }
  // this function is for convert the teext in camel cases
  const CamelCase =()=>{
    let newtxt=text.split(" ");
    let result,a;
    let finalresult="";
    for(let i=0;i<newtxt.length;i++){
      result=newtxt[i];
      if (result!=null && result!==" ")
      {
         a=result[0].toUpperCase();
      }
      else{
        alert("PLease reenter a text...!");
      }
     finalresult+=a+result.substr(1,result.length)+" ";
      // console.log(finalresult);
    }
 
   setText(finalresult);

}
// this function counts the words in a string 
const wordCount =()=>{
  let newtxt="";
   newtxt=text.split(" ");
  console.log(newtxt.length);
  setText("The Total words are ="+newtxt.length);
}




    const handlechange=(event)=>{
        setText(event.target.value);
    }

    const [text ,setText] =useState("See results here...! ");

  return (
    <div className='container p-2 outer'>
    
  <div className="my-3">
    <div className=" p-2 container ">
    <h1>{props.heading}</h1>
    <textarea  className="form-control" onChange={handlechange} placeholder='Enter text to transform' id="input"   rows="8" ></textarea>
    </div>
    
    <div className='btn_div container'>
      <button className='btn btn-primary my-2 md' onClick={uppercase}>To UPPERCASE</button>
      <button className='btn btn-primary my-2 md' onClick={lowerCase}>To lowercase</button>
      <button className='btn btn-primary my-2 md' onClick={CamelCase} title='Make every First letter capital of each word' disabled>To CamelCase</button>
      <button className='btn btn-primary my-2 md' onClick={wordCount} title='Count the total word'>Total Words</button>

      <button className='btn btn-primary my-2' disabled>Only first letter capital of every line</button>
      <button className='btn btn-primary my-2' disabled>Remove extra space</button>
      <hr/>
      
      </div>
    
  </div>
  <div className=" p-2 container ">
    <h1>Result </h1>
    <textarea  className="form-control" onChange={handlechange} placeholder={text} id="output"  value={text} rows="8" ></textarea>

    </div>
    </div>
  )
}
