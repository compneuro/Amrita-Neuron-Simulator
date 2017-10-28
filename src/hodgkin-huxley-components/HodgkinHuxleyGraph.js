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
import {plotOptions,yAxis} from '../plotOptions';
const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);


const voltage_chart_config = {
    height: 300,
    type: 'line'

};
const channel_chart_config = {
    height: 200,
    type: 'line'

};


@inject('hhparam')
@observer
export  class HodgkinHuxleyVoltageGraph extends Component{

    shouldComponentUpdate(nextProps,nextState){
        return nextProps.data !== this.props.data;
    }
    componentDidMount(){

        Highcharts.chart('main-graph',{
            chart:voltage_chart_config,
            yAxis:yAxis,
            title: {
                text: 'Voltage'
            },
            series:[{
                name:'(mV)',
                data:[]
            }]
        });



    };

    componentDidUpdate(){

        let plot_data = this.props.data;
        plot_data.map(function (val) {
            return parseFloat(val);
        });
        console.log(plot_data);
        Highcharts.chart('main-graph',{
            chart:voltage_chart_config,
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

                <div>
                    <div id="main-graph"/>
                </div>
            )

    }
}




export class HodgkinHuxleyChannelGraph extends Component{
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.data !== this.props.data;
    }
    componentDidMount(){
        Highcharts.chart('channel-graph', {
            chart:channel_chart_config,
            title: {
                text: ''
            },
            yAxis:yAxis,
            series: [
                {
                    name:'channels',
                    data:[]
                },

            ]
        });
    }
    componentDidUpdate() {
        let data = this.props.data;
        data.forEach(function (i) {
            i.map(function (val) {
                return parseFloat(val);
            })
        });


        Highcharts.chart('channel-graph', {
            chart:channel_chart_config,
            title: {
                text: ''
            },
            plotOptions: plotOptions,
            yAxis:yAxis,
            series: [
                {
                    name:'m',
                    data:data[0]
                },
                {
                    name:'n',
                    data:data[1]
                },
                {
                    name:'h',
                    data:data[2]
                }
            ]
        });
    }
    render (){
        return(
            <div id="channel-graph">
            </div>
        )
    }
}

































