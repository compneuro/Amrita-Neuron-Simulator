/*Amrita Neuron Simulator

A Web based Neuron Simulator written in ReactJS, capable of simulating Hodgkin Huxley, AdEx. Izhikevich neuron models.

Last updated 10-September-2017
Developed by : Joshy Alphonse & Shyam Diwakar
Computational Neuroscience & Neurophysiology Lab, School of Biotechnology, Amrita University, India.
Email: joshya@am.amrita.edu; shyam@amrita.edu
www.amrita.edu/compneuro
*/
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import CurrentClampStimuliControl from './CurrentClampStimuliControl';
import VoltageClampStimuliControl from './VoltageClampStimuliControl';


@inject('hhparam')
@observer
export default class Stimuli extends Component{
    render(){
        if(this.props.hhparam.mode === 'Current Clamp'){
            return(
                <CurrentClampStimuliControl/>
            )
        }else if(this.props.hhparam.mode === 'Voltage Clamp'){
            return(
                <VoltageClampStimuliControl/>
            )
        }
    }
}



