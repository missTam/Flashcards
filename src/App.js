import React, {Component} from 'react';
import Editor from './components/Editor';
import Viewer from './components/Viewer';

class App extends Component {

  render() {
      return (
          <div>
              <Editor />
              <Viewer />
          </div>
      );
  }
}

export default App;
