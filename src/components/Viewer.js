import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../stylesheets/Viewer.css';
class Viewer extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            index: 0,
            front: true
        }
    }

    getContent = () => this.props.getContent(this.state.front, this.state.index);

    changeCard = () => {
        if(this.state.index + 1 < this.props.cards.length) {
            this.setState(state => ({
                index: state.index + 1
            }));
        } else {
            this.setState({
                index: 0
            });
        }
    }

    componentDidMount() {
        document.querySelector("#flashcard").addEventListener("click", () => {
            this.setState(state => ({
                front: !state.front
            }));
        });
    }

    render() {
        return (
        <Container>

            <h3 className="text-center">Viewer</h3>

            <Row className="justify-content-md-center">
                <Col className="col-lg-7">
                    <div className="card mt-2 card-height d-flex">
                        <div className="card-body align-items-center d-flex justify-content-center" id="flashcard">{this.getContent()}</div>
                    </div>
                </Col> 
            </Row>

            <Row>
                <Col className="horizontal-align mt-2">
                    <button onClick={this.changeCard} type="button" className="btn btn-primary mt-3">Change Card</button>
                </Col>
            </Row>

            <Row>
                <Col className="horizontal-align">
                    <button type="button" onClick={this.props.switchView} className="btn btn-outline-primary mt-3">Go to Editor</button>
                </Col>
            </Row>

        </Container>
        );
    }
}

export default Viewer;