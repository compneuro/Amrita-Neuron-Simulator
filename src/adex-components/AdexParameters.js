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


@inject('adexparam')
@observer
export default class NeuronParameter extends Component{

    handleChange = function (name,value) {
      this.props.adexparam.changeParam(name,value);
    };

    render(){
        const param = this.props.adexparam;
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
                            C
                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.C}
                                 onChange={(e)=> this.handleChange('C',e)}
                            />
                        </th>

                        <th>
                            gl


                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.gl}
                                 onChange={(e)=> this.handleChange('gl',e)}
                            />
                        </th>

                    </tr>

                    <tr>
                        <th>

                            el

                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.el}
                                 onChange={(e)=> this.handleChange('el',e)}
                            />
                        </th>
                        <th>

                            vt

                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.vt}
                                 onChange={(e)=> this.handleChange('vt',e)}
                            />
                        </th>
                    </tr>

                    <tr>
                        <th>

                            del

                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.del}
                                 onChange={(e)=> this.handleChange('del',e)}
                            />
                        </th>
                        <th>

                            tw

                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.tw}
                                 onChange={(e)=> this.handleChange('tw',e)}

                            />
                        </th>
                    </tr>
                    <tr>
                        <th>

                            a

                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.a}
                                 onChange={(e)=> this.handleChange('tw',e)}
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

                            vr

                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.vr}
                                 onChange={(e)=> this.handleChange('vr',e)}
                            />
                        </th>
                        <th>

                            simTime

                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.simTime}
                                 onChange={(e)=> this.handleChange('simTime',e)}
                            />
                        </th>
                    </tr>
                    <tr>
                        <th/>

                        <th>

                            I
                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                value={param.I}
                                 onChange={(e)=> this.handleChange('I',e)}
                            />
                        </th>

                    </tr>

                    </tbody>




                </Table>
            </Paper>
        )
    }


}