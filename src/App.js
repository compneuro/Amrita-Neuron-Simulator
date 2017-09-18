/*Amrita Neuron Simulator

A Web based Neuron Simulator written in ReactJS, capable of simulating Hodgkin Huxley, AdEx. Izhikevich neuron models.

Last updated 10-September-2017
Developed by : Joshy Alphonse & Shyam Diwakar
Computational Neuroscience & Neurophysiology Lab, School of Biotechnology, Amrita University, India.
Email: joshya@am.amrita.edu; shyam@amrita.edu
www.amrita.edu/compneuro
*/
import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import './App.css';

import Simulator from './Simulator';


class App extends Component {
  render() {
    return (
        <div>
            <Grid justify="center" container spacing={24}>
                <Grid item md={10}>
                    <Simulator />
                </Grid>
            </Grid>
        </div>
    );
  }
}

export default App;
