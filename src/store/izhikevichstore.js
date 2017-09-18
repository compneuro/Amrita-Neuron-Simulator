/*Amrita Neuron Simulator

A Web based Neuron Simulator written in ReactJS, capable of simulating Hodgkin Huxley, AdEx. Izhikevich neuron models.

Last updated 10-September-2017
Developed by : Joshy Alphonse & Shyam Diwakar
Computational Neuroscience & Neurophysiology Lab, School of Biotechnology, Amrita University, India.
Email: joshya@am.amrita.edu; shyam@amrita.edu
www.amrita.edu/compneuro
*/
//MobX store for Izhikevich Neuron model
import {action, computed, observable} from 'mobx';


class IZHIKEVICH_PARAMS {
    @observable multi = false;
    @observable dt = 0.5;
    @observable simTime = 350;
    @observable input = 10;
    @observable a = 0.02;
    @observable b = 0.2;
    @observable c = -65;
    @observable d = 8;
    @observable v = -80;
    @observable u = 0;
    @observable time = [];
    @observable voltage = [];

    @observable export_params = ['time','voltage'];
    @observable csv_file_name = 'IzhikevichData.csv';

    @observable checkVoltage = true;
    @observable checktime = true;


    @action changeParam(param,value){
        this[param] = value;
    };

    @action runSim = () => {
        let dt = this.dt;
        let simTime = this.simTime;
        let input = this.input;
        let a = this.a;
        let b = this.b;
        let c = this.c;
        let d = this.d;
        let v = this.v;
        let u = this.u;
        let steps = simTime / dt;

        let T = [];
        let V = [];
        let t = 0;
        let I;
        function izi() {
            if (t >= delay) {
                I = input
            } else {
                I = 0
            }
            v = v + (0.04 * v * v + 5 * v + 140 - u + I) * dt;
            u = u + (a * (b * v - u)) * dt;

            if (v >= 30) {
                v = c;
                u = u + d
            }
        }


        let delay = 100;
        for (let i = 0; i < steps; i++) {
            izi();
            t = dt * (i - 1);
            T[i] = t;
            V[i] = v
        }
        if(this.multi){
            this.voltage = this.voltage.concat(V)
        }else{
            this.voltage = V;
        }



    };

    @action setMode = (name) => {
        switch (name) {
            case 'fs':
                this.a = 0.1;
                this.b = 0.2;
                this.c = -65;
                this.d = 2;
                break;

            case 'rs':
                this.a = 0.02;
                this.b = 0.2;
                this.c = -65;
                this.d = 8;
                break;

            case 'tc':
                this.a = 0.02;
                this.b = 0.25;
                this.c = -65;
                this.d = 0.05;
                break;

            case 'ib':
                this.a = 0.02;
                this.b = 0.2;
                this.c = -55;
                this.d = 4;
                break;

            case 'rz':
                this.a = 0.02;
                this.b = 0.2;
                this.c = -65;
                this.d = 2;
                break;

            case 'ch':
                this.a = 0.02;
                this.b = 0.2;
                this.c = -50;
                this.d = 2;
                break;

            case 'lts':
                this.a = 0.02;
                this.b = 0.25;
                this.c = -65;
                this.d = 2;
                break;
            default:
                break;
        }

    };

    @action reset = () => {
    this.dt = 0.5;
    this.simTime = 350;
    this.input = 10;
    this.a = 0.02;
    this.b = 0.2;
    this.c = -65;
    this.d = 8;
    this.v = -80;
    this.u = 0;
    this.time = [];
    this.voltage = [];

    };

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
        if(param === 'time'){
            this.checktime = checked;
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
}





const izhikevichparam = new IZHIKEVICH_PARAMS();

export default izhikevichparam;
