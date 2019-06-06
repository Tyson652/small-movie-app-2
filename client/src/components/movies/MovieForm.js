import React from 'react';
import { Field, reduxForm } from 'redux-form';

class MovieForm extends React.Component {
  renderInput = ({input, label, meta}) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} type="text" label="Enter title" />
        <Field name="description" component={this.renderInput} type="text" label="Enter description" />
        <Field name="rating" component={this.renderInput} type="text" label="Enter rating" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'MovieForm'
})(MovieForm);