import React, { Component } from 'react';
import Form from './components/Form';
import CV from './components/CV';
import defaultUser from './defaultUser';
import Uniqid from 'uniqid';
import './styles/app.css';

class App extends Component {
  constructor() {
    super();

    this.state = defaultUser;

    this.handleChange = this.handleChange.bind(this);
    this.addInput = this.addInput.bind(this);
    this.imageHandler = this.imageHandler.bind(this);
    this.removeInput = this.removeInput.bind(this);
    this.resetFields = this.resetFields.bind(this);
  }

  handleChange = (e) => {
    const parent = e.target.parentNode.parentNode;
    switch (parent.name) {
      case 'educs':
        // to change educs state, create a new array using map
        // see if the current educ object has the same id as the parent component
        // if true, change the value of the property within that object
        // according to what's written in its corresponding input
        // if not, retain the whole educ object
        this.setState((prevState) => ({
          educs: prevState.educs.map((educ) =>
            educ.id === parent.id
              ? { ...educ, [e.target.name]: e.target.value }
              : educ
          ),
        }));
        break;
      case 'works':
        this.setState((prevState) => ({
          works: prevState.works.map((work) =>
            work.id === parent.id
              ? { ...work, [e.target.name]: e.target.value }
              : work
          ),
        }));
        break;
      default:
        this.setState({
          [e.target.name]: e.target.value,
        });
        break;
    }
  };

  addInput = async (e) => {
    switch (e.target.name) {
      case 'educs':
        const newEduc = {
          id: Uniqid(),
          school: '',
          degree: '',
          location: '',
          from: '',
          to: '',
        };
        if (this.state.count.educs === 0) {
          this.setState((prevState) => ({
            educs: [].concat(newEduc),
            count: {
              ...prevState.count,
              educs: this.state.count.educs + 1,
            },
          }));
          break;
        }
        this.setState((prevState) => ({
          educs: this.state.educs.concat(newEduc),
          count: {
            ...prevState.count,
            educs: this.state.count.educs + 1,
          },
        }));
        break;
      case 'works':
        const newWork = {
          id: Uniqid(),
          company: '',
          position: '',
          location: '',
          from: '',
          to: '',
        };
        if (this.state.count.works === 0) {
          this.setState((prevState) => ({
            works: [].concat(newWork),
            count: {
              ...prevState.count,
              works: this.state.count.works + 1,
            },
          }));
          break;
        }
        this.setState((prevState) => ({
          works: this.state.works.concat(newWork),
          count: {
            ...prevState.count,
            works: this.state.count.works + 1,
          },
        }));
        break;
      default:
        break;
    }
  };

  removeInput = async (e) => {
    const parent = e.target.parentNode;
    switch (parent.name) {
      case 'educs':
        this.setState({
          educs: this.state.educs.filter((educ) => educ.id !== parent.id),
        });
        break;
      case 'works':
        this.setState({
          works: this.state.works.filter((work) => work.id !== parent.id),
        });
        break;
      default:
        break;
    }
  };

  resetFields = () => {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      input.value = '';
    });
    this.setState(defaultUser);
  };

  imageHandler = (e) => {
    this.setState({
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  render() {
    return (
      <div className="app">
        <main>
          <Form
            addInput={this.addInput}
            handleChange={this.handleChange}
            removeInput={this.removeInput}
            addEduc={this.addEduc}
            educs={this.state.educs}
            works={this.state.works}
            imageHandler={this.imageHandler}
            resetFields={this.resetFields}
          />
          <CV userInfo={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
