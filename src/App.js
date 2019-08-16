import React, {Component} from 'react';
import './App.css';
import Child from './components/Child';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';

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
        <List>
          {
            this.state.todos.map((todo) => {
              return (
                <div>
                  <ListItem key={todo.id}>
                    <ListItemText>{todo.text}</ListItemText>
                    <IconButton variant="fab" aria-label="delete" onClick={this.deleteTodo.bind(this, todo.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                  <Divider />
                </div>
              )
            })
          }
        </List>
      </div>
    );
  }
}

export default App;
