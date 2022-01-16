import React from "react";
import {v4} from "uuid";
import PropTypes from "prop-types";

function NewKegForm(props){
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
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
  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewkegCreation({name:event.target.name.value, brand:event.target.brand.value, price:event.target.price.value, alcoholContent:event.target.alcoholContent.value, id:v4()});
  }
}

NewKegForm.propTypes={
  onNewkegCreation:PropTypes.func
}

export default NewKegForm;