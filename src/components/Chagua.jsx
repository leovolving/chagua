import React from 'react';
import Form from './Form.jsx';
import ItemList from './ItemList.jsx';
import Selection from './Selection.jsx';

export default class Chagua extends React.Component {
    state = {
        items: [],
        selection: null
    }

    onFormSubmit = e => {
        e.preventDefault();
        const input = document.getElementById('add-item');
        this.setState({
            items: [...this.state.items, {
                value: input.value,
                active: true
            }]
        });
        input.value = '';
    }

    onSelect = e => {
        e.preventDefault();
        const items = this.state.items.filter(i => i.active);
        const len = items.length;
        if (len) {
            const i = 0;
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
