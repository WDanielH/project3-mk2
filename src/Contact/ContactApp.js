
import React, { Component } from "react";


// export the default function "app"
export default function App(){
    const [FirstName, setFirstName] = React.useState("");
    const [LastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [Comments, setComments] = React.useState("");

    const handleSubmit = (event) => {
        console.log(`
        FirstName: ${firstname}
        LastName: ${lastname}
          Email: ${email}
          Comments:  ${comments}
        `);
        
        event.preventDefault();
    }
    
return (
    <form onSubmit={handleSubmit}>
        <h1>Contact Us</h1>

        <label>
            First Name:    
        </label>

        <label>
            Last Name:
        </label>

        <label>
            Email:
        </label>

        <label>
            Comments:
        </label>

        <button>Submit</button>

    </form>
);
}


