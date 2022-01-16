import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";

class KegControl extends React.Compoent {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList:[],
      selectedKeg: null
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewKegToList=(newKeg)=>{
    const newMainKegList=this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList:newMainKegList, formVisibleOnPage:false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg !=null){
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg}/>
      buttonText = "Return to Keg List"
    } else if (this.state.formVisibleOnpage){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList}/>;
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