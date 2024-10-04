import { Form, Button, Row, Col } from 'react-bootstrap';
const Booking = () => {
    return (
        <>
            <div className="all">
                <h2 className="book">Book Your Table</h2>
                <Form>
                    <Row className="mb-3">

                        <Form.Group as={Col} md="4" controlId="formGridName">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="Your Name*" />
                        </Form.Group>


                        <Form.Group as={Col} md="4" controlId="formGridEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="Your Email*" />
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="formGridService">
                            <Form.Label></Form.Label>
                            <Form.Select defaultValue="Select a Service">
                                <option>Select a Service</option>
                                <option>Service 1</option>
                                <option>Service 2</option>
                                <option>Service 3</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>


                    <Form.Group className="mb-3" controlId="formGridComment">
                        <Form.Label></Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Please write your comment" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="sendmess">
                        Send Message
                    </Button>
                </Form>
            </div>

        </>
    )
}
export default Booking;