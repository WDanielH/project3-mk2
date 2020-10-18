
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
            <input
                name="firstname"
                type="text"
                value={firstname}
                onChange={e => setFirstName(e.target.value)}
                required />
        </label>

        <label>
            Last Name:
            <input
                name="lastname"
                type="text"
                value={lastname}
                onChange={e => setLastName(e.target.value)}
                required />
        </label>

        <label>
            Email:
            <input
                name="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required />
        </label>

        <label>
            Comments:
            <input
                name="comments"
                type="text"
                value={comments}
                onChange={e => setComments(e.target.value)}
                required />
        </label>

        <button>Submit</button>

    </form>
);
}


