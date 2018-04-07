
import React, { Component } from 'react'
import { PropTypes } from 'prop-types';

export default class Home extends Component {
  static propTypes = {
    user: PropTypes.object,
    greet:PropTypes.func,
  }
  render() {
   
    return (
      <div>
        <p> User Obj=> Name: {this.props.user.name}    </p>
          <div>
            <h4>Hobbies</h4>
            <ul>{this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li> )}</ul>
            </div>
            <button onClick={this.props.greet} className="btn btn-primary">Click</button>
      </div>
    );
  }
}

