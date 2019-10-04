<template>
    <v-container>
        <v-layout column>
            <v-flex>
                 <v-text-field
                    label="Logradouro"
                    v-model="logradouro"
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-text-field
                    label="Ponto de referência"
                    v-model="referencia"
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-select
                :items="tipos"
                label="Tipo de ocorrência"
                v-model="tipo"
                ></v-select>
            </v-flex>
            <v-flex>
                <v-checkbox v-model="bptran" label="BPTRAN" :value="true"></v-checkbox>
                <v-checkbox v-model="cttu" label="CTTU" :value="true"></v-checkbox>
                <v-checkbox v-model="samu" label="SAMU" :value="true"></v-checkbox>
                <v-checkbox v-model="bombeiro" label="Corpo de Bombeiros" :value="true"></v-checkbox>
                <v-checkbox v-model="pm" label="Polícia Militar" :value="true"></v-checkbox>
                <v-checkbox v-model="prf" label="Polícia Rodoviária Federal" :value="true"></v-checkbox>
            </v-flex>
            <v-flex>
                <v-layout>
                    <v-spacer></v-spacer>
                    <v-btn @click="finish">
                        Abrir ocorrência
                    </v-btn>
                </v-layout>
                
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import firebase from 'firebase'
export default {
    fiery: true,
    data () {
        return {
            logradouro: '',
            referencia: '', 
            tipo: {},
            tipos:['Colisão', 'Atropelamento', 'Capotamento'],
            ocorrencias: this.$fiery(firebase.firestore().collection('ocorrencias')),
            bptran: false,
            samu: false,
            cttu: false,
            bombeiro: false,
            prf: false,
            pm: false

        }
    },
    methods: {
        finish () {
            var today = new Date();
            var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            this.$fires.ocorrencias.add({
                logradouro: this.logradouro,
                ponto_referência: this.referencia,
                tipo_ocorrencia: this.tipo,
                bptran: this.bptran,
                samu: this.samu,
                cttu: this.cttu,
                bombeiro: this.bombeiro,
                prf: this.prf,
                pm: this.pm,
                creation_timestamp: Math.floor((new Date().getTime())/1000),
                creation_date : date,
                creation_time: time


            })
            this.logradouro = ''
            this.referencia = ''
            this.tipo = {

            }
        }
    }
}
</script>