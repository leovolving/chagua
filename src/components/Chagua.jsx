import React from 'react';
import Form from './Form.jsx';
import ItemList from './ItemList.jsx';
import Selection from './Selection.jsx';

class Chagua extends React.Component {
    state = {
        items: [],
        selection: null
    }

    onFormSubmit = e => {
        e.preventDefault();
        const input = document.getElementById('add-item');
        if (input.value) {
            this.setState({
                items: [...this.state.items, {
                    value: input.value,
                    active: true
                }]
            });
        }
        input.value = '';
    }

    onSelect = e => {
        e.preventDefault();
        const items = this.state.items.filter(i => i.active);
        const len = items.length;
        if (len) {
            const i = Math.floor((Math.random() * len));
            this.setState({
                selection: items[i].value
            });
        }
    }

    render () {
        return (
            <React.Fragment>
                <Form onSubmit={this.onFormSubmit} />
                <ItemList items={this.state.items} />
                <Selection onClick={this.onSelect} selection={this.state.selection} />
            </React.Fragment>
        );
    }
}

export default Chagua;
