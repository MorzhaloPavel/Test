import { makeAutoObservable} from "mobx"

type FormState = {
  inputFirstName: string,
  inputLastName: string,
  firstName: string,
  lastName: string,
  isOpen: boolean,
  isErrorFN: boolean,
  isErrorLN: boolean,
};

class StoreList {
   store: FormState = {
    inputFirstName: "",
    inputLastName: "",
    firstName: "",
    lastName: "",
    isOpen: false,
    isErrorFN: false,
    isErrorLN: false,
  }

  constructor() {
    makeAutoObservable(this)
  }
  
  changeInputFN (value: string) {
    this.store.inputFirstName = value
    console.log(value);
    
  }

  changeInputLN (value: string) {
    this.store.inputLastName = value
  }

  openAlert() {
    this.store.inputFirstName = "",
    this.store.inputLastName = "",
    this.store.firstName = this.store.inputFirstName,
    this.store.lastName = this.store.inputLastName,
    this.store.isOpen = true,
    this.store.isErrorFN = false,
    this.store.isErrorLN = false
  }

  checkFNLN() {
    this.store.isErrorFN = true,
    this.store.isErrorLN = true
  }
  checkFN() {
    this.store.isErrorFN = true,
    this.store.isErrorLN = false
  }
  checkLN() {
    this.store.isErrorFN = false,
    this.store.isErrorLN = true
  }

  closeAlert () {
    this.store.isOpen = false
  }
}

export default new StoreList