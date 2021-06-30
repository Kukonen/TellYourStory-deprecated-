import {makeAutoObservable} from "mobx";

class UserState {

    name = ''
    isLogged = false

    constructor() {
        makeAutoObservable(this)
    }

}

export default new UserState();