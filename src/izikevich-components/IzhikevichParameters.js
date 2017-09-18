/*Amrita Neuron Simulator

A Web based Neuron Simulator written in ReactJS, capable of simulating Hodgkin Huxley, AdEx. Izhikevich neuron models.

Last updated 10-September-2017
Developed by : Joshy Alphonse & Shyam Diwakar
Computational Neuroscience & Neurophysiology Lab, School of Biotechnology, Amrita University, India.
Email: joshya@am.amrita.edu; shyam@amrita.edu
www.amrita.edu/compneuro
*/
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Table} from 'react-bootstrap';
import NumericInput from 'react-numeric-input';
import {inject, observer} from 'mobx-react';


@inject('izhikevichparam')
@observer
export default class NeuronParameter extends Component{

    handleChange = function (name,value) {
        this.props.izhikevichparam.changeParam(name,value);
    };

    render(){
        const param = this.props.izhikevichparam;
        return(
            <Paper>
                <Table>
                    <thead>
                    <tr>
                        <th>
                            Parameter
                        </th>
                        <th>
                            Value
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <th>
                            a
                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.a}
                                onChange={(e)=> this.handleChange('a',e)}
                            />
                        </th>

                        <th>
                            b


                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.b}
                                onChange={(e)=> this.handleChange('b',e)}
                            />
                        </th>

                    </tr>

                    <tr>
                        <th>

                            c

                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.c}
                                onChange={(e)=> this.handleChange('c',e)}
                            />
                        </th>
                        <th>

                            d

                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.d}
                                onChange={(e)=> this.handleChange('d',e)}
                            />
                        </th>
                    </tr>

                    <tr>
                        <th>

                            v

                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.v}
                                onChange={(e)=> this.handleChange('v',e)}
                            />
                        </th>
                        <th>

                            u

                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.u}
                                onChange={(e)=> this.handleChange('u',e)}

                            />
                        </th>
                    </tr>
                    <tr>
                        <th>

                            I

                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.input}
                                onChange={(e)=> this.handleChange('input',e)}
                            />
                        </th>
                        <th>

                            SimTime

                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.simTime}
                                onChange={(e)=> this.handleChange('simTime',e)}
                            />
                        </th>
                    </tr>



                    </tbody>




                </Table>
            </Paper>
        )
    }


}