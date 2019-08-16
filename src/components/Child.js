import React, {Component} from 'react';

class Child extends Component {
    addValueChild() {
        this.props.add(10);
    }

    render() {
        return (
            <div>
              {this.props.pval}
              <button onClick={this.addValueChild.bind(this)}>ADD</button>
            </div>
        );
    }
}

export default Child;