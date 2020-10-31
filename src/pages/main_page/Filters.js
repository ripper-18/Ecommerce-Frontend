import React from 'react'
import { Form, Container, Card } from 'react-bootstrap';


function Filters() {
    return (
        <Container>
            <Card>
                <Form>
                <Container style={{textAlign: 'center'}}>
                    
                    <h2>Filter 1</h2>
                    {['checkbox', 'checkbox', 'checkbox', 'checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`default ${type}`}
                        />

                        </div>
                    ))}

                    <h2>Filter 2</h2>
                    {['checkbox', 'checkbox', 'checkbox', 'checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`default ${type}`}
                        />

                        </div>
                    ))}

                    <h2>Filter 3</h2>
                    {['checkbox', 'checkbox', 'checkbox', 'checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`default ${type}`}
                        />

                        </div>
                    ))}


                </Container>
                
                </Form>
            </Card>
        </Container>
    )
}

export default Filters
