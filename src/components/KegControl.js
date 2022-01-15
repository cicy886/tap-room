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
    let addTicketButton = null;
    if (this.state.formVisibleOnpage){
      currentlyVisibleState = <NewKegForm/>
    } else {
      currentlyVisibleState = <KegList/>
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        {addTicketButton}
      </React.Fragment>
    )
  }
}

export default KegControl;