import React, {Component} from 'react';
import './App.css';
import Child from './components/Child';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeResult: 'change default value',
      inputResult: 'input default value',
      keyupResult: 'keyup default value',
      todos: [
        {id: "1", text: "todo 1"},
        {id: "2", text: "todo 2"},
        {id: "3", text: "todo 3"}
      ],
      parentValue: 100
    };
  }

  deleteTodo(id) {
    let todos = this.state.todos;
    todos = todos.filter((todo) => todo.id !== id);
    this.setState({todos: todos});
  }
  onChange(e) {
    this.setState({changeResult: e.target.value});
  }
  onInput(e) {
    this.setState({inputResult: e.target.value});
  }
  onKeyup(e) {
    this.setState({keyupResult: e.target.value});
  }
  addValueParent(value) {
    const newValue = this.state.parentValue + value;
    this.setState({parentValue: newValue});
  }

  render() {
    return (
      <div>
        <Child pval={this.state.parentValue} add={this.addValueParent.bind(this)}></Child>
        <input value={this.state.changeResult} onChange={this.onChange.bind(this)} placeholder="change"/>{this.state.changeResult}<br/>
        <input defaultValue={this.state.inputResult} onInput={this.onInput.bind(this)} placeholder="input"/>{this.state.inputResult}<br/>
        <input defaultValue={this.state.keyupResult} onKeyUp={this.onKeyup.bind(this)} placeholder="keyup"/>{this.state.keyupResult}
        <ul>
          {
            this.state.todos.map((todo) => {
              return (
                <li key={todo.id}>{todo.text}
                  <button onClick={this.deleteTodo.bind(this, todo.id)}>x</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
