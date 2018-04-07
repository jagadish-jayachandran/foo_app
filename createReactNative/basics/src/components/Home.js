
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
      homeLink: props.initialLinkName
    };
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }
  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    });
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
        <input type="text" value={this.state.homeLink}
          onChange={(event) => this.onHandleChange(event)} />
        <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary" >Change Header</button>
      </div>
    );
  }
}

