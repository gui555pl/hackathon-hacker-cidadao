<template>
    <div style="height: 100%; background-color: #FBFBFF;">
        <v-container style="padding-bottom: 0; padding-top: 64px; margin-top: 10px;">
            <v-layout>
                <v-select hide-details v-model="selectedStatus" :items="status" return-object label="Selecione o status da ocorrência" outlined></v-select>
            </v-layout>
        </v-container>
        <v-container>
            <v-layout column>
                <h3>{{events}}</h3>
                <v-flex xs12 sm6 md6 lg4 xl4 v-for="(ocorrencia, i) in ocorrencias" :key="i" style="padding: 5px; cursor: pointer" @click="goTo(ocorrencia)"  >  
                    <v-card
                        elevation-5
                        style="border-radius: 10px;"
                        class="mx-auto fonteCard"
                    >
                        <v-card-title  style="background: #E0E0E0">
                            <v-layout>
                                <v-flex style="text-align: left">
                                    
                                    {{ocorrencia.number}}
                                </v-flex>
                            </v-layout>
                        </v-card-title>
                        <v-card-text style="padding-top: 16px;">
                            <v-layout>
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
                                    Ponto de Referência: 
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
                        <v-card-text v-if="orgaoPresente(ocorrencia)" style="padding-top: 16px;" class="fonteCard">
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
                        <v-card-text style="padding: 10px" v-if="!orgaoPresente(ocorrencia)">
                            <div class="fonteCard">Agentes no local:</div>
                            Não há agentes presentes no local
                        </v-card-text>
                        <v-card-text style="text-align: right; padding-left: 0; padding-top: 0; padding-bottom: 0; font-weight: 500; font-style: italic; ">Criado em {{ocorrencia.creation_date}} às {{ocorrencia.creation_time}}</v-card-text>
                        <v-card-actions style="padding-right: 0; padding-top: 3px;"></v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    fiery: true,
    data() {
        return {
            status: [ 
                {text: 'Em aberto', value: 'aberto'},
                {text: 'Em andamento', value: 'andamento'}, 
                {text: 'Encerrados', value: 'finalizado'}
            ],
            selectedStatus: {text: 'Em aberto', value: 'aberto'},
            aberto: this.$fiery(firebase.firestore().collection('ocorrencias'), {
                query: q => q.where( this.$store.getters.getUser,'==', true).where('status_' + this.$store.getters.getUser,'==', 'aberto').orderBy('creation_timestamp', 'desc'),
            }),
            andamento: this.$fiery(firebase.firestore().collection('ocorrencias'), {
                query: q => q.where( this.$store.getters.getUser,'==', true).where('status_' + this.$store.getters.getUser,'==', 'andamento').orderBy('creation_timestamp', 'desc'),
            }),
            finalizado: this.$fiery(firebase.firestore().collection('ocorrencias'), {
                query: q => q.where( this.$store.getters.getUser,'==', true).where('status_' + this.$store.getters.getUser,'==', 'finalizado').orderBy('creation_timestamp', 'desc'),
            })
        }
    },
    created(){
 
    },
    methods: {
        goTo (ocorrencia) {
            this.$store.commit('setOcorrencia', ocorrencia)
            if(ocorrencia.already_arrived == false) {
                this.$router.push('/cheguei')

            }else{
                this.$router.push('/ocorrencia')
            }
        },
        orgaoPresente(ocorrencia){
            if(ocorrencia.arrived_bombeiro || ocorrencia.arrived_bptran || ocorrencia.arrived_cttu || ocorrencia.arrived_pm || ocorrencia.arrived_prf || ocorrencia.arrived_samu){
                return true;
            }else{
                return false;
            }
        }
    },
    computed: {
        user () {
            console.log(this.$store.getters.getUser)
            return this.$store.getters.getUser
        },
        ocorrencias () {
            if (this.selectedStatus.value == 'aberto') {
                return this.aberto
            }else if (this.selectedStatus.value == 'andamento') {
                console.log(this.andamento)
                return this.andamento
            }else if (this.selectedStatus.value == 'finalizado') {
                return this.finalizado
            } 
        },
        events () {
           return this.selectedStatus.text 
        } 
    }
}
</script>
<style>
    .titlePendencias{
        color: white;
        font-size: 50px;
        color: #021b39;
    }
    .titlePendencias2{
        color: white;
        font-size: 25px;
        color: #021b39;
    }
    .fonteCard{
        font-size: 16px !important;
        font-weight: 500;
        color: rgba(0, 0, 0, 1) !important;
    }
</style>