import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
font-size:2rem;
border-radius:15px;
border: 1px solid black;
margin:1%;

`;

const Button = styled.button`
color: black;
font-size: 2em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;
border-radius:15px;
`;

const Label = styled.label`
color: black;
font-size: 2rem;
margin: 1em;
padding: 0.25em 1em;
// border: 2px solid black;
border-radius: 3px;
border-radius:15px;
text-align:center;
`;


class NewFriendForm extends React.Component {
    constructor() {
        super();
        this.state = {
            friend: {
                name: "",
                age: "",
                email: ""
            }
        }
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.friend.name !== "" && this.state.friend.age !== "" && this.state.friend.email !== "") {
            this.props.addFriend(JSON.parse(JSON.stringify(this.state.friend)));
            this.setState({
                friend: {
                    name: "",
                    age: "",
                    email: ""
                }
            })
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <Label>Name: </Label>
                <Input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                /><br/>
                <Label>Age:</Label>
                <Input
                    type="text"
                    name="age"
                    onChange={this.handleChange}
                    value={this.state.age}
                /><br/>
                <Label>Email: </Label>
                <Input
                    type="text"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                /><br/>
                <Button type="submit">Add Friend</Button>
            </form>
        );
    }
}


export default NewFriendForm;  