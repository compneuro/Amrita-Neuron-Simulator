/*Amrita Neuron Simulator

A Web based Neuron Simulator written in ReactJS, capable of simulating Hodgkin Huxley, AdEx. Izhikevich neuron models.

Last updated 10-September-2017
Developed by : Joshy Alphonse & Shyam Diwakar
Computational Neuroscience & Neurophysiology Lab, School of Biotechnology, Amrita University, India.
Email: joshya@am.amrita.edu; shyam@amrita.edu
www.amrita.edu/compneuro
*/
import React, {Component} from 'react';
import SliderComponent from '../Slider';
import {inject, observer} from 'mobx-react';

@inject('hhparam')
@observer
class DrugControl extends Component{


    render(){
        const param = this.props.hhparam;
        return(
            <div>
                <label>TTX(Tetrodoxtoxin) inhibits Na<sup>+</sup></label>
                <SliderComponent name="ttx" value={param.ttx}  onChange={param.setStimuli} vertial={false}/>
                <label>TEA(Tetraethyammonium) inhibits K<sup>+</sup></label>
                <SliderComponent name="tea" value={param.tea}  onChange={param.setStimuli} vertial={false}/>
            </div>
        )
    }
}


export default DrugControl;