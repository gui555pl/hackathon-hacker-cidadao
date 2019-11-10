<template>
    <div style="width:100%; height:100%; background-color: #FBFBFF; padding-top: 64px;">
        <v-card-text style="padding-top: 0px;">
            <v-container v-if=" 
            ocorrencia.already_arrived &&
            ((user== 'bombeiro')&& ocorrencia.arrived_bombeiro==false
            ||(user== 'bptran')&& ocorrencia.arrived_bptran==false 
            ||(user== 'cttu')& ocorrencia.arrived_cttu==false
            ||(user== 'pm')&ocorrencia.arrived_pm==false
            ||(user== 'prf')&ocorrencia.arrived_prf==false
            ||(user== 'samu')& ocorrencia.arrived_samu==false) " 
            style="transition: 0.5s" ma-0 pa-0>
                <v-layout my-4>
                    <v-flex xs12 >
                        <v-btn @click="trueToFirebase()" style="text-transform: none; width: 100%; border-radius: 20px; font-size: 1.2rem; height: 45px; background: #3C78D8; color: #fff;">Cheguei!</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container ma-0 pa-0>
                <v-layout column>
                    <v-flex xs12 sm6 md6 lg4 xl4 style="padding: 0px">
                        <v-card style="background-color: white;">    
                            <v-card-title style="background-color: #E0E0E0;">
                                <v-layout>
                                    <v-flex style="text-align: left">
                                        Ocorrência: {{ocorrencia.number}}
                                    </v-flex>
                                </v-layout>
                            </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text style="text-align: right; padding-left: 0; padding-top: 0; padding-bottom: 0;  font-style: italic; ">Criado em {{ocorrencia.creation_date}} às {{ocorrencia.creation_time}}</v-card-text>
                            <v-card-text style="padding-top: 26px;">
                                <v-layout column v-if="ocorrencia.lat !== undefined">
                                    <v-flex xs12 class="fonteCard">
                                        Local : 
                                    </v-flex>
                                    <v-flex xs12> 
                                        <gps name="example"></gps>
                                    </v-flex>
                                </v-layout>
                                <v-layout v-else>
                                    <v-flex class="fonteCard">
                                        Local : 
                                    </v-flex>
                                    <v-flex class="fonteCard" style="text-align: right">
                                        {{ocorrencia.logradouro}}
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                            <v-card-text style="padding-top: 16px;">
                                <v-layout>
                                    <v-flex class="fonteCard">
                                        Referência: 
                                    </v-flex>
                                    <v-flex class="fonteCard" style="text-align: right">
                                        {{ocorrencia.ponto_referência}}
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                            <v-card-text style="padding-top: 16px;">
                                <v-layout>
                                    <v-flex class="fonteCard">
                                        Quantidade de vítimas:
                                    </v-flex>
                                    <v-flex class="fonteCard" style="text-align: right">
                                        {{ocorrencia.qtdVitimas}}
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                            <v-card-text style="padding-top: 16px;">
                            <v-layout>
                                <v-flex class="fonteCard">
                                    Trânsito parado
                                </v-flex>
                                <v-flex class="fonteCard" style="text-align: right">
                                    {{ocorrencia.transito}}
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                            <v-card-text style="padding-top: 16px;">
                                <v-layout>
                                    <v-flex class="fonteCard">
                                        Tipo de Ocorrência:
                                    </v-flex>
                                    <v-flex class="fonteCard" style="text-align: right">
                                        {{ocorrencia.tipo_ocorrencia}}
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                            <v-card-text style="padding-top: 16px;">
                            <v-layout>
                                <v-flex class="fonteCard" style="width:50%;">
                                    Comentário
                                </v-flex>
                                <v-flex class="fonteCard" style="text-align: right; width:50%;">
                                    {{ocorrencia.comentario}}
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                            <v-card-text v-if="orgaoPresente(ocorrencia)" style="padding-top: 10px;" class="fonteCard">
                                Agentes no local:
                                <v-chip-group
                                    multiple
                                    active-class="primary--text"
                                >
                                    <v-chip v-if="ocorrencia.arrived_bptran" color="yellow">
                                        <span style="color: white">BPTRAN</span>
                                    </v-chip>
                                    <v-chip v-if="ocorrencia.arrived_cttu" color="green">
                                        <span style="color: white">CTTU</span>
                                    </v-chip>
                                    <v-chip v-if="ocorrencia.arrived_samu" color="red">
                                        <span style="color: white">SAMU</span>
                                    </v-chip>
                                    <v-chip v-if="ocorrencia.arrived_pm" color="black">
                                        <span style="color: white">PM</span>
                                    </v-chip>
                                    <v-chip v-if="ocorrencia.arrived_prf" color="blue">
                                        <span style="color: white">PRF</span>
                                    </v-chip>
                                    <v-chip v-if="ocorrencia.arrived_bombeiro" color="red">
                                        <span style="color: white">Bombeiros</span>
                                    </v-chip>
                                </v-chip-group>
                            </v-card-text>
                            <v-card-text v-if="!orgaoPresente(ocorrencia)" style="padding-bottom: 0px;">
                                <div class="fonteCard">Agentes no local:</div>
                                <div style="padding-top: 16px; padding-bottom: 16px;">Ainda não há órgãos no local</div>
                            </v-card-text>
                        </v-card>
                        <samu v-if="(user == 'samu')& ocorrencia.arrived_samu == true& ocorrencia.status_samu=='aberto'"></samu>
                        <cttu v-if="(user == 'cttu')& ocorrencia.status_cttu=='aberto'"></cttu>
                        <pm v-if="(user == 'pm') & ocorrencia.arrived_pm == true& ocorrencia.status_pm=='aberto'"></pm>
                        <bptran v-if="(user == 'bptran') & ocorrencia.arrived_bptran == true& ocorrencia.status_bptran=='aberto'"></bptran>
                        <prf v-if="(user == 'prf') & ocorrencia.arrived_prf == true& ocorrencia.status_prf=='aberto'"></prf>
                        
                        <v-flex xs12 md6 mx-auto pt-4 >
                            <v-btn v-if="
                            (user== 'bombeiro')& ocorrencia.status_bombeiro=='andamento'
                            ||(user== 'bptran')& ocorrencia.status_bptran=='andamento' 
                            ||(user== 'cttu')& ocorrencia.status_cttu=='andamento'
                            ||(user== 'pm')&ocorrencia.status_pm=='andamento'
                            ||(user== 'prf')&ocorrencia.status_prf=='andamento'
                            ||(user== 'samu')& ocorrencia.status_samu=='andamento' " 
                            color="#FFF" 
                            @click="statusFinalizado">Atendimento finalizado</v-btn>
                        </v-flex>
                    </v-flex>
                </v-layout>
            </v-container>                
        </v-card-text>
    </div>

</template>

<script>
import samu from '../components/Samu'
import pm from '../components/PM'
import cttu from '../components/CTTU'
import firebase from 'firebase'
import bptran from '../components/BPTran'
import bombeiro from '../components/Bombeiro.vue'
import gps from '../components/Gps'
import prf from '../components/prf'
export default {
    fiery: true,
    data() {
        return {
            ocorrencia: {},
            id: ''
        }
    },
      components: {
        samu: samu,
        pm: pm,
        bptran: bptran,
        bombeiro:bombeiro,
        cttu: cttu,
        prf: prf,
        gps: gps
    },
    methods: {
        orgaoPresente(ocorrencia){
            if(ocorrencia.arrived_bombeiro || ocorrencia.arrived_bptran || ocorrencia.arrived_cttu || ocorrencia.arrived_pm || ocorrencia.arrived_prf || ocorrencia.arrived_samu){
                return true;
            }else{
                return false;
            }
        },
        async trueToFirebase(){
            let oc = this.$store.getters.getSelectedOcorrencia
            var splits = oc['.uid'].split('/', 6)

            var tempid = splits[4]
            if (this.user == 'samu'){
                await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                    arrived_samu: true   
                })
            }
            if (this.user == 'cttu'){
                await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                    arrived_cttu: true   
                })
            }
             if (this.user == 'pm'){
                await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                    arrived_pm: true   
                })
            }
             if (this.user == 'bombeiro'){
                await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                    arrived_bombeiro: true   
                })
            }
             if (this.user == 'prf'){
                await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                    arrived_prf: true   
                })
            }
             if (this.user == 'bptran'){
                await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                    arrived_bptran: true   
                })
            }
        },
        async statusFinalizado(){
            let oc = this.$store.getters.getSelectedOcorrencia
            var splits = oc['.uid'].split('/', 6)

            var tempid = splits[4]
            if(this.user=='samu'){
                await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                    status_samu: 'finalizado' 
                })
                
            }
            if(this.user=='cttu'){
                await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                    status_cttu: 'finalizado' 
                })
                
            }
            if(this.user=='pm'){
                await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                    status_pm: 'finalizado' 
                })
                
            }
            if(this.user=='prf'){
                await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                    status_prf: 'finalizado' 
                })
                
            }
            if(this.user=='bptran'){
                await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                    status_bptran: 'finalizado' 
                })
                
            }
            this.$router.push('ocorrencias')
        }
     
    },
    created (){
            

    },
    mounted (){
        let oc = this.$store.getters.getSelectedOcorrencia
            var splits = oc['.uid'].split('/', 6)

            var tempid = splits[4]
            console.log(tempid)
            let that = this
            this.$fiery(firebase.firestore().collection('ocorrencias').doc(tempid), {
                onSuccess: (todos) => {
                    console.log(todos)
                    that.ocorrencia = todos
                    let cord = {
                        lat: that.ocorrencia.lat,
                        long: that.ocorrencia.long
                    }
                    that.$store.commit('setCord', cord)
                }
            })

    },
    computed: {

        tipo(){
            return this.$store.getters.getUser
        },
        user () {
            console.log(this.$store.getters.getUser)
            return this.$store.getters.getUser
        },
    },
    created () {
        
    }
}
</script>