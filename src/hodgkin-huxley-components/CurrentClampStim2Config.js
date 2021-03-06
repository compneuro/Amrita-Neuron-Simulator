/*Amrita Neuron Simulator

A Web based Neuron Simulator written in ReactJS, capable of simulating Hodgkin Huxley, AdEx. Izhikevich neuron models.

Last updated 10-September-2017
Developed by : Joshy Alphonse & Shyam Diwakar
Computational Neuroscience & Neurophysiology Lab, School of Biotechnology, Amrita University, India.
Email: joshya@am.amrita.edu; shyam@amrita.edu
www.amrita.edu/compneuro
*/
import React, {Component} from 'react';
import {Col, Modal, Row} from 'react-bootstrap';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import SliderComponent from "../Slider";
import RangeSliderComponent from '../Range';
import {inject, observer} from 'mobx-react';


@inject('hhparam')
@observer
export default class HodgkinHuxleyStim1Config extends Component{

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
        const param = this.props.hhparam;
        return(
            <div>
                <Button
                    raised
                    color="primary"
                    onClick={this.open}
                    dense={true}
                >
                    Config Stim 2
                </Button>

                <Modal show={this.state.showModal} onHide={this.close} >
                    <Modal.Header closeButton>
                        <Modal.Title>Stim 2 Config</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Grid>
                            <Row>
                                <Col md={4}>
                                    <div style={{height: 100}}/>
                                    <RangeSliderComponent id={"stim2"}  name="s2_time1" value={param.s2_time1}  vertical={false} onChange={param.setStimuli}/>
                                </Col>
                                <Col md={2}>
                                    <SliderComponent  id={"stim2"}  name="s2_v1" value={param.s2_v1} height={150}   vertical={true} onChange={param.setStimuli}/>
                                </Col>
                                <Col md={4}>
                                    <div style={{height: 100, margin:'0 auto'}} />

                                    <RangeSliderComponent id={"stim2"}  name="s2_time2" value={param.s2_time2} vertical={false} onChange={param.setStimuli}/>
                                </Col>
                                <Col md={2}>
                                    <SliderComponent id={"stim2"}  name="s2_v2" value={param.s2_v2} height={150}  vertical={true} onChange={param.setStimuli} />
                                </Col>
                            </Row>
                        </Grid>



                    </Modal.Body>

                    <Modal.Footer>
                        <Button dense={true} raised color="primary" onClick={this.close}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }


}