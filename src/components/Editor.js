import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../stylesheets/Editor.css';
class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            front: "",
            back: ""
        };
    }

       // for multiple input fields: have a single handleChange function 
    // use [] which takes an element's attribute and sets the corresponding state key

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    addCard = () => {
        this.props.addCard(this.state.front, this.state.back);
        this.setState({
            front: "",
            back: ""
        });
    }

    deleteCard = event => {
        this.props.deleteCard(event.target.dataset.index);
    }

    render() {

        const cards = this.props.cards.map((card, i) => {
            return (
                <Row key={i}>
                    <Col xs={5}>
                        <div className="card mt-2">
                            <div className="card-body">{card.front}</div>
                        </div>
                    </Col>
                    <Col xs={5}>
                        <div className="card mt-2">
                            <div className="card-body">{card.back}</div>
                        </div>
                    </Col>
                    <Col className="vertical-align">
                        <button data-index={i} onClick={this.deleteCard} type="button" className="btn btn-outline-primary mt-2">Delete</button>
                    </Col>
                </Row>
            );
        })

        return(
            <Container>

                <h3>Editor</h3>

                <Row>
                    <Col xs={5}>
                        <h5 className="mt-3">Front</h5>
                    </Col>
                    <Col xs={5}>
                        <h5 className="mt-3">Back</h5>
                    </Col>
                    <Col></Col>
                </Row>
                
                {cards}

                <Row className="mt-3">
                    <Col xs={5}>
                        <form>
                            <label htmlFor="front" className="form-label"></label>
                            <input onChange={this.handleChange} type="text" className="form-control" id="front" placeholder="Card Front" value={this.state.front}/>
                            <div id="formInfo" className="form-text">E.g. one side can show a saying and the other side the explanation.</div>
                        </form> 
                    </Col>
                    <Col xs={5}>
                        <form>
                            <label htmlFor="back" className="form-label"></label>
                            <input onChange={this.handleChange} type="text" className="form-control" id="back" placeholder="Card Back" value={this.state.back}/>
                        </form>
                    </Col>
                    <Col className="vertical-align">
                        <button onClick={this.addCard} type="button" className="btn btn-primary">Save</button>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col>
                        <button type="button" onClick={this.props.switchView} className="btn btn-outline-primary mt-3">Go to Viewer</button>
                    </Col>
                </Row>
                
            </Container>
        ); 
    }
}

export default Editor;