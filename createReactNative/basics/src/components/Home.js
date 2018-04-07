
import React, { Component } from 'react'
import { PropTypes } from 'prop-types';

export default class Home extends Component {
  static propTypes = {
    user: PropTypes.object,
    greet: PropTypes.func,
    homeLink: PropTypes.String,
  }
  constructor(props) {
    super(props);
    this.state = {
      homeLink: "Changed Link"
    };
  }

  ocChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  render() {

    return (
      <div>
        <p> User Obj=> Name: {this.props.user.name}    </p>
        <div>
          <h4>Hobbies</h4>
          <ul>{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}</ul>
        </div>
        <button onClick={this.props.greet} className="btn btn-primary">Click</button>

        <button onClick={() => this.onChangeLink()} className="btn btn-primary" >Change Header</button>
      </div>
    );
  }
}

