import React, {useState} from 'react'
import './App.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const schema = yup.object().shape({
  fName: yup.string().required(),
  age:yup.number().positive().integer().required(),
  email:yup.string().email().required(),
  pwd:yup.string().min(4).max(12).required(),
  confirmpwd: yup.string().oneOf([yup.ref("pwd"),null])
})
const animatedComponents = makeAnimated();
const Countries = [
  { label: "Albania", value: 355 },
  { label: "Argentina", value: 54 },
  { label: "Austria", value: 43 },
  { label: "Cocos Islands", value: 61 },
  { label: "Kuwait", value: 965 },
  { label: "Sweden", value: 46 },
  { label: "Venezuela", value: 58 }
];
const Form = () => {
  const projects=["one",'two','three','four'];
  
  /*
  const {register, handleSubmit, errors} = useForm({
    resolver:yupResolver(schema),
  });*/
  //Registion function, handleSubmit function, errors object
  //Register function determine which fields we want to be part of our validation
  //handleSubmit function we put on while submitting the form
  //errors object containing all of the errors
  const [date,setDate] = useState();
  const {register,handleSubmit, formState:{errors}}= useForm({
    resolver:yupResolver(schema)
});
const submitForm = (data) =>{

data = Object.assign(data, {date:date})
console.log(data)
console.log("Date",date);


};
    return (
      
  <div class="container mt-3 form-border">
  <form  onSubmit={handleSubmit(submitForm)}>
    <div class="mb-3">
      <label for="fName">Name</label>
      <input type="text" class="form-control" id="fName"  name="fName" {...register('fName')}/>
      <p >{errors.fName?.message}</p>
    </div>
    <div class="mb-3">
      <label for="age">Age</label>
      <input type="number" class="form-control" id="age"  name="age" {...register('age')}/>
      <p >{errors.age?.message}</p>
    </div>
    <div class="mb-3 mt-3">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email"  name="email" {...register('email')}/>
      <p >{errors.email?.message}</p>
    </div>
    <div class="mb-3">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd"  name="pwd" {...register('pwd')}/>
      <p >{errors.pwd?.message}</p>
    </div>
    <div class="mb-3">
      <label for="confirmpwd">Confirm Password:</label>
      <input type="password" class="form-control" id="confirmpwd"  name="confirmpwd" {...register('confirmpwd')}/>
      <p>{errors.confirmPassword && "Passwords should match!"}</p>
    </div>
    <label>Choose Option</label>
    <select class="form-select form-select-md mb-3" aria-label=".form-select-md example" name="option" {...register('option')}>
    <option selected>Choose</option>
    {projects.map(item=>{return(<option>{item}</option>)})}
    </select>
    <div class="mb-3">
            <label>Selected Date : {date} </label> 
            <input type="date" min="2018-01-01"   className='main' onChange={e=>setDate(e.target.value)}/>
    </div>
    <div className="row change-css">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <Select options={Countries} components={animatedComponents}
                isMulti />
            </div>
            <div className="col-md-4"></div>
    </div>
    <button type="submit" class="btn btn-dark">Submit</button><br></br>
  </form>
</div>
    )
}

export default Form
