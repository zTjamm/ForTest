import React, {Component} from 'react';
// import state from "./state";

class PhonebookTest extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: "",
        name: '',
        number: '',

    }
    inputName=(e)=>{
        console.log(e.currentTarget.value);
        this.setState({name: e.target.value})
    }
    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <form>
                    <label>
                        Name
                        <input
                            onInput={this.inputName}
                            value={this.state.name}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                        <button type="submit">Add contact</button>
                    </label>
                </form>
            </div>
        );
    }
}

export default PhonebookTest;