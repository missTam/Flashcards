import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Editor from './components/Editor';
import Viewer from './components/Viewer';
import Header from './shared-components/Header'
import './stylesheets/App.css';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editor: true,
            cards: []
        };
    }

    switchView = () => {
        this.setState(state => ({
            editor: !state.editor
        }));
    }

    addCard = (front, back) => {
       this.setState(state => ({
            cards: [...state.cards, {front: front, back: back}]
       })); 
    }

    deleteCard = index => {
        this.setState(state => {
            const cards = [...state.cards];
            cards.splice(index, 1);
            return {
                cards: cards
            }
        });
    }

    getContent = (front, index) => {
        if(this.state.cards.length > 0) {
            return front ? this.state.cards[index].front : this.state.cards[index].back;
        }
    }


    render() {
        return (
            <div>
                <Header text="Create your Flashcards"/>
                {this.state.editor ? <Editor 
                                        cards={this.state.cards} 
                                        switchView={this.switchView}
                                        addCard={this.addCard}
                                        deleteCard={this.deleteCard}/> 
                                    : <Viewer 
                                        cards={this.state.cards}
                                        switchView={this.switchView}
                                        getContent={this.getContent}/>}
            </div>
        );
    }
}

export default App;
