/*Amrita Neuron Simulator

A Web based Neuron Simulator written in ReactJS, capable of simulating Hodgkin Huxley, AdEx. Izhikevich neuron models.

Last updated 10-September-2017
Developed by : Joshy Alphonse & Shyam Diwakar
Computational Neuroscience & Neurophysiology Lab, School of Biotechnology, Amrita University, India.
Email: joshya@am.amrita.edu; shyam@amrita.edu
www.amrita.edu/compneuro
*/

import React, {Component} from 'react';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Menu, {MenuItem} from 'material-ui/Menu';


export default class DropDownMenu extends Component{


    options = this.props.options;

    state = {
        anchorEl: undefined,
        open: false,
        selectedIndex: this.props.selected,
    };

    button = undefined;

    handleClickListItem = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleMenuItemClick = (event, index) => {
        this.setState({ selectedIndex: index, open: false });
        console.log(this.props.options[index]);
        this.props.handleChange('mode',this.props.options[index])
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render(){

        return (

            <div>
                <List>
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        onClick={this.handleClickListItem}
                    >
                        <ListItemText
                            primary={this.props.primary}
                            secondary={this.props.selected}
                        />
                    </ListItem>
                </List>
                <Menu
                    id={this.props.id}
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onRequestClose={this.handleRequestClose}
                >
                    {this.options.map((option, index) =>
                        <MenuItem
                            key={option}
                            selected={index === this.state.selectedIndex}
                            onClick={event => this.handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>,
                    )}
                </Menu>
            </div>

        );
    }
}