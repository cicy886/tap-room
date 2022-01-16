import React from "react";
import {v4} from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Sell!"/>
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