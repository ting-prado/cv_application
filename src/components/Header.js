import { Component } from 'react';
import '../styles/app.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <button onClick={this.props.resetFields}>Reset Fields</button>
        <button>Save as pdf</button>
      </div>
    );
  }
}

export default Header;
