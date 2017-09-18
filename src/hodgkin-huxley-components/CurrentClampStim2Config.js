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
        return(
            <div>
                <Button
                    raised
                    color="primary"
                    onClick={this.open}
                    dense={true}
                >
                    Config Stim 1
                </Button>

                <Modal show={this.state.showModal} onHide={this.close} >
                    <Modal.Header closeButton>
                        <Modal.Title>Stim 1 Config</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Grid>
                            <Row>
                                <Col md={4}>
                                    <div style={{height: 100}}/>
                                    <SliderComponent  width={200} axis="x"/>
                                </Col>
                                <Col md={2}>
                                    <SliderComponent height={200} axis="y"/>
                                </Col>
                                <Col md={4}>
                                    <div style={{height: 100}}/>
                                    <SliderComponent width={200} axis="x"/>
                                </Col>
                                <Col md={2}>
                                    <SliderComponent height={200} axis="y"/>
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