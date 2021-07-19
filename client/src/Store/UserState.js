import {makeAutoObservable} from "mobx";

class UserState {
    name = null
    isLogged = "no"

    constructor() {
        makeAutoObservable(this)
    }
}

export default new UserState();