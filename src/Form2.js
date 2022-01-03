import { useState } from "react";
import { useForm } from "react-hook-form";

function Form2(){

    const{val1,setval1}=useState("");
    const {register,handleSubmit}=useForm();
    const submitForm=(data)=>{
        console.log(data,val1);
    }
    function valuechange(e){
        console.log(e.target.value);
        let textbody="";
        for(let i=0;i<e.target.value;i++)
        {
            textbody=textbody+`<input type="text" name="ex1" id=${i} placeholder="name" {setval1(this.state.value)} /><br /><input type="text" name="ex1" placeholder="age" {setval1(this.state.value)} /><br />`
        }

        document.getElementById("abc").innerHTML=textbody;
    }

return(

   

<form onSubmit={handleSubmit(submitForm)} >

    <input type="number" name="val" onChange={(e)=>{

        valuechange(e);

    }}   />

   

    <div id="abc">

       

    </div>

    {/* <div>

        <input type="text" name="ex" {...register('ex')} />

    </div> */}

    <input type="submit"  />

</form>

)

}

export default Form2