import React from 'react';
import Form from './Form.jsx';

export default class Chagua extends React.Component {
    state = {
        items: []
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

    render () {
        return (
            <React.Fragment>
                <Form onSubmit={this.onFormSubmit} />
            </React.Fragment>
        );
    }
}
