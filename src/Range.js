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
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Range = Slider.Range;







export default class RangeSliderComponent extends Component{

    state = {
        value:this.props.value
    };

    handleChange = function (name,value) {
        this.props.onChange(name,value);

    };

    render(){
        console.log(this.props.value);
        return(
            <div >
                <Range
                    defaultValue={this.props.value}
                    min={this.props.min}
                    max={this.props.max}
                    vertical={this.props.vertical}
                    onAfterChange={(e)=> this.handleChange(this.props.name,e)}

                />
                <div>
                    <NumericInput
                        size={2}
                        min={-2000}
                        max={2000}
                        value={this.props.value[0]}
                        onChange={(e)=> this.handleChange(this.props.name,e)}
                    />
                    <NumericInput
                        size={2}
                        min={-2000}
                        max={2000}
                        value={this.props.value[1]}
                        onChange={(e)=> this.handleChange(this.props.name,e)}
                    />
                </div>
            </div>
        )
    }
}