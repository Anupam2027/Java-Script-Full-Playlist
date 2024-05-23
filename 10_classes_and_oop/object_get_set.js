const user ={
    _email:"rgarhe@dbs",
    _password:"adwr",

    get email(){
        return this._email.toLocaleUpperCase()
    },

    set email(v){
        this._email=value
    }
}

const tea = Object.create(user)
console.log(tea.email);