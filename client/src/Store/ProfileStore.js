import {makeAutoObservable} from "mobx";

class ProfileStore {

    barMode = "content"

    constructor() {
        makeAutoObservable(this)
    }

    changeBarMode(mode) {
        if (mode === "content")
            this.barMode = "content"
        if (mode === "settings")
            this.barMode = "settings"
    }
}

export default new ProfileStore();