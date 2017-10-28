/*Amrita Neuron Simulator

A Web based Neuron Simulator written in ReactJS, capable of simulating Hodgkin Huxley, AdEx. Izhikevich neuron models.

Last updated 10-September-2017
Developed by : Joshy Alphonse & Shyam Diwakar
Computational Neuroscience & Neurophysiology Lab, School of Biotechnology, Amrita University, India.
Email: joshya@am.amrita.edu; shyam@amrita.edu
www.amrita.edu/compneuro
*/



import React, {Component} from 'react';
import Appbar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import HodgkinHuxleyContainer from './hodgkin-huxley-components/HodgkinHuxleyContainer';
import AdexContainer from "./adex-components/AdexContainer";
import IzhikevichContainer from './izikevich-components/IzhikevichContainer';
import {Provider} from 'mobx-react';

import HHParam from "./store/hhstore";
import ADEXParam from './store/adexstore';
import IzhikevichParam from './store/izhikevichstore';


export default class Simulator extends Component{
    state = {
        value: 0,
    };


    handleNeuronChange = (event, value) => {
        this.setState({value})
    };
    render(){
        const {value} = this.state;
        return(
            <div>
                <Appbar  position="static" >
                    <Toolbar>
                        <Typography type="title" color="inherit">
                            <h4>Amrita Neuron Simulator</h4>
                        </Typography>
                        <div style={{width: 150}}/>
                        <Tabs
                            value={value}
                            onChange={this.handleNeuronChange}
                            indicatorColor="primary"
                        >
                            <Tab label="Hodgkin Huxley"/>
                            <Tab label="Adaptive Exponential Integrate And Fire"/>
                            <Tab label="Izhikevich"/>
                        </Tabs>
                    </Toolbar>


                </Appbar>



                {value === 0 &&
                    <Paper>
                        <Provider hhparam={HHParam}>
                            <HodgkinHuxleyContainer/>
                        </Provider>
                    </Paper>
                }
                {value === 1 &&
                <div>
                    <Provider adexparam={ADEXParam}>
                        <AdexContainer/>
                    </Provider>
                </div>
                }
                {value === 2 &&
                    <Provider izhikevichparam={IzhikevichParam}>
                        <IzhikevichContainer/>
                    </Provider>
                }



            </div>
        );
    }
}