
import React, {useState} from "react";

const ValidationForm = () => {
    const [person, setPerson] = useState({email:"",name:""});

    const [errorMessage,setErrorMessage] = useState({email:"",name:""});

    const emailChangeHandler = (event) =>{
      setPerson({...person, email:event.target.value});
    };

    const nameChangeHandler = (event) =>{
      setPerson({...person, name:event.target.value});
    }

    const buttonClickHandler = () =>{
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let error = {email:"",name:""};
      let isValid = true;

      if(!emailRegex.test(person.email)){
        error.email = "Email is not valid";
        isValid = false;
      }

      if(person.name === ""){
        error.name = "Name is not valid.";
        isValid = false;
      }

      setErrorMessage(error);
      if(isValid){
        setErrorMessage({email:"",name:""});
        console.log(person);
        console.log("Send data to DB")
      }
    };

    const buttonResetHandler = () =>{
      setPerson({email:"",name:""});
      setErrorMessage({email:"",name:""});
    };



    return(
        <div className="container mt-3">
        <h2>Validation form</h2>
        <form >
          <div className="mb-3 mt-3">
            <label htmlFor="email">Email:</label>
            <input
             type="email" 
             className="form-control" 
             id="email" 
             placeholder="Enter email" 
             name="email"
             value={person.email}
             onChange={emailChangeHandler}
             />
             {errorMessage && errorMessage.email &&(
              <p className="text-danger">{errorMessage.email}</p>
             )}
          </div>   

          <div className="mb-3 mt-3">
            <label htmlFor="name">Name:</label>
            <input
             type="text" 
             className="form-control" 
             id="name" 
             placeholder="Enter name" 
             name="name"
             value={person.name}
             onChange={nameChangeHandler}
             />
             {errorMessage && errorMessage.name &&(
              <p className="text-danger">{errorMessage.name}</p>
             )}
          </div>   

          <button 
          type="button" 
          className="btn btn-primary"
          onClick={buttonClickHandler}
          >Submit</button>

          <button 
          type="button" 
          className="btn btn-danger"
          onClick={buttonResetHandler}
          >Reset</button>

        </form>
      </div>
      
      
    );
};

export default ValidationForm;