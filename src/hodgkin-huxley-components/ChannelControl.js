/*Amrita Neuron Simulator

A Web based Neuron Simulator written in ReactJS, capable of simulating Hodgkin Huxley, AdEx. Izhikevich neuron models.

Last updated 10-September-2017
Developed by : Joshy Alphonse & Shyam Diwakar
Computational Neuroscience & Neurophysiology Lab, School of Biotechnology, Amrita University, India.
Email: joshya@am.amrita.edu; shyam@amrita.edu
www.amrita.edu/compneuro
*/
import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import Grid from 'material-ui/Grid';
import HodgkinHuxleyChannelDetails from './ChannelDetails';

import NumericInput from 'react-numeric-input';
import {inject, observer} from 'mobx-react';


@inject('hhparam')
@observer
class ChannelControl extends Component{

    styles = theme => ({
        root: {
            backgroundColor: theme.palette.background.paper,
        },
        appbar:{

        }
    });

    handleChange = function (name,value) {
        this.props.hhparam.changeParam(name,value);
    };
    render(){
        const param = this.props.hhparam;

        return(
            <div className={this.styles.root}>
                <Grid>

                    <Table responsive>
                        <tbody>
                        <tr>
                            <th>passive g<sub>Na</sub>(uS)</th>
                            <th>
                                <NumericInput
                                    size={2}
                                    name={"g_na"}
                                    precision={5}
                                    min={-2000}
                                    max={2000}
                                    value={param.g_na}
                                    onChange={(e)=> this.handleChange('g_na',e)}
                                />
                            </th>
                        </tr>

                        <tr>
                            <th>passive g<sub>K</sub>(uS)</th>
                            <th>
                                <NumericInput
                                    size={2}
                                    name={"g_k"}
                                    precision={5}
                                    min={-2000}
                                    max={2000}
                                    value={param.g_k}
                                    onChange={(e)=> this.handleChange('g_k',e)}
                                />
                            </th>
                        </tr>

                        <tr>
                            <th>passive g<sub>Cl</sub>(uS)</th>
                            <th>
                                <NumericInput
                                    size={2}
                                    name={"g_cl"}
                                    precision={5}
                                    min={-2000}
                                    max={2000}
                                    value={param.g_cl}
                                    onChange={(e)=> this.handleChange('g_cl',e)}
                                />
                            </th>
                        </tr>

                        </tbody>
                    </Table>

                    <HodgkinHuxleyChannelDetails/>


                </Grid>

            </div>
        )
    }
}

export default ChannelControl;