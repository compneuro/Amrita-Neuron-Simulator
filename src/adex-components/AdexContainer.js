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
import Paper from 'material-ui/Paper'
import {Col, Row} from 'react-bootstrap';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Collapse from 'rc-collapse';
import {FormControlLabel, FormGroup} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Dialog, {DialogTitle} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import {CSVLink} from 'react-csv';
import NeuronParameter from './AdexParameters'
import AdexGraph from './AdexGraph';
import AdexPresetModes from './AdexPresetModes';

const Panel = Collapse.Panel;

require('rc-collapse/assets/index.css');


@inject('adexparam')
@observer
export default class AdexContainer extends Component{

    state={
        open:false
    };

    handleCheck = (checked,param) => {
      this.props.adexparam.handleExportParams(checked,param)
    };

    handleChange = function (param,value) {
      this.props.adexparam.changeParam(param,value);
    };

    handleExportButtonClick = () => {
      this.setState({open:true});
    };

    handleRequestClose = () => {
      this.setState({open:false});
    };

    render(){
        console.log(this.props.adexparam.export_data);
        return(
            <Paper>
            <Row className="show-grid">
                <Col md={7}>
                    <div >
                        <AdexGraph data={this.props.adexparam.voltage}/>
                    </div>
                </Col>

                <Col md={5}>
                    <Toolbar>
                        <Button
                            color={"primary"}
                            onClick={this.props.adexparam.runSim}
                        >Start</Button>
                        <Button
                            onClick={this.props.adexparam.reset}
                            color={"primary"}
                        >Reset</Button>
                        <Button
                            color={"primary"}
                            onClick={this.handleExportButtonClick}
                        >Export</Button>

                        <Dialog
                            open={this.state.open}
                            onRequestClose={this.handleRequestClose}

                        >
                            <DialogTitle>Export Data</DialogTitle>

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.props.adexparam.checkVoltage}
                                        onChange={(event,checked)=> this.handleCheck(checked,'voltage')}
                                        value="Voltage"
                                    />
                                }
                                label="Voltage"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.props.adexparam.checkw}
                                        onChange={(event,checked)=> this.handleCheck(checked,'w')}
                                        value="voltage"
                                    />
                                }
                                label="w"
                            />

                            <TextField
                                required
                                id="required"
                                label="File Name"
                                defaultValue={this.props.adexparam.csv_file_name}
                                margin="normal"
                                onChange={(e)=> {console.log(e.target.value,'value');this.props.adexparam.changeParam('csv_file_name',e.target.value)}}
                            />


                            <CSVLink
                                headers={this.props.adexparam.export_params}
                                data={this.props.adexparam.export_data}
                                filename={this.props.adexparam.csv_file_name}

                            >
                                <Button>Download</Button>
                            </CSVLink>




                        </Dialog>






                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.props.adexparam.multi}
                                        onChange={(event,checked)=> this.handleChange('multi',checked)}
                                    />
                                }
                                label="Keep Previous Traces"
                            />
                        </FormGroup>

                    </Toolbar>

                    <Collapse accordion={true}>
                        <Panel header="Neuron Parameter" headerClass="my-header-class">
                            <NeuronParameter />
                        </Panel>
                        <Panel header="Preset Modes">
                            <AdexPresetModes />
                        </Panel>

                    </Collapse>
                </Col>
            </Row>
            </Paper>
        )
    }
}
