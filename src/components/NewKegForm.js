import React from "react";
import {v4} from "uuid";

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
        name="alcohol content"
        placeholder="Alcohol Content Percentage"/>
        <button type="submit">Sell!</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;