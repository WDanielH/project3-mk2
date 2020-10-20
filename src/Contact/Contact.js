
import React from "react";
import ReactDOM from 'react-dom';

class ContactApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      }
    }
  
    render() {
      return(
        <div className="App">
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="GET">
            <div className="form-group">
              <label htmlFor="name">First Name</label>
              <input type="text" className="form-control" value={this.state.firstName} onChange={this.onFirstNameChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Last Name</label>
              <input type="text" className="form-control" value={this.state.lastName} onChange={this.onLastNameChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      );
    }
  
    onFirstNameChange(event) {
      this.setState({firstName: event.target.value})
    }

    onLastNameChange(event) {
        this.setState({lastName: event.target.value})
      }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
    handleSubmit(e) {
        e.preventDefault();
      
        fetch('http://localhost:3002/send', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(
          (response) => (response.json())
            ).then((response)=> {
          if (response.status === 'success') {
            alert("Message Sent."); 
            this.resetForm()
          } else if(response.status === 'fail') {
            alert("Message failed to send.")
          }
        })
      }
  }
  
  export default ContactApp;


/*

// export the default function "app"
export default function ContactApp(){
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

*/

/*
class ContactApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
    render() {
      return(
        <div className="App">
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      );
    }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
    handleSubmit(event) {
    }
  }
  
  export default ContactApp;

*/