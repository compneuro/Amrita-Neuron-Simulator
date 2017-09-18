/*Amrita Neuron Simulator

A Web based Neuron Simulator written in ReactJS, capable of simulating Hodgkin Huxley, AdEx. Izhikevich neuron models.

Last updated 10-September-2017
Developed by : Joshy Alphonse & Shyam Diwakar
Computational Neuroscience & Neurophysiology Lab, School of Biotechnology, Amrita University, India.
Email: joshya@am.amrita.edu; shyam@amrita.edu
www.amrita.edu/compneuro
*/
import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import HodgkinHuxleyCurrentClampStim1Config from './CurrentClampStim1Config';
import HodgkinHuxleyCurrentClampStim2Config from './CurrentClampStim2Config';
import Button from 'material-ui/Button';
import {inject, observer} from 'mobx-react';


@inject('hhparam')
@observer
class StimuliControl extends Component{




    handleChange = (stim_name,name,value) =>{
        console.log(this.state,stim_name,name,value);
        // eslint-disable-next-line
        this.state[stim_name][name] = value;
        this.render();
    };

    render(){
        return(
            <div>
                <Row>
                    <Col md={4}>
                        <HodgkinHuxleyCurrentClampStim1Config />
                    </Col>
                    <Col md={4}>
                        <HodgkinHuxleyCurrentClampStim2Config />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={4}>
                        <Button
                            raised
                            color="primary"
                            onClick={this.open}

                        >
                            Set Stim1
                        </Button>
                    </Col>
                    <Col md={4}>
                        <Button
                            raised
                            color="primary"
                            onClick={this.open}

                        >
                            Set Stim2
                        </Button>
                    </Col>
                </Row>

            </div>
        )
    }
}


export default StimuliControl;