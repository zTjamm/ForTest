import React, {Component} from 'react';
import s from "./ContactForm.module.css"

class ContactForm extends Component {
    state = {
        name: "",
        number: ""
    }
    onInput = (e) => {
        const {name, value} = e.currentTarget;
        this.setState({
            [name]: value
        })
    }
    onAdd=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({name: "", number: ""})
    }

    render() {
        return (
            <div>
                <form
                    className={s.form}
                    onSubmit={this.onAdd}>
                    <label>Name</label>
                    <input
                        onInput={this.onInput}
                        value={this.state.name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <label>Number</label>
                    <input
                        onInput={this.onInput}
                        value={this.state.number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    <button type="submit">Add contact</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;