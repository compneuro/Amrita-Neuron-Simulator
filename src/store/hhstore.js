/*Amrita Neuron Simulator

A Web based Neuron Simulator written in ReactJS, capable of simulating Hodgkin Huxley, AdEx. Izhikevich neuron models.

Last updated 10-September-2017
Developed by : Joshy Alphonse & Shyam Diwakar
Computational Neuroscience & Neurophysiology Lab, School of Biotechnology, Amrita University, India.
Email: joshya@am.amrita.edu; shyam@amrita.edu
www.amrita.edu/compneuro
*/
//MobX store for Hodgkin Huxley Neuron model.

import {action, computed, observable} from 'mobx';

class HH_PARAMS {

    @observable multi=false;
    @observable mode = 'Current Clamp';
    @observable T = 6.3;
    @observable Rm = 8.31451;
    @observable Cm = 1.000000000000000e-09;
    @observable F = 96485.3;
    @observable Vr=-47.77;
    @observable c_in_na=50;
    @observable c_out_na=440;
    @observable c_in_k=400;
    @observable c_out_k=20;
    @observable c_in_cl=52;
    @observable c_out_cl=560;
    @observable g_na= 0.0265;
    @observable g_k= 0.07;
    @observable g_cl= 0.1;
    @observable g_na_max= 120;
    @observable m_exp= 3;
    @observable m_alpha_equation= 1;
    @observable m_alpha_magnitude= 0.100;
    @observable m_alpha_threshold= -40.00;
    @observable m_alpha_slope= -0.100;
    @observable m_beta_equation= 0;
    @observable m_beta_magnitude= 4.000;
    @observable m_beta_threshold= -65.000;
    @observable m_beta_slope= -0.05555;
    @observable h_exp= 1;
    @observable h_alpha_equation= 0;
    @observable h_alpha_magnitude= 0.070;
    @observable h_alpha_threshold= -65.00;
    @observable h_alpha_slope= -0.050;
    @observable h_beta_equation= 2;
    @observable h_beta_magnitude= 1.000;
    @observable h_beta_threshold= -35.000;
    @observable h_beta_slope= -0.1000;
    @observable g_k_max= 36;
    @observable n_exp= 4;
    @observable n_alpha_equation= 1;
    @observable n_alpha_magnitude= 0.010;
    @observable n_alpha_threshold= -55.000;
    @observable n_alpha_slope= -0.100;
    @observable n_beta_equation= 0;
    @observable n_beta_magnitude= 0.125;
    @observable n_beta_threshold= -65.000;
    @observable n_beta_slope= -0.0125;
    @observable g_user_max= 0;
    @observable p_exp= 3;
    @observable p_alpha_equation= 1;
    @observable p_alpha_magnitude= 0.1;
    @observable p_alpha_threshold= -40;
    @observable p_alpha_slope= 0.1;
    @observable p_beta_equation= 3;
    @observable p_beta_magnitude= 4;
    @observable p_beta_threshold= -65;
    @observable p_beta_slope= -0.05555;
    @observable exponent= 3;
    @observable q_alpha_equation= 3;
    @observable q_alpha_magnitude= 0.07;
    @observable q_alpha_threshold= -65;
    @observable q_alpha_slope= -0.05;
    @observable q_beta_equation= 2;
    @observable q_beta_magnitude= 1;
    @observable q_beta_threshold= -35;
    @observable q_beta_slope= -0.1;
    @observable ttx=0;
    @observable tea=0;
    @observable pronase=0;
    @observable s1_time1= [0,20];
    @observable s1_v1= 20;
    @observable s1_time2= [13,18];
    @observable s1_v2= 20;
    @observable s2_time1= [0,20];
    @observable s2_v1= 20;
    @observable s2_time2= [13,18];
    @observable s2_v2= 20;
    @observable v_data = [];
    @observable m_data = [];
    @observable h_data = [];
    @observable n_data =[];
    @observable time_data = [];
    @observable ileak_data=[];
    @observable ina_data=[];
    @observable ik_data=[];
    @observable gna_data=[];
    @observable gk_data=[];
    @observable guser_data = [];
    @observable e_na = 0;

    @observable v1y = -60;
    @observable v1x = 20;
    @observable v2y = -20;
    @observable v2x = 20;
    @observable v3y =-60;
    @observable v3x =20;


    @observable export_params = ['v_data','m_data','h_data' ,'n_data' ,'ileak_data','ina_data','ik_data','gna_data','gk_data'];
    @observable csv_file_name = 'HHData.csv';

    @observable checktime_data = true;
    @observable checkv_data = true;
    @observable checkm_data = true;
    @observable checkh_data = true;
    @observable checkn_data = true;
    @observable checkileak_data = false;
    @observable checkina_data = true;
    @observable checkik_data = true;
    @observable checkgna_data = true;
    @observable checkgk_data = true;
    @observable checkguser_data = false;







    @computed get ena()  {
        return parseFloat((this.Rm * (this.T + 273.16) / (this.F) * Math.log(this.c_out_na / this.c_in_na) * 1000).toFixed(2));
    };

    @computed get ek()  {
        return parseFloat((this.Rm * (this.T + 273.16) / (this.F) * Math.log(this.c_out_k / this.c_in_k) * 1000).toFixed(2));
    };

    @computed get ecl()  {
        return parseFloat((this.Rm * (this.T + 273.16) / (-1 * this.F) * Math.log(this.c_out_cl / this.c_in_cl) * 1000).toFixed(2));
    };


    @action reset = () => {

    this.checked=false;
    this.mode = 'Current Clamp';
    this.T = 6.3;
    this.Rm = 8.31451;
    this.Cm = 1.000000000000000e-09;
    this.F = 96485.3;
    this.Vr=-47.77;
    this.c_in_na=50;
    this.c_out_na=440;
    this.c_in_k=400;
    this.c_out_k=20;
    this.c_in_cl=52;
    this.c_out_cl=560;
    this.g_na= 0.0265;
    this.g_k= 0.07;
    this.g_cl= 0.1;
    this.g_na_max= 120;
    this.m_exp= 3;
    this.m_alpha_equation= 1;
    this.m_alpha_magnitude= 0.100;
    this.m_alpha_threshold= -40.00;
    this.m_alpha_slope= -0.100;
    this.m_beta_equation= 0;
    this.m_beta_magnitude= 4.000;
    this.m_beta_threshold= -65.000;
    this.m_beta_slope= -0.05555;
    this.h_exp= 1;
    this.h_alpha_equation= 0;
    this.h_alpha_magnitude= 0.070;
    this.h_alpha_threshold= -65.00;
    this.h_alpha_slope= -0.050;
    this.h_beta_equation= 2;
    this.h_beta_magnitude= 1.000;
    this.h_beta_threshold= -35.000;
    this.h_beta_slope= -0.1000;
    this.g_k_max= 36;
    this.n_exp= 4;
    this.n_alpha_equation= 1;
    this.n_alpha_magnitude= 0.010;
    this.n_alpha_threshold= -55.000;
    this.n_alpha_slope= -0.100;
    this.n_beta_equation= 0;
    this.n_beta_magnitude= 0.125;
    this.n_beta_threshold= -65.000;
    this.n_beta_slope= -0.0125;
    this.g_user_max= 0;
    this.p_exp= 3;
    this.p_alpha_equation= 1;
    this.p_alpha_magnitude= 0.1;
    this.p_alpha_threshold= -40;
    this.p_alpha_slope= 0.1;
    this.p_beta_equation= 3;
    this.p_beta_magnitude= 4;
    this.p_beta_threshold= -65;
    this.p_beta_slope= -0.05555;
    this.exponent= 3;
    this.q_alpha_equation= 3;
    this.q_alpha_magnitude= 0.07;
    this.q_alpha_threshold= -65;
    this.q_alpha_slope= -0.05;
    this.q_beta_equation= 2;
    this.q_beta_magnitude= 1;
    this.q_beta_threshold= -35;
    this.q_beta_slope= -0.1;
    this.ttx=0;
    this.tea=0;
    this.pronase=0;
    this.s1_time1= [0,20];
    this.s1_v1= 20;
    this.s1_time2= [13,18];
    this.s1_v2= 20;
    this.s2_time1= [0,20];
    this.s2_v1= 20;
    this.s2_time2= [13,18];
    this.s2_v2= 20;
    this.v_data = [];
    this.m_data = [];
    this.h_data = [];
    this.n_data =[];
    this.time_data = [];
    this.ileak_data=[];
    this.ina_data=[];
    this.ik_data=[];
    this.gna_data=[];
    this.gk_data=[];
    this.e_na = 0;

    this.v1y = -60;
    this.v1x = 20;
    this.v2y = -20;
    this.v2x = 20;
    this.v3y =-60;
    this.v3x =20;

    };

    @action changeParam = (param,value) => {
        this[param] = value;
    };

    @action setStimuli = (param,value) => {
        this[param] = value;
    };

    @action runCurrentClamp = () => {
        function make_Istim () {

            let IstimCounter = 0;
            while (IstimCounter < s0 * 10) {
                IstimArr.push(0);
                IstimCounter++;
            }
            IstimCounter = 0;
            while (IstimCounter < s1 * 10) {
                IstimArr.push(svalue2 * 1.0e-9);
                IstimCounter++;
            }
            IstimCounter = 0;
            while (IstimCounter < s3 * 10) {
                IstimArr.push(0);
                IstimCounter++;
            }
            IstimCounter = 0;
            while (IstimCounter < s4 * 10) {
                IstimArr.push(svalue5 * 1.0e-9);
                IstimCounter++;
            }
            IstimCounter = 0;
            while (IstimCounter < 300) {
                IstimArr.push(0);
                IstimCounter++;
            }

        }
        function evalrate(eq_no, c, th, s) {
            let z;
            switch (eq_no) {
                case 0:
                    z = c * Math.exp((V[0] * 1000 - th) * s);

                    return z;
                case 1:
                    z = c * (V[0] * 1000 - th) / (1 - Math.exp((V[0] * 1000 - th) * s));

                    return z;
                case 2:
                    z = c / (1 + Math.exp((V[0] * 1000 - th) * s));

                    return z;
                case 3:
                    z = 0;

                    return z;
                default:
                    break;
            }
        }
        function update_channels() {

            const m_alpha = evalrate(m_alpha_equ, mac, math, mas);
            const m_beta = evalrate(m_beta_equ, mbc, mbth, mbs);
            const h_alpha = evalrate(h_alpha_equ, hac, hath, has);
            const h_beta = evalrate(h_beta_equ, hbc, hbth, hbs);
            const n_alpha = evalrate(n_alpha_equ, nac, nath, nas);
            const n_beta = evalrate(n_beta_equ, nbc, nbth, nbs);
            //p_alpha = evalrate(p_alpha_equ,pac,path,pas)
            //p_beta = evalrate(p_beta_equ,pbc,pbth,pbs)
            //q_alpha = evalrate(q_alpha_equ,qac,qath,qas)
            //q_beta = evalrate(q_beta_equ,qbc,qbth,qbs)



            const m_delta = m_alpha - (m_alpha + m_beta) * m[0];
            const new_m = Math.max(0, m[0] + m_delta * dt * 1000);
            m[0] = Math.min(1, new_m);


            const n_delta = n_alpha - (n_alpha + n_beta) * n[0];
            const new_n = Math.max(0, n[0] + n_delta * dt * 1000);
            n[0] = Math.min(1, new_n);


            const h_delta = h_alpha - (h_alpha + h_beta) * h[0];
            const new_h = Math.max(0, h[0] + h_delta * dt * 1000);
            h[0] = Math.min(1, new_h);

            //console.log(V[0], m[0], n[0], h[0])
            //alert('check2')

            /*
                p_delta = p_alpha -(p_alpha+p_beta)*p[0]
                new_p = Math.max(0,p[0] + p_delta * dt * 1000);
                new_p1 = Math.min(1,new_p);
              p[0] = new_p1

                q_delta = q_alpha -(q_alpha+q_beta)*q[0]
                new_q = Math.max(0,q[0] + q_delta * dt * 1000);
                new_q1 = Math.min(1,new_q);
              q[0] = new_q1

             */
        }
        function find_dv(param1) {

            update_channels();
            if (pronase === 1) {
                h[0] = 1;
            }
            const currentNa = g_passNa * 1000000 * (ENa - V[0]);
            const currentK = g_passK * 1000000 * (EK - V[0]);
            const currentCl = g_passCl * 1000000 * (ECl - V[0]);
            Ileak[0] = currentNa + currentK + currentCl;
            const currentHH_Na = gNa * 1000000 * Math.pow(m[0], mexp) * Math.pow(h[0], hexp) * (ENa - V[0]);
            const currentHH_K = gK * 1000000 * Math.pow(n[0], nexp) * (EK - V[0]);
            //var currentHH_User = gCl * 1000000 * Math.pow(p[0], pexp) * Math.pow(q[0], qexp) * (ENa - V[0]);
            const deltaV = dt * 1000 * (currentNa + currentK + currentCl + currentHH_Na + currentHH_K + param1 * 1000000) / (C * 1000000000);



            if (I_Naflag) {
                I_Na[0] = currentHH_Na;
                I_K[0] = currentHH_K;
                g_Na[0] = gNa * 1000000 * Math.pow(m[0], mexp) * Math.pow(h[0], hexp);
                g_K[0] = gK * 1000000 * Math.pow(n[0], nexp);
                //g_User[0] = gCl * 1000000 * Math.pow(p[0], pexp) * Math.pow(q[0], qexp);
            }
            //I_User[0] = currentHH_User;

            return deltaV
        }

        const v_data_ = [];
        const m_data_ = [];
        const h_data_ = [];
        const n_data_ = [];
        const ina_data_ = [];
        const ik_data_ = [];
        const iuser_data_ = [];
        const gna_data_ = [];
        const gk_data_ = [];
        const guser_data_ = [];

        var I_Na = [];
        var I_K = [];
        var I_User = [];
        var g_Na = [];
        var g_K = [];
        var g_User = [];
        var m = [];
        var h = [];
        var n = [];
        var p = [];
        var q = [];
        var V = [];


        var C = this.Cm;
        V.push(-63.39 / 1000);
        m[0] = 0.068775;
        h[0] = 0.515186;
        n[0] = 0.35286656;


        var g_passNa = this.g_na * 0.000001;
        var g_passK = this.g_k * 0.000001;
        var g_passCl = this.g_cl * 0.000001;

        var ENa = this.ena * 0.001;
        var EK = this.ek * 0.001;
        var ECl = this.ecl * 0.001;

        var gNa = this.g_na_max * 0.000001;
        var gK = this.g_k_max * 0.000001;
        //var gCl = this.g_cl * 0.000001;

        console.log(C,g_passCl,g_passK,g_passNa);
        console.log(ENa,EK,ECl);


        const ttx = this.ttx;
        const tea = this.tea;
        var pronase = 0;

        var gNa = gNa - gNa * ttx / 100;
        var gK = gK - gK * tea / 100;
        console.log(gNa,gK);
        console.log(tea,ttx);


        var m_alpha_equ = this.m_alpha_equation; //2
        var m_beta_equ = this.m_beta_equation; //1
        var h_alpha_equ = this.h_alpha_equation; //1
        var h_beta_equ = this.h_beta_equation; //3
        var n_alpha_equ = this.n_alpha_equation; //2
        var n_beta_equ = this.n_beta_equation; // 1



        var mexp = this.m_exp; //3
        var mac = this.m_alpha_magnitude; //0.100000000000000
        var math = this.m_alpha_threshold; //-0.100000000000000
        var mas =this.m_alpha_slope; //-0.100000000000000
        var mbc = this.m_beta_magnitude;//4
        var mbth = this.m_beta_threshold; //-65
        var mbs = this.m_beta_slope;//-0.055555555555556
        console.log(mexp, mac, math, mas, mbc, mbth, mbs);

        var hexp =this.h_exp; //1
        var hac = this.h_alpha_magnitude; //0.070000000000000
        var hath = this.h_alpha_threshold; //-65
        var has = this.h_alpha_slope; //-0.050000000000000
        var hbc = this.h_beta_magnitude; //1
        var hbth = this.h_beta_threshold; //-35
        var hbs = this.h_beta_slope; //-0.100000000000000

        console.log(hexp, hac, hath, has, hbc, hbth, hbs);




        var nexp = this.n_exp; //4
        var nac = this.n_alpha_magnitude; //0.010000000000000
        var nath = this.n_alpha_threshold; //-55
        var nas = this.n_alpha_slope;//-0.100000000000000

        var nbc = this.n_beta_magnitude;//0.125000000000000
        var nbth = this.n_beta_threshold; //-65
        var nbs = this.n_beta_slope;//-0.012500000000000
        console.log(nexp, nac, nath, nas, nbc, nbth, nbs);


        var s0 = this.s1_time1[0];
        var s1 = this.s1_time1[1];
        var svalue2 = this.s1_v1;
        var s3 = this.s1_time2[0];
        var s4 = this.s1_time2[1];
        var svalue5 =this.s1_v2;


        const ileak_data = [];
        const ina_data = [];
        const ik_data = [];
        const p_data = [];
        const q_data = [];
        const iuser_data = [];
        const gna_data = [];
        const gk_data = [];
        const guser_data = [];
        var IstimArr = [];
        var Ileak = [];
        var dt = 0.0001;
        Ileak[0] = 0;
        var I_Naflag;
        var rec_time = 0;
        var time_data = [];
        var m_data = [];
        var n_data = [];
        var h_data = [];

        var v_data = [];

        make_Istim();


        let iterate = 1;
        let stim_counter = 0;
        while (iterate < IstimArr.length) {

            iterate++;
            let changestepflag = 1;

            while (changestepflag) {
                changestepflag = 0;
                m[1] = m[0];
                n[1] = n[0];
                h[1] = h[0];
                V[1] = V[0];
                // p[1] = p[0];
                // q[1] = q[0];
                Ileak[1] = Ileak[0];
                I_Naflag = true;



                const predictordV1 = find_dv(IstimArr[stim_counter]);


                m[3] = m[0];
                n[3] = n[0];
                // p[3] = p[0];
                // q[3] = q[0];
                h[3] = h[0];
                V[3] = V[0];
                Ileak[3] = Ileak[0];
                I_Naflag = false;


                const predictordV2 = find_dv(IstimArr[stim_counter]);

                var corrector_dv = 0.5 * (predictordV1 + predictordV2);

                m[2] = m[0];
                n[2] = n[0];
                p[2] = p[0];
                q[2] = q[0];
                h[2] = h[0];
                Ileak[2] = 0.5 * (Ileak[0] + Ileak[3]);
                V[2] = V[0];

                m[2] = 0.5 * (m[0] + m[3]);
                h[2] = 0.5 * (h[0] + h[3]);
                n[2] = 0.5 * (n[0] + n[3]);
                // p[2] = 0.5 * (p[0] + p[3]);
                // q[2] = 0.5 * (q[0] + q[3]);


                const errorval1 = Math.abs(predictordV1 - corrector_dv);
                var errorval2 = errorval1 / dt;

                var errorval5 = Math.abs(n[3] - n[2]);


                if (errorval2 > 30 || errorval5 > 0.01) {

                    changestepflag = 1;
                    m[0] = m[1];
                    n[0] = n[1];
                    h[0] = h[1];
                    //  p[0] = p[1];
                    //  q[0] = q[1];
                    V[0] = V[1];
                    Ileak[0] = Ileak[1];
                    dt = dt / 2;
                }


            }

            stim_counter++;
            m[0] = m[2];
            n[0] = n[2];
            //p[0] = p[2];
            //q[0] = q[2];
            h[0] = h[2];
            V[0] = V[2];

            Ileak[0] = Ileak[2];



            V[0] = V[0] + corrector_dv;


            if (errorval2 < 10 && errorval5 < 0.003 && dt < 0.0001) {
                dt = dt * 2
            }
            rec_time = rec_time+dt;

            time_data.push(parseFloat(rec_time.toFixed(3)));



            //iuser_data.push(I_User[0].toFixed(3) * -1);
            //guser_data.push(g_User[0].toFixed(3));

            console.log(V[0]);
            m_data_.push(parseFloat(m[0].toFixed(3)));
            h_data_.push(parseFloat(h[0].toFixed(3)));
            n_data_.push(parseFloat(n[0].toFixed(3)));
            v_data_.push(parseFloat(V[0].toFixed(3)) * 1000);
            ileak_data.push(parseFloat(Ileak[0].toFixed(3)));
            ina_data.push(parseFloat(I_Na[0].toFixed(3)));
            ik_data.push(parseFloat(I_K[0].toFixed(3)));
            gna_data.push(parseFloat(g_Na[0].toFixed(3)));
            gk_data.push(parseFloat(g_K[0].toFixed(3)));
        }


        if(this.multi){
            this.v_data = this.v_data.concat(v_data_);
            this.m_data = this.m_data.concat(m_data_);
            this.n_data = this.n_data.concat(n_data_);
            this.h_data = this.h_data.concat(h_data_);
        }else{
            this.v_data = v_data_;
            this.m_data = m_data_;
            this.n_data = n_data_;
            this.h_data = h_data_;
        }

















    };

    @action runVoltageclamp = () => {




        var I_Na = [];
        var I_K = [];
        var I_User = [];
        var g_Na = [];
        var g_K = [];
        var g_User = [];

        var m = [];
        var h = [];
        var n = [];
        var p = [];
        var q = [];
        var V = [];


        m[0] = 0.068775;
        h[0] = 0.515186;
        n[0] = 0.35286656;
        //p[0] = 0.068775;
        //q[0] = 0.515186;

        var C = this.Cm;
        V.push(-63.39 / 1000);
        m[0] = 0.068775;
        h[0] = 0.515186;
        n[0] = 0.35286656;


        var g_passNa = this.g_na * 0.000001;
        var g_passK = this.g_k * 0.000001;
        var g_passCl = this.g_cl * 0.000001;

        var ENa = this.ena * 0.001;
        var EK = this.ek * 0.001;
        var ECl = this.ecl * 0.001;

        var gNa = this.g_na_max * 0.000001;
        var gK = this.g_k_max * 0.000001;
        var gCl = this.g_cl * 0.000001;

        console.log(C,g_passCl,g_passK,g_passNa);
        console.log(ENa,EK,ECl);


        const ttx = this.ttx;
        const tea = this.tea;
        var pronase = 0;

        gNa = gNa - gNa * ttx / 100;
        gK = gK - gK * tea / 100;
        console.log(gNa,gK);
        console.log(tea,ttx);


        var m_alpha_equ = this.m_alpha_equation; //2
        var m_beta_equ = this.m_beta_equation; //1
        var h_alpha_equ = this.h_alpha_equation; //1
        var h_beta_equ = this.h_beta_equation; //3
        var n_alpha_equ = this.n_alpha_equation; //2
        var n_beta_equ = this.n_beta_equation; // 1



        var mexp = this.m_exp; //3
        var mac = this.m_alpha_magnitude; //0.100000000000000
        var math = this.m_alpha_threshold; //-0.100000000000000
        var mas =this.m_alpha_slope; //-0.100000000000000
        var mbc = this.m_beta_magnitude;//4
        var mbth = this.m_beta_threshold; //-65
        var mbs = this.m_beta_slope;//-0.055555555555556


        var hexp =this.h_exp; //1
        var hac = this.h_alpha_magnitude; //0.070000000000000
        var hath = this.h_alpha_threshold; //-65
        var has = this.h_alpha_slope; //-0.050000000000000
        var hbc = this.h_beta_magnitude; //1
        var hbth = this.h_beta_threshold; //-35
        var hbs = this.h_beta_slope; //-0.100000000000000






        var nexp = this.n_exp; //4
        var nac = this.n_alpha_magnitude; //0.010000000000000
        var nath = this.n_alpha_threshold; //-55
        var nas = this.n_alpha_slope;//-0.100000000000000

        var nbc = this.n_beta_magnitude;//0.125000000000000
        var nbth = this.n_beta_threshold; //-65
        var nbs = this.n_beta_slope;//-0.012500000000000



        var v1y = this.v1y;
        var v1x = this.v1x;

        var v2y = this.v2y;
        var v2x = this.v2x;

        var v3y =this.v3y;
        var v3x =this.v3x;



        var I_Naflag;
        var time_data = [];
        var rec_time = 0;
        var m_data = [];
        var m_data_ = [];
        var h_data = [];
        var n_data = [];
        var ina_data = [];
        var ik_data = [];
        var i_data = [];
        var i_plot = [];
        var gna_data = [];
        var gk_data = [];





        var Ileak = [];
        var dt = 0.00005;
        Ileak[0] = 0;


        var dv = 0;
        //var dt_check = 0
        //var zero = 0
        //var nan_check = NaN

        function make_VClampStim() {
            var i = 0;
            while (i < v1x * 10) {
                V.push(v1y * 0.001);
                i++;
            }
            i = 0;
            while (i < v2x * 10) {
                V.push(v2y * 0.001);
                i++;
            }
            i = 0;
            while (i < v3x * 10) {
                V.push(v3y * 0.001);
                i++;
            }

        }

        function update_channels_voltage() {

            if (Vo * 1000 === math) {
                math = Number(math) + 0.01
            }
            //if(Vo *1000 == path){
            //	path = Number(math)+0.01
            //}



            var m_alpha = evalrate(m_alpha_equ, mac, math, mas);
            var m_beta = evalrate(m_beta_equ, mbc, mbth, mbs);
            var h_alpha = evalrate(h_alpha_equ, hac, hath, has);
            var h_beta = evalrate(h_beta_equ, hbc, hbth, hbs);
            var n_alpha = evalrate(n_alpha_equ, nac, nath, nas);
            var n_beta = evalrate(n_beta_equ, nbc, nbth, nbs);
            /*p_alpha = evalrate(p_alpha_equ,pac,path,pas)
            p_beta = evalrate(p_beta_equ,pbc,pbth,pbs)
            q_alpha = evalrate(q_alpha_equ,qac,qath,qas)
            q_beta = evalrate(q_beta_equ,qbc,qbth,qbs)*/
            // //console.log('m', m_alpha, m_beta)
            //  c//onsole.log('h', h_alpha, h_beta)//
            //console.log('n', n_alpha, n_beta)

            var m_delta = m_alpha - (m_alpha + m_beta) * m[0];
            var new_m = Math.max(0, m[0] + m_delta * dt * 1000);
            m[0] = Math.min(1, new_m);

            var n_delta = n_alpha - (n_alpha + n_beta) * n[0];
            var new_n = Math.max(0, n[0] + n_delta * dt * 1000);
            n[0]= Math.min(1, new_n);

            var h_delta = h_alpha - (h_alpha + h_beta) * h[0];
            var new_h = Math.max(0, h[0] + h_delta * dt * 1000);
            h[0]= Math.min(1, new_h);
            /*
            	p_delta = p_alpha -(p_alpha+p_beta)*p[0]
            	new_p = Math.max(0,p[0] + p_delta * dt * 1000);
            	new_p1 = Math.min(1,new_p);

            	q_delta = q_alpha -(q_alpha+q_beta)*q[0]
            	new_q = Math.max(0,q[0] + q_delta * dt * 1000);
            	new_q1 = Math.min(1,new_q);*/
            //console.log(m[0], n[0], h[0])
        }


        function evalrate(eq_no, c, th, s) {

            switch (eq_no) {
                case 0:
                    var z = c * Math.exp((Vo * 1000 - th) * s);

                    return z;
                case 1:
                    z = c * (Vo * 1000 - th) / (1 - Math.exp((Vo * 1000 - th) * s));

                    return z;
                case 2:
                    z = c / (1 + Math.exp((Vo * 1000 - th) * s));

                    return z;
                case 3:
                    z = 0;

                    return z




            }
        }


        function find_I() {
            update_channels_voltage();


            if (pronase === 1) {
                h[0] = 1;
            }
            console.log('VO', Vo);
            console.log(ECl,EK,ENa,g_passNa,g_passK,g_passCl);
            var currentNa = g_passNa * 1000000 * (ENa - Vo);
            var currentK = g_passK * 1000000 * (EK - Vo);
            var currentCl = g_passCl * 1000000 * (ECl - Vo);
            Ileak[0] = currentNa + currentK + currentCl;
            var currentHH_Na = gNa * 1000000 * Math.pow(m[0], mexp) * Math.pow(h[0], hexp) * (ENa - Vo);
            var currentHH_K = gK * 1000000 * Math.pow(n[0], nexp) * (EK - Vo);
            //var currentHH_Cl = gCl * 1000000 * Math.pow(p[0],pexp) * Math.pow(q[0],qexp) * (ENa - Vo);

            console.log(h,m);
            console.log(gK,n[0],nexp,EK,Vo);
            console.log(dv,dt,I_leak[0],currentHH_K,currentHH_Na);
            var dI = C * 1000000000 * dv / (dt * 1000) - (Ileak[0] + currentHH_Na + currentHH_K);
            if (I_Naflag) {
                I_Na[0] = currentHH_Na;
                I_K[0] = currentHH_K;
                g_Na[0] = gNa * 1000000 * Math.pow(m[0], mexp) * Math.pow(h[0], hexp);
                g_K[0] = gK * 1000000 * Math.pow(n[0], nexp);
                //g_User[0] = gCl * 1000000 * Math.pow(p[0],pexp) * Math.pow(q[0],qexp);
            }
            //I_User[0] = currentHH_Cl;
            /*if (test_dI > 10000000) {
                dI = (C * 1000000000 * dv / (dt * 1000) - (Ileak[0] + currentHH_Na + currentHH_K)) * 1.0e-9;
            } else {
                dI = C * 1000000000 * dv / (dt * 1000) - (Ileak[0] + currentHH_Na + currentHH_K);
            }
            if (test_dI < 10000000 * -1) {
                dI = (C * 1000000000 * dv / (dt * 1000) - (Ileak[0] + currentHH_Na + currentHH_K)) * 1.0e-9;
            }*/
            console.log(dI);
            return dI;
        }




        var corrector_I2 = undefined;
        var predictor_I1 = undefined;
        var predictor_I2 = undefined;
        var corrector_I = undefined;
        var dt2 = 0;
        var I_leak = [];
        I_leak[0] = 0;
        var zero = 0;
        var nan = NaN;
        var dt_check = 0;
        V.splice(0, V.length);



        var iterate = 0;
        var vstim_counter = 0;

        make_VClampStim();

        while (iterate < V.length) {
            iterate++;
            m[1] = m[0];
            n[1] = n[0];
            //p[1] = p[0];
            //q[1] = q[0];
            h[1] = h[0];
            I_leak[1] = I_leak[0];
            var Vo = V[vstim_counter];
            I_Naflag = true;
            predictor_I1 = find_I();
            m[3] = m[0];
            n[3] = n[0];
            //p[3] = p[0];
            //q[3] = q[0];
            h[3] = h[0];
            V[3] = V[0];
            I_leak[3] = I_leak[0];
            I_Naflag = false;
            predictor_I2 = find_I();
            corrector_I = 0.5 * (predictor_I1 + predictor_I2);
            m[2] = m[0];
            n[2] = n[0];
            //p/[2] = p[0];
            //q[2] = q[0];
            h[2] = h[0];
            I_leak[2] = I_leak[0];
            I_leak[2] = 0.5 * (I_leak[0] + I_leak[3]);
            m[2] = 0.5 * (m[0] + m[3]);
            h[2] = 0.5 * (h[0] + h[3]);
            n[2] = 0.5 * (n[0] + n[3]);
            //p[2] = 0.5 * (p[0] + p[3]);
            //q[2] = 0.5 * (q[0] + q[3]);
            m[0] = m[2];
            n[0] = n[2];
            h[0] = h[2];
            //p[0] = p[2];
            //q[0] = q[2];
            I_leak[0] = I_leak[2];
            corrector_I2 = corrector_I;
            if (!zero) {
                zero = 1;
                if (Vo !== nan) {
                    //nan = Vo;
                    //copy_I = corrector_I2;
                }
            } else {
                if (Math.abs(dv) > 0) {
                    //dt = 1.0e-10;
                    dt_check = 41;
                }
                if (dt_check >= 1) {
                    if (dt_check === 40) {
                        //dt = 1.0e-6;
                    }
                    if (dt_check === 1) {
                        //dt = 0.0001;
                    }
                    dt_check--;
                }
                if (vstim_counter < 5) {
                    dv = 0;
                    vstim_counter = vstim_counter + 1;
                } else {
                    //console.log(V[vstim_counter], V[vstim_counter - 1])
                    dv = V[vstim_counter] - V[vstim_counter - 1];
                    vstim_counter = vstim_counter + 1;
                }
            }
            dt2 = dt2 + dt;

            //pv_plot.push(p[0].toFixed(3));
            //qv_plot.push(q[0].toFixed(3));
            //IUserV_plot.push(I_User[0].toFixed(3) * -1);
            //gUserV_plot.push(g_User[0].toFixed(3));
            time_data.push(parseFloat(rec_time.toFixed(2)));
            m_data_.push(parseFloat(m[0].toFixed(3)));
            h_data.push(parseFloat(h[0].toFixed(3)));
            n_data.push(parseFloat(n[0].toFixed(3)));
            ina_data.push(I_Na[0].toFixed(3) * -1);
            ik_data.push(I_K[0].toFixed(3) * -1);
            i_data.push(corrector_I2.toFixed(3) * 1000);
            //i_plot.push([rec_time,corrector_I2.toFixed(3) * 1000]);
            //Ieak_plotv.push(I_leak[0].toFixed(3) * -1);
            gna_data.push(parseFloat(g_Na[0].toFixed(3)));
            gk_data.push(parseFloat(g_K[0].toFixed(3)));

            rec_time = rec_time + 0.01
        }

        //i_data = i_data.slice(100,i_data.length)
        //i_data= i_data.slice(0,i_data.length-100)

        this.v_data = i_data;
        this.m_data = m_data;
        this.n_data= n_data;
        this.h_data = h_data;
        this.ina_data = ina_data;
        this.ik_data = ik_data;
        this.gna_data = gna_data;
        this.gk_data = gk_data;





    };

    @action runHodgkinHuxley = () => {
        let mode = this.mode;
        if (mode === 'Current Clamp' ){
            console.log('Running Current Clamp');
            this.runCurrentClamp();
        }else if (mode === 'Voltage Clamp'){
            this.runVoltageclamp();
            console.log('Running Voltage Clamp');
        }else {
            alert('Unexpected Clamp Mode. Try Again')
        }
    };


    @computed get export_data (){
        let data = [];
        if(this.v_data !== []){
            let tmp_data = new Array(this.v_data.length).fill([]);
            this.export_params.map((value,index) => {

                this[value].map((val,ind)=>{
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

const HHParam = new HH_PARAMS();
export default HHParam

