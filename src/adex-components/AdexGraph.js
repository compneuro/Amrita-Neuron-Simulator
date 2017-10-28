/*Amrita Neuron Simulator

A Web based Neuron Simulator written in ReactJS, capable of simulating Hodgkin Huxley, AdEx. Izhikevich neuron models.

Last updated 10-September-2017
Developed by : Joshy Alphonse & Shyam Diwakar
Computational Neuroscience & Neurophysiology Lab, School of Biotechnology, Amrita University, India.
Email: joshya@am.amrita.edu; shyam@amrita.edu
www.amrita.edu/compneuro
*/
import React, {Component} from 'react';
import {plotOptions,yAxis} from '../plotOptions';
import {inject, observer} from 'mobx-react';
const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);


@inject('adexparam')
@observer
export default class AdexGraph extends Component{


    componentDidMount(){
        console.log('mounted');
        Highcharts.chart('main-graph', {
            //chart:channel_chart_config,
            title: {
                text: 'Voltage'
            },
            yAxis:yAxis,
            series: [
                {
                    name:'Volatge',
                    data:[]
                },

            ]
        });
    }

    componentDidUpdate(){

        let plot_data = this.props.data;
        plot_data.map(function (val) {
            return parseFloat(val);
        });
        console.log('ploting');
        console.log(plot_data);
        Highcharts.chart('main-graph',{
            //chart:voltage_chart_config,
            title: {
                text: 'Voltage'
            },
            plotOptions: plotOptions,
            yAxis:yAxis,
            series:[{
                name:'(mV)',
                data:plot_data
            }]
        });

    }

    render(){
        return(
            <div id='main-graph' />
        )
    }
}