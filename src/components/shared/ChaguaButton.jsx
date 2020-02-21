import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class ChaguaButton extends React.Component {
  state = {
    selection: null
  }

  componentDidMount() {
    const {items} = this.props;
    const index = Math.floor((Math.random() * items.length));
        // TODO: API call is a PUT with just the itemId (id, with title above). 
        // The listId can be gotten from the itemId server-side.
        // items[index].lastUsedOn = new Date().toISOString();
    this.setState({selection: items[index]})
  }

  render() {
    const {selection} = this.state;
    return (
      <div className='selection-container'>
        <Link to={{pathname: '/chagua', selection}}>
          <Button type='submit' color='primary' variant='contained'>
            Choose
          </Button>
        </Link>
          
      </div>
    );
  }
}

export default ChaguaButton;
