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
import {Col, Row} from 'react-bootstrap';
import {HodgkinHuxleyChannelGraph, HodgkinHuxleyVoltageGraph} from './HodgkinHuxleyGraph';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import {CSVLink} from 'react-csv';
import Collapse from 'rc-collapse';
import {FormControlLabel, FormGroup} from 'material-ui/Form';
import Dialog, {DialogTitle} from 'material-ui/Dialog';
import Checkbox from 'material-ui/Checkbox'
import SimulationControl from './SimulationControl';
import ChannelControl from './ChannelControl';
import MembraneControl from './MembraneControl';
import DrugControl from './DrugControl';
import Stimuli from './Stimuli';

const Panel = Collapse.Panel;

require('rc-collapse/assets/index.css');


@inject('hhparam')
@observer
class HodgkinHuxleyContainer extends Component{


    state={
        open:false
    };

    handleCheck = (checked,param) => {
        this.props.hhparam.handleExportParams(checked,param)
    };


    handleChange = function (name,value) {
        console.log(name,value);
        console.log(this.props.hhparam);
        this.props.hhparam.changeParam(name,value);
    };


    handleExportButtonClick = () => {
        this.setState({open:true});
    };

    handleRequestClose = () => {
        this.setState({open:false});
    };





    render(){
        const param = this.props.hhparam;
        console.log(param);
        return(
            <Row className="show-grid">
                <Col md={7}>
                    <div >
                        <HodgkinHuxleyVoltageGraph data={param.v_data}/>
                        <HodgkinHuxleyChannelGraph data={[param.m_data,param.n_data,param.h_data]}/>

                    </div>
                </Col>

                <Col md={5}>
                    <Toolbar>
                        <Button
                            color={"primary"}
                            onClick={param.runHodgkinHuxley}
                        >Start</Button>
                        <Button
                            onClick={param.reset}
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

                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.props.hhparam.checktime_data}
                                            onChange={
                                                (event,checked) => {
                                                    this.handleCheck(checked,'time_data');
                                                    this.props.hhparam.changeParam('checktime_data',checked)
                                                }
                                            }
                                            value="Time"
                                        />
                                    }
                                    label="Time"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.props.hhparam.checkv_data}
                                            onChange={
                                                (event,checked) => {
                                                    this.handleCheck(checked,'v_data');
                                                    this.props.hhparam.changeParam('checkv_data',checked)
                                                }
                                            }
                                            value="Voltage"
                                        />
                                    }
                                    label="Voltage"
                                />

                            </FormGroup>

                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.props.hhparam.checkm_data}
                                            onChange={
                                                (event,checked) => {
                                                    this.handleCheck(checked,'m_data');
                                                    this.props.hhparam.changeParam('checkm_data',checked)
                                                }
                                            }
                                            value="Voltage"
                                        />
                                    }
                                    label="m"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.props.hhparam.checkn_data}
                                            onChange={
                                                (event,checked) => {
                                                    this.handleCheck(checked,'n_data');
                                                    this.props.hhparam.changeParam('checkn_data',checked)
                                                }
                                            }
                                            value="Voltage"
                                        />
                                    }
                                    label="n"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.props.hhparam.checkh_data}
                                            onChange={
                                                (event,checked) => {
                                                    this.handleCheck(checked,'h_data');
                                                    this.props.hhparam.changeParam('checkh_data',checked)
                                                }
                                            }
                                            value="h"
                                        />
                                    }
                                    label="h"
                                />
                            </FormGroup>

                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.props.hhparam.checkina_data}
                                            onChange={
                                                (event,checked) => {
                                                    this.handleCheck(checked,'ina_data');
                                                    this.props.hhparam.changeParam('checkina_data',checked)
                                                }
                                            }
                                            value="INa"
                                        />
                                    }
                                    label="INa"
                                />
                                <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.props.hhparam.checkik_data}
                                        onChange={
                                            (event,checked) => {
                                                this.handleCheck(checked,'ik_data');
                                                this.props.hhparam.changeParam('checkik_data',checked)
                                            }
                                        }
                                        value="IK"
                                    />
                                }
                                label="IK"
                            />


                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.props.hhparam.checkileak_data}
                                            onChange={
                                                (event,checked) => {
                                                    this.handleCheck(checked,'ileak_data');
                                                    this.props.hhparam.changeParam('checkileak_data',checked)
                                                }
                                            }
                                            value="Voltage"
                                        />
                                    }
                                    label="IUser"
                                />

                            </FormGroup>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.props.hhparam.checkgna_data}
                                            onChange={
                                                (event,checked) => {
                                                    this.handleCheck(checked,'gna_data');
                                                    this.props.hhparam.changeParam('checkgna_data',checked)
                                                }
                                            }
                                            value="Voltage"
                                        />
                                    }
                                    label="gNa"
                                />                                <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.props.hhparam.checkgk_data}
                                        onChange={
                                            (event,checked) => {
                                                this.handleCheck(checked,'gk_data');
                                                this.props.hhparam.changeParam('checkgk_data',checked)
                                            }
                                        }
                                        value="Voltage"
                                    />
                                }
                                label="gK"
                            />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.props.hhparam.checkguser_data}
                                            onChange={
                                                (event,checked) => {
                                                    this.handleCheck(checked,'guser_data');
                                                    this.props.hhparam.changeParam('checkguser_data',checked)
                                                }
                                            }
                                            value="Voltage"
                                        />
                                    }
                                    label="gUser"
                                />
                            </FormGroup>
                            <TextField
                                required
                                id="required"
                                label="File Name"
                                defaultValue={this.props.hhparam.csv_file_name}
                                margin="normal"
                                onChange={(e)=> {console.log(e.target.value,'value');this.props.hhparam.changeParam('csv_file_name',e.target.value)}}
                            />
                            <CSVLink
                                headers={this.props.hhparam.export_params.slice()}
                                data={this.props.hhparam.export_data}
                                filename={this.props.hhparam.csv_file_name}

                            >
                                <Button>Download</Button>
                            </CSVLink>
                        </Dialog>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={param.checked}
                                        onChange={(event,checked)=> this.handleChange('multi',checked)}
                                    />
                                }
                                label="Keep Previous Traces"
                            />
                        </FormGroup>

                    </Toolbar>
                    <Collapse accordion={true}>
                        <Panel header="Simulation Parameter" headerClass="my-header-class">
                            <SimulationControl />
                        </Panel>
                        <Panel header="Membrane">
                            <MembraneControl />
                        </Panel>
                        <Panel header="Channel">
                            <ChannelControl />
                        </Panel>
                        <Panel header="Drug">
                            <DrugControl/>
                        </Panel>

                        <Panel header="Stimuli">
                            <Stimuli/>
                        </Panel>
                    </Collapse>

                </Col>

            </Row>
        )
    }
}


export default HodgkinHuxleyContainer


