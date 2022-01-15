import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";

class KegControl extends React.Compoent {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnpage){
      currentlyVisibleState = <NewKegForm/>;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList/>;
      buttonText = "Add Keg";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClic}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default KegControl;