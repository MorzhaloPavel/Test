import React, { Component } from "react";
import { observer } from 'mobx-react'
import "./App.scss";
import Input from "./components/input/input";
import Button from "./components/button/button";
import Alert from "./components/alert/alert";
import StoreList from './store'


@observer class App extends Component<{}, {}> {
  

  handleInputFirstName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {target: {value: inputFirstName}} = e
    StoreList.changeInputFN(inputFirstName)
  }

  handleInputLastName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {target: {value: inputLastName}} = e
    StoreList.changeInputFN(inputLastName)
  }

  openAlert = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    const { inputFirstName, inputLastName } = StoreList.store;

    if (!inputLastName.length && !inputFirstName.length) {
      return StoreList.checkFNLN()
    }
    if (!inputFirstName.length) {
      return StoreList.checkFN()
    }
    if (!inputLastName.length) {
      return StoreList.checkLN()
    }

    StoreList.openAlert()
  };

  closeAlert = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    StoreList.closeAlert()
  };

  render() {
    const {
      inputFirstName,
      inputLastName,
      firstName,
      lastName,
      isOpen,
      isErrorFN,
      isErrorLN,
    } = StoreList.store;

    return (
      <div className="App">
        <Input
          title="Имя*"
          onChange={this.handleInputFirstName}
          value={inputFirstName}
          isError={isErrorFN}
        />
        <Input
          title="Фамилия*"
          onChange={this.handleInputLastName}
          value={inputLastName}
          isError={isErrorLN}
        />
        <Button onClick={this.openAlert} title='Готово' />
        <Alert onClose={this.closeAlert} firstName={firstName} lastName={lastName} isOpen={isOpen} />
      </div>
    );
  }
}



export default App;
