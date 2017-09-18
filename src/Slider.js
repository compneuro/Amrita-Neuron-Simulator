/*Amrita Neuron Simulator

A Web based Neuron Simulator written in ReactJS, capable of simulating Hodgkin Huxley, AdEx. Izhikevich neuron models.

Last updated 10-September-2017
Developed by : Joshy Alphonse & Shyam Diwakar
Computational Neuroscience & Neurophysiology Lab, School of Biotechnology, Amrita University, India.
Email: joshya@am.amrita.edu; shyam@amrita.edu
www.amrita.edu/compneuro
*/

import React, {Component} from 'react';
import NumericInput from 'react-numeric-input';
import Slider from 'rc-slider/lib/Slider';


import 'rc-slider/assets/index.css';


export default class SliderComponent extends Component{





    handleChange = function (name,value) {
        this.props.onChange(name,value);
    };


    render(){
        return(
                <div style={{height: this.props.height}}>
                    <Slider

                        defaultValue={this.props.value}
                        onAfterChange={(e)=> this.handleChange(this.props.name,e)}
                        vertical={this.props.vertical}

                    />
                    <div>
                        <NumericInput
                            size={2}
                            min={-2000}
                            max={2000}
                            value={this.props.value}
                            onChange={(e)=> this.handleChange(this.props.name,e)}
                        />
                    </div>
                </div>



        )
    }
}
