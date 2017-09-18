/*Amrita Neuron Simulator

A Web based Neuron Simulator written in ReactJS, capable of simulating Hodgkin Huxley, AdEx. Izhikevich neuron models.

Last updated 10-September-2017
Developed by : Joshy Alphonse & Shyam Diwakar
Computational Neuroscience & Neurophysiology Lab, School of Biotechnology, Amrita University, India.
Email: joshya@am.amrita.edu; shyam@amrita.edu
www.amrita.edu/compneuro
*/
import React, {Component} from 'react';
import DropDownMenu from '../DropDownMenu';
import {inject, observer} from 'mobx-react';


@inject('hhparam')
@observer
class SimulationControl extends Component{

    render(){
        return (
            <DropDownMenu handleChange={this.props.hhparam.changeParam} selected={this.props.hhparam.mode} id="clamp-mode-menu" primary="Clamp Mode" options={["Current Clamp", "Voltage Clamp"]} />
        );
    }
}

export default SimulationControl;