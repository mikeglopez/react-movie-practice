import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitHandler(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div
          style={{
            border: '1px solid #CCCCCC',
            borderRadius: 3,
            display: 'inline-block'
          }}
        >
          <div style={styles.input}>
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
              placeholder={this.props.placeholder}
              style={{ border: 'none' }}
            />
          </div>
          <div style={styles.button}>
            <input
              type='submit'
              value={this.props.submitText || 'Submit'}
              style={{ border: 'none', backgroundColor: 'transparent' }}
            />
          </div>
        </div>
      </form>
    );
  }
}

const styles = {
  input: {
    padding: 10,
    display: 'inline-block'
  },
  button: {
    padding: 10,
    display: 'inline-block',
    borderLeft: '1px solid #CCCCCC'
  }
};

export default TextInput;
