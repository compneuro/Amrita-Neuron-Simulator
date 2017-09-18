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


@inject('hhparam')
@observer
class MembraneControl extends Component{

    styles = theme => ({
        paper: {
            width: '100%',
            marginTop: theme.spacing.unit * 3,
            overflowX: 'auto',
        },
        tableCell:{
            width:'20',
        },
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            width: 200,
        },
    });

    handleChange = function (name,value) {
        this.props.hhparam.changeParam(name,value);
    };


    render(){
        const param = this.props.hhparam;
        console.log(param);
        return(

            <Paper className={this.styles.paper}>
                <Table responsive >
                    <thead>
                    <tr>
                        <th/>
                        <th>
                            C<sub>in</sub>(mM)
                        </th>
                        <th>
                            C<sub>out</sub>(mM)
                        </th>
                        <th>
                            E<sub>ion</sub>(mM)
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>
                            Na<sup>+</sup>
                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                name={"nai"}
                                min={-2000}
                                max={2000}
                                value={param.c_in_na}
                                onChange={(e)=> this.handleChange('c_in_na',e)}
                            />
                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                name={"nao"}
                                min={-2000}
                                max={2000}
                                value={param.c_out_na}
                                onChange={(e)=> this.handleChange('c_out_na',e)}
                            />

                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                precision={3}
                                name={"ena"}
                                min={-2000}
                                max={2000}
                                value={param.ena}
                                onChange={(e)=> this.handleChange('e_na',e)}
                            />
                        </th>
                    </tr>
                    <tr>
                        <th>K<sup>+</sup></th>
                        <th>
                            <NumericInput
                                size={2}
                                name={"ki"}
                                min={-2000}
                                max={2000}
                                value={param.c_in_k}
                                onChange={(e)=> this.handleChange('c_in_k',e)}
                            />
                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                name={"ko"}
                                min={-2000}
                                max={2000}
                                value={param.c_out_k}
                                onChange={(e)=> this.handleChange('c_out_k',e)}
                            />
                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                name={"ek"}
                                min={-2000}
                                max={2000}
                                value={param.ek}
                                onChange={(e)=> this.handleChange('e_k',e)}
                            />
                        </th>
                    </tr>

                    <tr>
                        <th>Cl<sup>-</sup></th>
                        <th>
                            <NumericInput
                                size={2}
                                min={-2000}
                                max={2000}
                                value={param.c_in_cl}
                                onChange={(e)=> this.handleChange('c_in_cl',e)}
                            />
                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                name={"clo"}
                                min={-2000}
                                max={2000}
                                value={param.c_out_cl}
                                onChange={(e)=> this.handleChange('c_out_cl',e)}
                            />
                        </th>
                        <th>
                            <NumericInput
                                size={2}
                                name={"ecl"}
                                min={-2000}
                                max={2000}
                                value={param.ecl}
                                onChange={(e)=> this.handleChange('e_cl',e)}
                            />
                        </th>
                    </tr>
                    <br/>

                    <tr>
                        <th/>
                        <th>T(<sup>o</sup>C)</th>
                        <th>
                            <NumericInput
                                size={2}
                                precision={4}
                                name={"T"}
                                min={-2000}
                                max={2000}
                                value={param.T}
                                onChange={(e)=> this.handleChange('T',e)}

                            />
                        </th>
                    </tr>

                    <tr>
                        <th/>
                        <th>R<sub>m</sub></th>
                        <th>
                            <NumericInput
                                size={2}
                                precision={4}
                                name={"Rm"}
                                min={-2000}
                                max={2000}
                                value={param.Rm}
                                onChange={(e)=> this.handleChange('Rm',e)}
                            />
                        </th>
                    </tr>
                    <tr>
                        <th/>
                        <th>C<sub>m</sub>(nF)</th>
                        <th>
                            <NumericInput
                                size={2}
                                precision={4}
                                name={"Cm"}
                                min={-2000}
                                max={2000}
                                value={param.Cm}
                                onChange={(e)=> this.handleChange('Cm',e)}
                            />
                        </th>
                    </tr>
                    <tr>
                        <th/>
                        <th>V<sub>r</sub>(mV)</th>
                        <th>
                            <NumericInput
                                size={2}
                                precision={4}
                                name={"Vr"}
                                min={-2000}
                                max={2000}
                                value={param.Vr}
                                onChange={(e)=> this.handleChange('Vr',e)}
                            />
                        </th>
                    </tr>
                    </tbody>
                </Table>
            </Paper>

        );
    }
}

export default MembraneControl;