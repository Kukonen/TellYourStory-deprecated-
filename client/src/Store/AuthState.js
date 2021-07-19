import {makeAutoObservable} from "mobx";

class AuthState {
    constructor() {
        makeAutoObservable(this)
    }
}

export default new AuthState();