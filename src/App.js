import React, { Component } from 'react';
import Form from './components/Form';
import CV from './components/CV';
import './styles/app.css';

class App extends Component {
  constructor() {
    super();

    const defaultUser = {
      firstName: 'John',
      lastName: 'Doe',
      curRole: 'Software Developer',
      curAddress: 'San Antonio, Texas',
      email: 'samplemail@gmail.com',
      contactNum: '09912345678',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie dui tincidunt metus molestie fringilla. Curabitur at risus nisi. Morbi eu porta odio. Sed varius auctor augue, et elementum leo faucibus a. Fusce quis vulputate sem. Sed pharetra dolor ut diam maximus euismod.',
      educ: [
        {
          school: 'Hawkins High School',
          location: 'Hawkins, Indiana',
          fromYr: '2006',
          toYr: '2010',
        },
        {
          school: 'Harvard University',
          degree: 'Computer Science',
          location: 'Cambridge, MA',
          fromYr: '2010',
          toYr: '2014',
        },
      ],
      works: [
        {
          company: 'Sample Company',
          position: 'Junior Programmer',
          location: 'San Diego, California',
          fromYr: '2014',
          toYr: '2017',
        },
        {
          company: 'A Better Company',
          position: 'Web Developer',
          location: 'Los Angeles, California',
          fromYr: '2017',
          toYr: '2022',
        },
      ],
    };

    this.state = defaultUser;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="app">
        <Form handleChange={this.handleChange} addEduc={this.addEduc} />
        <CV userInfo={this.state} />
      </div>
    );
  }
}

export default App;
