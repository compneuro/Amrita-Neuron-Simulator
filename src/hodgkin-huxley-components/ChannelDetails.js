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
import {Col, Grid, Modal, Row} from 'react-bootstrap';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Button from 'material-ui/Button';
import Table, {TableBody, TableCell, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import DropDownMenu from '../DropDownMenu';
import NumericInput from 'react-numeric-input';
import Collapse from 'rc-collapse';

const Panel = Collapse.Panel;










@inject('hhparam')
@observer
export default class HodgkinHuxleyChannelDetails extends Component {

    handleParamChange = function (name,value) {
        this.props.hhparam.changeParam(name,value);
    };

    state = {
        value: 0,
        showModal:false,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    close = () => {
        this.setState({ showModal: false });
    };

    open = () => {
        this.setState({ showModal: true });
    };

    render(){
        const {value} = this.state;
        const param = this.props.hhparam;
        return(
          <div>
              <Button
                raised
                color="primary"
                onClick={this.open}
              >
                  Channel Details
              </Button>

              <Modal show={this.state.showModal} onHide={this.close} >
                  <Modal.Header closeButton>
                      <Modal.Title>Channel Details</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>

                      <div>
                          <AppBar position="static" color="default">
                              <Tabs
                                  value={this.state.value}
                                  onChange={this.handleChange}
                                  scrollable
                                  scrollButtons="on"
                                  indicatorColor="primary"
                                  textColor="primary"
                              >
                                  <Tab label="Fast Sodium" />
                                  <Tab label="Delayed Rectifier" />
                                  <Tab label="User Channel" />
                              </Tabs>
                          </AppBar>
                          {value === 0 &&
                          <Paper>
                              <Collapse accordion={true}>

                                  <Panel showArrow={true} header="m">
                                      <DropDownMenu selected={param.m_exp}
                                                    id="m_exp"
                                                    primary="Exponent"
                                                    options={[1,2,3,4,5,6]}
                                                    onChange={(e)=> this.handleParamChange('m_exp',e)}
                                      />
                                      <br/>

                                      <Grid>
                                          <Row>
                                              <Paper>
                                                  <Col xs={3}>

                                                      <DropDownMenu selected={param.m_alpha_equation}
                                                                    id="m_alpha_equation"
                                                                    primary="Choose Equation"
                                                                    options={[
                                                                        "c*(V-th)/(1-exp[(V-th)*s",
                                                                        "c/(1+exp[(V-th)*s])",
                                                                        "c*(exp[(V-th)*s])"
                                                                    ]}
                                                                    onChange={(e)=> this.handleParamChange('m_alpha_equation',e)}


                                                      />

                                                      <Table>
                                                          <TableBody>
                                                              <TableRow>
                                                                  <TableCell>Magnitude</TableCell>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          name={"m_alpha_magnitude"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          precision={3}
                                                                          value={param.m_alpha_magnitude}
                                                                          onChange={(e)=> this.handleParamChange('m_alpha_magnitude',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell>Threshold</TableCell>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          name={"m_alpha_threshold"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          precision={3}
                                                                          value={param.m_alpha_threshold}
                                                                          onChange={(e)=> this.handleParamChange('m_alpha_threshold',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell>Slope</TableCell>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          name={"m_alpha_slope"}
                                                                          min={-2000}
                                                                          precision={3}
                                                                          max={2000}
                                                                          value={param.m_alpha_slope}
                                                                          onChange={(e)=> this.handleParamChange('m_alpha_slope',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                          </TableBody>
                                                      </Table>


                                                  </Col>
                                                  <Col xs={3}>
                                                      <DropDownMenu selected={param.m_beta_equation}
                                                                    id="m_beta_equation"
                                                                    primary="Choose Equation"
                                                                    options={[
                                                                        "c*(V-th)/(1-exp[(V-th)*s",
                                                                        "c/(1+exp[(V-th)*s])",
                                                                        "c*(exp[(V-th)*s])"
                                                                    ]}
                                                                    onChange={(e)=> this.handleParamChange('m_beta_equation',e)}
                                                      />

                                                      <Table>
                                                          <TableBody>
                                                              <TableRow>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          name={"m_beta_magnitude"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          precision={3}
                                                                          value={param.m_beta_magnitude}
                                                                          onChange={(e)=> this.handleParamChange('m_beta_magnitude',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          name={"m_beta_threshold"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          precision={3}
                                                                          value={param.m_beta_threshold}
                                                                          onChange={(e)=> this.handleParamChange('m_beta_threshold',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          name={"m_beta_slope"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          precision={3}
                                                                          value={param.m_beta_slope}
                                                                          onChange={(e)=> this.handleParamChange('m_beta_slope',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                          </TableBody>
                                                      </Table>

                                                  </Col>
                                              </Paper>






                                          </Row>
                                      </Grid>

                                  </Panel>
                                  <Panel showArrow={true} header="h">
                                      <DropDownMenu selected={param.h_exp}
                                                    id="h_exp"
                                                    primary="Exponent"
                                                    options={[1,2,3,4,5,6]}
                                                    onChange={(e)=> this.handleParamChange('h_exp',e)}
                                      />
                                      <br/>

                                      <Grid>
                                          <Row>
                                              <Paper>
                                                  <Col xs={3}>

                                                          <DropDownMenu selected={param.h_alpha_equation}
                                                                        id="h_alpha_equation"
                                                                        primary="Choose Equation"
                                                                        options={[
                                                                            "c*(V-th)/(1-exp[(V-th)*s",
                                                                            "c/(1+exp[(V-th)*s])",
                                                                            "c*(exp[(V-th)*s])"
                                                                        ]}
                                                                        onChange={(e)=> this.handleParamChange('h_alpha_equation',e)}
                                                          />

                                                          <Table>
                                                              <TableBody>
                                                                  <TableRow>
                                                                      <TableCell>Magnitude</TableCell>
                                                                      <TableCell>
                                                                          <NumericInput
                                                                              size={2}
                                                                              name={"h_alpha_magnitude"}
                                                                              precision={3}
                                                                              min={-2000}
                                                                              max={2000}
                                                                              value={param.h_alpha_magnitude}
                                                                              onChange={(e)=> this.handleParamChange('h_alpha_magnitude',e)}
                                                                          />
                                                                      </TableCell>
                                                                  </TableRow>
                                                                  <TableRow>
                                                                      <TableCell>Threshold</TableCell>
                                                                      <TableCell>
                                                                          <NumericInput
                                                                              size={2}
                                                                              precision={3}
                                                                              name={"h_alpha_threshold"}
                                                                              min={-2000}
                                                                              max={2000}
                                                                              value={param.h_alpha_threshold}
                                                                              onChange={(e)=> this.handleParamChange('h_alpha_threshold',e)}
                                                                          />
                                                                      </TableCell>
                                                                  </TableRow>
                                                                  <TableRow>
                                                                      <TableCell>Slope</TableCell>
                                                                      <TableCell>
                                                                          <NumericInput
                                                                              size={2}
                                                                              precision={3}
                                                                              name={"h_alpha_slope"}
                                                                              min={-2000}
                                                                              max={2000}
                                                                              value={param.h_alpha_slope}
                                                                              onChange={(e)=> this.handleParamChange('h_alpha_slope',e)}
                                                                          />
                                                                      </TableCell>
                                                                  </TableRow>
                                                              </TableBody>
                                                          </Table>


                                                  </Col>
                                                  <Col xs={3}>
                                                      <DropDownMenu selected={param.h_beta_equation}
                                                                    id="h_beta_equation"
                                                                    primary="Choose Equation"
                                                                    options={[
                                                                        "c*(V-th)/(1-exp[(V-th)*s",
                                                                        "c/(1+exp[(V-th)*s])",
                                                                        "c*(exp[(V-th)*s])"
                                                                    ]}
                                                                    onChange={(e)=> this.handleParamChange('h_beta_equation',e)}
                                                      />

                                                      <Table>
                                                          <TableBody>
                                                              <TableRow>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"h_beta_magnitude"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={param.h_beta_magnitude}
                                                                          onChange={(e)=> this.handleParamChange('h_beta_magnitude',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"h_beta_threshold"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={param.h_beta_threshold}
                                                                          onChange={(e)=> this.handleParamChange('h_beta_threshold',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell >
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"h_beta_slope"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={param.h_beta_slope}
                                                                          onChange={(e)=> this.handleParamChange('h_beta_slope',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                          </TableBody>
                                                      </Table>

                                                  </Col>
                                              </Paper>






                                          </Row>
                                      </Grid>


                                  </Panel>
                              </Collapse>
                          </Paper>
                          }
                          {value === 1 &&
                          <Paper>
                              <Collapse accordion={true}>

                                  <Panel showArrow={true} header="n">
                                      <DropDownMenu selected={param.n_exp}
                                                    id="n_exp"
                                                    primary="Exponent"
                                                    options={[1,2,3,4,5,6]}
                                                    onChange={(e)=> this.handleParamChange('n_exp',e)}
                                      />
                                      <br/>

                                      <Grid>
                                          <Row>
                                              <Paper>
                                                  <Col xs={3}>

                                                      <DropDownMenu selected={param.n_alpha_equation}
                                                                    id="n_alpha_equation"
                                                                    primary="Choose Equation"
                                                                    options={[
                                                                        "c*(V-th)/(1-exp[(V-th)*s",
                                                                        "c/(1+exp[(V-th)*s])",
                                                                        "c*(exp[(V-th)*s])"
                                                      ]}
                                                                    onChange={(e)=> this.handleParamChange('n_alpha_equation',e)}
                                                      />

                                                      <Table>
                                                          <TableBody>
                                                              <TableRow>
                                                                  <TableCell>Magnitude</TableCell>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"n_alpha_magnitude"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={param.n_alpha_magnitude}
                                                                          onChange={(e)=> this.handleParamChange('n_alpha_magnitude',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell>Threshold</TableCell>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"n_alpha_threshold"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={param.n_alpha_threshold}
                                                                          onChange={(e)=> this.handleParamChange('n_alpha_threshold',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell>Slope</TableCell>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"n_alpha_slope"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={param.n_alpha_slope}
                                                                          onChange={(e)=> this.handleParamChange('n_alpha_slope',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                          </TableBody>
                                                      </Table>


                                                  </Col>
                                                  <Col xs={3}>
                                                      <DropDownMenu selected={param.n_beta_equation} id="n_beta_equation" primary="Choose Equation" options={[
                                                          "c*(V-th)/(1-exp[(V-th)*s",
                                                          "c/(1+exp[(V-th)*s])",
                                                          "c*(exp[(V-th)*s])"
                                                      ]}
                                                                    onChange={(e)=> this.handleParamChange('g_na',e)}
                                                      />

                                                      <Table>
                                                          <TableBody>
                                                              <TableRow>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"n_beta_magnitude"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={param.n_beta_magnitude}
                                                                          onChange={(e)=> this.handleParamChange('g_na',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"n_beta_threshold"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={param.n_beta_threshold}
                                                                          onChange={(e)=> this.handleParamChange('g_na',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"n_beta_slope"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={param.n_beta_slope}
                                                                          onChange={(e)=> this.handleParamChange('g_na',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                          </TableBody>
                                                      </Table>
                                                  </Col>
                                              </Paper>
                                          </Row>
                                      </Grid>
                                  </Panel>
                              </Collapse>
                          </Paper>
                          }

                          {value === 2 &&
                          <Paper>
                              <Collapse accordion={true}>

                                  <Panel showArrow={true} header="p">
                                      <DropDownMenu selected={0} id="p_exp" primary="Exponent" options={[1,2,3,4,5,6]}
                                                    onChange={(e)=> this.handleParamChange('g_na',e)}
                                      />
                                      <br/>

                                      <Grid>
                                          <Row>
                                              <Paper>
                                                  <Col xs={3}>

                                                      <DropDownMenu selected={0} id="p_alpha_equation" primary="Choose Equation" options={[
                                                          "c*(V-th)/(1-exp[(V-th)*s",
                                                          "c/(1+exp[(V-th)*s])",
                                                          "c*(exp[(V-th)*s])"
                                                      ]}
                                                                    onChange={(e)=> this.handleParamChange('g_na',e)}
                                                      />

                                                      <Table>
                                                          <TableBody>
                                                              <TableRow>
                                                                  <TableCell>Magnitude</TableCell>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"p_alpha_magnitude"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={this.props.p_alpha_magnitude}
                                                                          onChange={(e)=> this.handleParamChange('g_na',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell>Threshold</TableCell>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"nai"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={50}
                                                                          onChange={(e)=> this.handleParamChange('g_na',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell>Slope</TableCell>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"nai"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={50}
                                                                          onChange={(e)=> this.handleParamChange('g_na',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                          </TableBody>
                                                      </Table>


                                                  </Col>
                                                  <Col xs={3}>
                                                      <DropDownMenu selected={0} id="p_beta_equation" primary="Choose Equation" options={[
                                                          "c*(V-th)/(1-exp[(V-th)*s",
                                                          "c/(1+exp[(V-th)*s])",
                                                          "c*(exp[(V-th)*s])"
                                                      ]}
                                                                    onChange={(e)=> this.handleParamChange('g_na',e)}
                                                      />

                                                      <Table>
                                                          <TableBody>
                                                              <TableRow>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"nai"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={50}
                                                                          onChange={(e)=> this.handleParamChange('g_na',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"nai"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={50}
                                                                          onChange={(e)=> this.handleParamChange('g_na',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"nai"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={50}
                                                                          onChange={(e)=> this.handleParamChange('g_na',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                          </TableBody>
                                                      </Table>

                                                  </Col>
                                              </Paper>






                                          </Row>
                                      </Grid>

                                  </Panel>
                                  <Panel showArrow={true} header="q">
                                      <DropDownMenu selected={0} id="q_exp" primary="Exponent" options={[1,2,3,4,5,6]} onChange={(e)=> this.handleParamChange('g_na',e)} />
                                      <br/>

                                      <Grid>
                                          <Row>
                                              <Paper>
                                                  <Col xs={3}>

                                                      <DropDownMenu selected={0} id="q_alpha_equation" primary="Choose Equation" options={[
                                                          "c*(V-th)/(1-exp[(V-th)*s",
                                                          "c/(1+exp[(V-th)*s])",
                                                          "c*(exp[(V-th)*s])"
                                                      ]}
                                                                    onChange={(e)=> this.handleParamChange('g_na',e)}
                                                      />

                                                      <Table>
                                                          <TableBody>
                                                              <TableRow>
                                                                  <TableCell>Magnitude</TableCell>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"nai"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={50}
                                                                          onChange={(e)=> this.handleParamChange('g_na',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell>Threshold</TableCell>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"nai"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={50}
                                                                          onChange={(e)=> this.handleParamChange('g_na',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell>Slope</TableCell>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"nai"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={50}
                                                                          onChange={(e)=> this.handleParamChange('g_na',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                          </TableBody>
                                                      </Table>


                                                  </Col>
                                                  <Col xs={3}>
                                                      <DropDownMenu selected={0} id="q_beta_equation" primary="Choose Equation" options={[
                                                          "c*(V-th)/(1-exp[(V-th)*s",
                                                          "c/(1+exp[(V-th)*s])",
                                                          "c*(exp[(V-th)*s])"
                                                      ]}
                                                                    onChange={(e)=> this.handleParamChange('g_na',e)}
                                                      />

                                                      <Table>
                                                          <TableBody>
                                                              <TableRow>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"nai"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={50}
                                                                          onChange={(e)=> this.handleParamChange('g_na',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"nai"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={50}
                                                                          onChange={(e)=> this.handleParamChange('g_na',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                              <TableRow>
                                                                  <TableCell>
                                                                      <NumericInput
                                                                          size={2}
                                                                          precision={3}
                                                                          name={"nai"}
                                                                          min={-2000}
                                                                          max={2000}
                                                                          value={50}
                                                                          onChange={(e)=> this.handleParamChange('g_na',e)}
                                                                      />
                                                                  </TableCell>
                                                              </TableRow>
                                                          </TableBody>
                                                      </Table>

                                                  </Col>
                                              </Paper>






                                          </Row>
                                      </Grid>


                                  </Panel>
                              </Collapse>
                          </Paper>
                          }
                      </div>

                  </Modal.Body>
                  <Modal.Footer>
                      <Button raised onClick={this.close}>
                          Close
                      </Button>
                  </Modal.Footer>
              </Modal>


          </div>
        );
    }

}