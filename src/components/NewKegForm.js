import React from "react";
import {v4} from "uuid";
import PropTypes from "prop-types";

function NewKegForm(props){
  return (
    <React.Fragment>
      <form onSubmit="handleNewKegFormSubmission}">
        <input
        type="text"
        name="name"
        placeholder="Name"/>
        <input
        type="text"
        name="brand"
        placeholder="Brand"/>
        <input
        type="number"
        name="price"
        placeholder="Price"/>
        <input
        type="number"
        name="alcoholContent"
        placeholder="Alcohol Content Percentage"/>
        <button type="submit">Sell!</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes={
  onNewkegCreation:PropTypes.func
}

export default NewKegForm;