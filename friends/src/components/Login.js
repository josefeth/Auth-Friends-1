import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Div = styled.div`
margin-top:30%;
display:flex;
flex-direction:column;
`;

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


class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/login", this.state.credentials)
            .then(res => {
                console.log("login: ", res);
                localStorage.setItem("token", res.data.payload);
                this.props.history.push("/protected");
            })
            .catch(err => {
                console.log(err.message);
            });
    };

    render() {
        return (
            <Div>
                <form onSubmit={this.login}>
                    <Input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <Button type="submit">Log in</Button>
                </form>
            </Div>
        )
    }
}

export default Login;  