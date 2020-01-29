import React, {Fragment} from 'react';
import ChaguaList from '../../shared/ChaguaList';
import Typography from '@material-ui/core/Typography';

const mockList = {
    name: 'Test List',
    items: [
        {
            id: '11',
            lastSelected: null,
            title: 'Toronto',
            enabled: true,
            editing: false
        },
        {
            id: '12',
            lastSelected: '2020-01-29T00:07:11.687Z',
            title: 'Seattle',
            enabled: false,
            editing: false
        },
        {
            id: '13',
            lastSelected: '2020-01-09T07:07:11.687Z',
            title: 'Houston',
            enabled: true,
            editing: false
        },
        {
            id: '14',
            lastSelected: null,
            title: 'Chicago',
            enabled: false,
            editing: false
        },
        {
            id: '15',
            lastSelected: '2020-01-09T07:07:11.687Z',
            title: 'Miami',
            enabled: true,
            editing: false
        },
        {
            id: '16',
            lastSelected: '2020-01-29T00:07:11.687Z',
            title: 'Philadelphia',
            enabled: false,
            editing: false
        },
        {
            id: '17',
            lastSelected: null,
            title: 'Denver',
            enabled: true,
            editing: false
        },
        {
            id: '18',
            lastSelected: null,
            title: 'Oakland',
            enabled: false,
            editing: false
        }
    ]
}

class ListPage extends React.Component {
    state = {
        items: mockList.items
    }

    onChangeTitle = (index, value) => {
        const [...items] = this.state.items;
        items[index].title = value;
        this.setState({items});
        this.onEdit(index);
    }

    onDelete = index => {
        const [...items] = this.state.items;
        items.splice(index, 1);
        this.setState({items});
    }

    onEdit = index => {
        const [...items] = this.state.items;
        items[index].editing = !items[index].editing;
        this.setState({items});
    }

    onToggle = index => {
        const [...items] = this.state.items;
        items[index].enabled = !items[index].enabled;
        this.setState({items});
    }

    render(){
        const {items} = this.state;
        const actions = {
            onChangeTitleCallback: this.onChangeTitle,
            onDeleteCallback: this.onDelete,
            onEditCallback: this.onEdit,
            onToggleCallback: this.onToggle
        }
        return (
            <Fragment>
                <header>
                    <Typography variant='h2'>{mockList.name}</Typography>
                </header>
                <section>
                    <ChaguaList actions={actions} items={items} />
                </section>
            </Fragment>
        );
    }
}

export default ListPage;
