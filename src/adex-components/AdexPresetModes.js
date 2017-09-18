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
import Button from 'material-ui/Button'
import {Col, Row} from 'react-bootstrap';
import Table from 'material-ui/Table';


@inject('adexparam')
@observer
export default class AdexPresetModes extends Component{

    handleClick = function (name) {
        this.props.adexparam.setMode(name)
    };


    render(){
        return(
            <div>
                <Row>
                    <Col >
                        <Table>
                            <tr>
                                <th>
                                    <Button
                                        dense={false}
                                        color={'primary'}
                                        raised
                                        name='fs'
                                        onClick={()=>this.handleClick('fs')}

                                    >
                                        Fast Spiking
                                    </Button>
                                </th>
                                <th/>
                                <th>
                                    <Button
                                        dense={false}
                                        color={'primary'}
                                        raised
                                        onClick={()=>this.handleClick('rs')}

                                    >
                                        Regular Spiking
                                    </Button>
                                </th>
                            </tr>
                        </Table>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col >
                        <Table>
                            <tr>
                                <th>
                                    <Button
                                        dense={false}
                                        color={'primary'}
                                        raised
                                        onClick={()=>this.handleClick('tc')}

                                    >
                                        Thalamo Cortical
                                    </Button>
                                </th>
                                <th/>
                                <th>
                                    <Button
                                        dense={false}
                                        color={'primary'}
                                        raised
                                        onClick={()=>this.handleClick('ib')}

                                    >
                                        Instrinsically Bursting
                                    </Button>
                                </th>
                            </tr>
                        </Table>
                    </Col>
                </Row>

                <br/>
                <Row>
                    <Col >
                        <Table>
                            <tr>
                                <th>
                                    <Button
                                        dense={false}
                                        color={'primary'}
                                        raised
                                        onClick={()=>this.handleClick('rz')}

                                    >
                                        Rezonator
                                    </Button>
                                </th>
                                <th/>
                                <th>
                                    <Button
                                        dense={false}
                                        color={'primary'}
                                        raised
                                        onClick={()=>this.handleClick('ch')}
                                    >
                                        Chattering
                                    </Button>
                                </th>
                            </tr>
                        </Table>
                    </Col>
                </Row>
            </div>
        )
    }


}