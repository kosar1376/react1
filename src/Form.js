import React from "react";
import "./App.css";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import notify1 from "./toast2";

function not(){
    notify1("submited successfully")
}





const Form=()=>{
    function etebar(){

    }




    return(
        <div className="form">

            <form className="form1"  id="MyForm">
                
                <fieldset className="filed">
                    <legend>personality:</legend>
                <label for="name" >Enter your name: </label>
                <input  type={"text"} id="name" required /><br/><br/>
                <label for="idcode">Enter your id code: </label>
                <input type={"text"} id="idcode" required minLength={5}  /><br/><br/>
                <label for="datemax">Enter your birth date: </label>
                <input type="date" id="datemax" name="datemax" required/><br/><br/>
                <label for="age">Enter your age: </label>
                <input type={"number"} id="age" required maxLength={2}/><br/><br/>
                <label for="phone">Enter a phone number: </label>
                <input type="tel" id="phone" name="phone" required/><br/><br/>
                
                </fieldset>

  
                <fieldset className="filed1">
                    <legend>choose your gender: </legend>
                <input type="radio" id="html" name="fav_language" value="femail" required/>
                <label for="html">femail</label><br/>
                <input type="radio" id="css" name="fav_language" value="mail" required/>
                <label for="css">mail</label><br/>
                </fieldset>

                <button type="submit"  className="sub1"  onClick={not}>send</button>
  

            </form>

            
        </div>
    )
};

export default Form;