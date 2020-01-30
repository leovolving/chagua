import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import ChaguaList from '../../shared/ChaguaList';
import Selection from '../../shared/Selection';

const mockList = {
    id: '10',
    createdBy: '123456',
    lastUsedBy: '123456',
    updatedBy: '123456',
    createdOn: '2019-01-29T00:07:11.687Z',
    lastUsedOn: '2019-01-29T00:07:11.687Z',
    updatedOn: '2019-01-29T00:07:11.687Z',
    name: 'Test List',
    items: [
        {
            id: '11',
            title: 'Toronto',
            enabled: true,
            editing: false,
            createdBy: '123456',
            lastUsedBy: null,
            updatedBy: null,
            createdOn: '2019-01-29T00:07:11.687Z',
            lastUsedOn: null,
            updatedOn: null,
            listId: '10'
        },
        {
            id: '12',
            title: 'Seattle',
            enabled: false,
            editing: false,
            createdBy: '123456',
            lastUsedBy: '123456',
            updatedBy: null,
            createdOn: '2019-01-29T00:07:11.687Z',
            lastUsedOn: '2019-01-29T00:07:11.687Z',
            updatedOn: null,
            listId: '10'
        },
        {
            id: '13',
            title: 'Houston',
            enabled: true,
            editing: false,
            createdBy: '123456',
            lastUsedBy: '123456',
            updatedBy: '123456',
            createdOn: '2019-01-29T00:07:11.687Z',
            lastUsedOn: '2019-01-29T00:07:11.687Z',
            updatedOn: '2019-01-29T00:07:11.687Z',
            listId: '10'
        },
        {
            id: '14',
            title: 'Chicago',
            enabled: false,
            editing: false,
            createdBy: '123456',
            lastUsedBy: '123456',
            updatedBy: '123456',
            createdOn: '2019-01-29T00:07:11.687Z',
            lastUsedOn: '2019-01-29T00:07:11.687Z',
            updatedOn: '2019-01-29T00:07:11.687Z',
            listId: '10'
        },
        {
            id: '15',
            title: 'Miami',
            enabled: true,
            editing: false,
            createdBy: '123456',
            lastUsedBy: '123456',
            updatedBy: '123456',
            createdOn: '2019-01-29T00:07:11.687Z',
            lastUsedOn: '2019-01-29T00:07:11.687Z',
            updatedOn: '2019-01-29T00:07:11.687Z',
            listId: '10'
        },
        {
            id: '16',
            title: 'Philadelphia',
            enabled: false,
            editing: false,
            createdBy: '123456',
            lastUsedBy: '123456',
            updatedBy: '123456',
            createdOn: '2019-01-29T00:07:11.687Z',
            lastUsedOn: '2019-01-29T00:07:11.687Z',
            updatedOn: '2019-01-29T00:07:11.687Z',
            listId: '10'
        },
        {
            id: '17',
            title: 'Denver',
            enabled: true,
            editing: false,
            createdBy: '123456',
            lastUsedBy: null,
            updatedBy: '123456',
            createdOn: '2019-01-29T00:07:11.687Z',
            lastUsedOn: null,
            updatedOn: '2019-01-29T00:07:11.687Z',
            listId: '10'
        },
        {
            id: '18',
            title: 'Oakland',
            enabled: false,
            editing: false,
            createdBy: '123456',
            lastUsedBy: '123456',
            updatedBy: '123456',
            createdOn: '2019-01-29T00:07:11.687Z',
            lastUsedOn: '2019-01-29T00:07:11.687Z',
            updatedOn: '2019-01-29T00:07:11.687Z',
            listId: '10'
        }
    ]
}

class ListPage extends React.Component {
    state = {
        items: mockList.items,
        selection: null
    }

    onChangeTitle = (index, value) => {
        const [...items] = this.state.items;
        items[index].title = value;
        this.setState({items});
        this.onEdit(index);
        // TODO: API call is a PUT with just the itemId. The listId can be gotten from the itemId server-side.
        // const itemId = items[index].id;
    }

    onChoose = () => {
        const [...items] = this.state.items;
        const activeItemsCount = items
            .filter(i => i.enabled)
            .map(() => null) // TO-VERIFY: save memory, remove contents of array for count
            .length;

        const index = Math.floor((Math.random() * activeItemsCount));
        const {title} = items[index];
        items[index].lastUsedOn = new Date().toISOString();
        this.setState({items, selection: title});
        // TODO: API call is a PUT with just the itemId (id, with title above). The listId can be gotten from the itemId server-side.
    }

    onDelete = index => {
        const [...items] = this.state.items;
        items.splice(index, 1);
        this.setState({items});
        // TODO: API call is a DELETE with just the itemId (item = return value of splice). The listId can be gotten from the itemId server-side.
        // const itemId = item.id;
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
        // TODO: API call is a PUT with just the itemId. The listId can be gotten from the itemId server-side.
        // const itemId = items[index].id;
    }

    render() {
        const {items, selection} = this.state;
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

                <section>
                    <Selection onClick={this.onChoose} selection={selection} />
                </section>
            </Fragment>
        );
    }
}

export default ListPage;
