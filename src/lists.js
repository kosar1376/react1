import React from "react";
import Form from "./Form";
import "./App.css";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from "./toast1";


const array1=[
    {name:"name1",idCode:"65784",phone:"7685904",age:22,birthDate:"2000.3.4"},
    {name:"name2",idCode:"768575",phone:"7685",age:23,birthDate:"1999.4.7"},
    {name:"name3",idCode:"7685465",phone:"7869574",age:24,birthDate:"1998.5.8"},
    {name:"name4",idCode:"67584",phone:"65784",age:25,birthDate:"1997.8.10"}
]

const List=()=>{
    

    function del(){
    const ttr=document.getElementsByClassName("ttr");
    const payam=alert("Are you sure?");

    for(let i=0;i<=ttr.length;i++){
        const a=ttr[i];
        a.remove();
       notify("Removed successfully")
        break;
        
    } 
    
}

   
    return(
        <>

        

       <div className="table  flex-container-list">
           <table id="table">
               <tr>
                   <th>name</th>
                   <th>idCode</th>
                   <th>age</th>
                   <th>phone</th>
                   <th>birthDate</th>
                   <th colSpan={3} >oparations</th>
                   

                   


               </tr>

            
                   <tr className="ttr">
                   <td>{array1[0].name}</td>
                   <td>{array1[0].idCode}</td>
                   <td>{array1[0].age}</td>
                   <td>{array1[0].phone}</td>
                   <td>{array1[0].birthDate}</td>
                   <td className="ttd1" ><button className="bt1" onClick={del} >delete</button></td>
                   <td className="ttd2"><button className="bt2">correct</button></td>

               </tr>


               
               <tr className="ttr">
                   <td>{array1[1].name}</td>
                   <td>{array1[1].idCode}</td>
                   <td>{array1[1].age}</td>
                   <td>{array1[1].phone}</td>
                   <td>{array1[1].birthDate}</td>
                   <td className="ttd1" ><button className="bt1" onClick={del}>delete</button></td>
                   <td className="ttd2"><button className="bt2">correct</button></td>

               </tr>



               
               <tr className="ttr">
                   <td>{array1[2].name}</td>
                   <td>{array1[2].idCode}</td>
                   <td>{array1[2].age}</td>
                   <td>{array1[2].phone}</td>
                   <td>{array1[2].birthDate}</td>
                   <td className="ttd1" ><button className="bt1" onClick={del} >delete</button></td>
                   <td className="ttd2"><button className="bt2">correct</button></td>

               </tr>


               <tr className="ttr">
                   <td>{array1[3].name}</td>
                   <td>{array1[3].idCode}</td>
                   <td>{array1[3].age}</td>
                   <td>{array1[3].phone}</td>
                   <td>{array1[3].birthDate}</td>
                   <td className="ttd1" ><button className="bt1" onClick={del} >delete</button></td>
                   <td className="ttd2"><button className="bt2">correct</button></td>

               </tr>


              
          
           </table>

           <Form/>
           <ToastContainer />
       </div>



       
       
        
        
       
        </>
    )

};
export default List;