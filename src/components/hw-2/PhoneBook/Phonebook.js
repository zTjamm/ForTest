import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import s from "./Phonebook.module.css"
import ContactForm from './ContactForm/ContactForm '
import Filter from "./Filter/Filter";
import ContactList from './ContactList/ContactList '

class Phonebook extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: ''
    }
    // place for function
    onSubmit = (data) => {
        const inputName = this.state.contacts.map(c => c.name.toLowerCase());
        const newId = this.state.contacts.length + 1;
        const newContact = {id: `id-${newId}`, name: data.name, number: data.number}
        if (inputName.includes(data.name.toLowerCase())) {
            alert(`${data.name} уже занято`)
        } else {
            this.setState({contacts: [...this.state.contacts, newContact]})
        }
    }
    onInputFilter = (e) => {
        const {value} = e.currentTarget;
        this.setState({
            filter: value,
        })
    }
    onFilter = () => {
        const {contacts, filter} = this.state;
        if (filter) {
            return contacts.filter(v => v.name.toLowerCase().includes(filter.toLowerCase()))
        } else {
            return contacts
        }
    }
    onDelForId = (curentId) => {
        const list = this.state.contacts.filter(({id}) => id !== curentId);
        this.setState({contacts: list});
    }
    //                  ------- Home work 3 -------
    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.contacts !== prevState.contacts) {
    //         localStorage.setItem("localContacts", JSON.stringify(this.state.contacts));
    //     }
    // }
    // componentDidMount() {
    //     const localContacts = localStorage.getItem("localContacts");
    //     const parsedContacts = JSON.parse(localContacts);
    //     if (parsedContacts) {
    //         this.setState({ contacts: parsedContacts });
    //     }
    // }
    render() {
        const filterContacts = this.onFilter();
        return (
            <div>
                <NavLink className={s.hw2Btn} to="/hw2/feedback">FeedBack</NavLink>
                <NavLink className={s.hw2Btn} to="/hw2/phonebook">Phonebook</NavLink>
                <div className={s.wrapper}>
                    <NavLink className={s.backBtn} to='/hw2'>Back</NavLink>
                    <h1>Phonebook</h1>
                    <ContactForm
                        state={this.state}
                        onInput={this.onInput}
                        onSubmit={this.onSubmit}
                    />
                    <h2>Contacts</h2>
                    <Filter
                        state={this.state}
                        onInputFilter={this.onInputFilter}/>
                    <ContactList
                        filterContacts={filterContacts}
                        onDelForId={this.onDelForId}
                        sate={this.state}
                    />
                </div>
            </div>
        );
    }
}

export default Phonebook;