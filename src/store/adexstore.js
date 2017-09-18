/*Amrita Neuron Simulator

A Web based Neuron Simulator written in ReactJS, capable of simulating Hodgkin Huxley, AdEx. Izhikevich neuron models.

Last updated 10-September-2017
Developed by : Joshy Alphonse & Shyam Diwakar
Computational Neuroscience & Neurophysiology Lab, School of Biotechnology, Amrita University, India.
Email: joshya@am.amrita.edu; shyam@amrita.edu
www.amrita.edu/compneuro
*/

//Mobx store for AdEx Neuron Model

import {action, computed, observable} from 'mobx';


class ADEX_PARAM{

    @observable multi = false;
    @observable C = 281;
    @observable el = -70.6;
    @observable del = 2;
    @observable a = 4;
    @observable vr = -54;
    @observable gl = 30;
    @observable vt = -50.4;
    @observable tw = 144;
    @observable b = 0.0805;
    @observable simTime = 100;
    @observable I = 20;
    @observable voltage = [];
    @observable w = [];
    @observable export_params = ['voltage','w'];
    @observable csv_file_name = 'AdeXData.csv';

    @observable checkVoltage = true;
    @observable checkw = true;

    @computed get export_data (){
        let data = [];
        if(this.voltage !== []){
            let tmp_data = new Array(this.voltage.length).fill([]);
            this.export_params.forEach((value,index) => {

                this[value].forEach((val,ind)=>{
                    tmp_data[ind] = tmp_data[ind].concat(val);
                })
            });
            data = tmp_data



        }else{
            return []
        }
        console.log(data);
        return data;

    }

    @action handleExportParams = (checked,param) => {
        if(param === 'voltage'){
            this.checkVoltage = checked;
        }
        if(param === 'w'){
            this.checkw = checked;
        }

        if(checked){
            this.export_params.push(param);
            console.log('add',param);
            console.log(this.export_params)
        }
        if (!checked){
            this.export_params = this.export_params.filter((item) =>{
                console.log('remove',param);
                console.log(this.export_params);
                return item !== param
            })
        }
    };

    @action changeParam(param,value){
        console.log(param,value);
        this[param] = value;
    };

    @action reset =() =>{

    this.multi = false;
    this.C = 281;
    this.el = -70.6;
    this.del = 2;
    this.a = 4;
    this.vr = -54;
    this.gl = 30;
    this.vt = -50.4;
    this.tw = 144;
    this.b = 0.0805;
    this.simTime = 100;
    this.I = 20;
    this.voltage = [];
    this.w = [];

    };

    @action runSim = () => {
        var dt = 0.1;
        var C = this.C;
        var gl = this.gl;
        var el = this.el;
        var vt = this.vr;
        var del = this.del;
        var tw = this.tw;
        var a = this.a;
        var b = this.b;
        var vr = this.vr;
        var simTime = this.simTime;
        var nSteps = simTime / dt;
        var I = new Array(nSteps).fill(this.I); //generateCurrent(3,dt); //input current
        var dV = 0;
        var dw = 0;
        console.log(C,gl,el,vt,del,tw,a,b,vr,simTime);
        console.log(I);
        var V = [];
        V[0] = el;
        var w = [];
        w[0] = 0;

        for (var i = 0; i < nSteps; i++) {
            console.log(i);
            dV = dt * (gl * (V[i] - el) + (gl * del * Math.exp((V[i] - vt) / del)) - w[i] + I[i]) / C;
            dw = dt * ((a * (V[i] - el) - w[i]) / tw);

            V[i + 1] = V[i] + dV;
            w[i + 1] = w[i] + dw;
            if (V[i + 1] > 0) {
                V[i] = 0;
                w[i + 1] = w[i] + b;
                V[i + 1] = vr;
                console.log("Fired")

            }
        }

        if(this.multi){
            this.voltage = this.voltage.concat(V);
            this.w = this.w.concat(w);
        }else{
            this.voltage = V;
            this.w = w;
        }


    };

    @action setMode = (name) => {
        console.log(name);

        switch(name){
            case 'fs':
                this.C = 200;
                this.el = -70;
                this.del = 2;
                this.a = 2;
                this.vr = -58;
                this.gl = 12;
                this.vt = -50;
                this.tw = 300;
                this.b = 60;
                break;

            case 'rs':
                this.C = 281;
                this.el = -70.6;
                this.del =2;
                this.a = 4;
                this.vr = -54;
                this.gl = 30;
                this.vt = -50.4;
                this.tw = 144;
                this.b = 0.0805;
                break;

            case 'tc':
                this.C = 130;
                this.el = -58;
                this.del = 2;
                this.a = 4;
                this.vr = -50;
                this.gl = 18;
                this.vt = -50;
                this.tw = 150;
                this.b = 120;
                break;
            case 'ib':
                this.C = 104;
                this.el = -65;
                this.del = 5.5;
                this.a = -0.8;
                this.vr = -53;
                this.gl = 43;
                this.vt = -52;
                this.tw = 88;
                this.b = 65;
                break;
            case 'rz':
                this.C = 200;
                this.el = -58;
                this.del = 2;
                this.a = 2;
                this.vr = -46;
                this.gl = 10;
                this.vt = -50;
                this.tw = 120;
                this.b = 100;
                break;
            case 'ch':
                this.C = 200;
                this.el = -70;
                this.del = 0.8;
                this.a = 2;
                this.vr = -58;
                this.gl = 10;
                this.vt = -50;
                this.tw = 30;
                this.b = 0;
                break;
            default:
                break;
        }

    };

}


const adex_store = new ADEX_PARAM();


export default adex_store;