import {Button, Form} from "react-bootstrap";
import {useState} from "react";


const AuthForm = () => {
    const [message, setMessage] = useState("")

    const handlerSubmit = () => {
        const data = {message}
        fetch('http://localhost:5000/send', {
            method: "POST",
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(data)
        })
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setMessage(e.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handlerSubmit}>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default AuthForm;