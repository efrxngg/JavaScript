class User{
    #username = "";
    #password = "";

    constructor(username, password){
        this.#username = username;
        this.#password = password;
    }

    //#region SET AND GETTER
    
    set username(username){
        this.#username = username;
    }
    get username(){
        return this.#username;
    }

    set password(password){
        this.#password = password;
    }
    get password(){
        return this.#password;
    }

    //#endregion

    getData(){
        return `${this.username} | ${this.password}`;
    }
}

export{User};