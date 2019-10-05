<template>
    <div style="height: 100%; background-color: #a1a1a1; display: flex; align-items: center;">
        <v-container style="padding-top: 64px; max-width: 500px;">
            <v-layout  column>
                <v-layout>
                    <v-flex>
                        <h3>Preencha os campos abaixo:</h3>
                    </v-flex>
                </v-layout>
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
                <v-layout mt-2>
                    <v-flex>
                        <h3>Selecione o agente a ser chamado:</h3>
                    </v-flex>
                </v-layout>
                <v-flex>
                    <v-checkbox hide-details v-model="bptran" label="BPTRAN" :value="true"></v-checkbox>
                    <v-checkbox hide-details v-model="cttu" label="CTTU" :value="true"></v-checkbox>
                    <v-checkbox hide-details v-model="samu" label="SAMU" :value="true"></v-checkbox>
                    <v-checkbox hide-details v-model="bombeiro" label="Corpo de Bombeiros" :value="true"></v-checkbox>
                    <v-checkbox hide-details v-model="pm" label="Polícia Militar" :value="true"></v-checkbox>
                    <v-checkbox hide-details v-model="prf" label="Polícia Rodoviária Federal" :value="true"></v-checkbox>
                </v-flex>
                <v-flex mt-2>
                    <v-layout>
                        <v-spacer></v-spacer>
                        <v-btn @click="finish">
                            Abrir ocorrência
                        </v-btn>
                    </v-layout>
                    
                </v-flex>
            </v-layout>
            <v-layout>
                <v-dialog
                v-model="confirmDialog"
                >
                    <v-card>
                        <v-card-text style="font-weight: 500; font-size: 1.5em; color: black; padding-top: 16px; padding-bottom: 10px;">Ocorrência criada com sucesso!</v-card-text>


                        <v-card-text>
                        Ocorrência confirmada! Os agentes mais próximos dos órgãos selecionados serão direcionados ao local em instantes.
                        </v-card-text>

                        <v-card-actions>
                        <div class="flex-grow-1"></div>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="goHome()"
                        >
                            Voltar à página principal
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
        </v-container>
    </div>
    
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
            pm: false,
            confirmDialog: false

        }
    },
    methods: {
        finish () {
            var today = new Date();
            var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var number = Math.floor(100000000 + Math.random() * 900000000);
            this.$fires.ocorrencias.add({
                number: number,
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
                creation_time: time,
                arrived_samu: false,
                arrived_cttu: false,
                arrived_bptran: false,
                arrived_bombeiro: false,
                arrived_prf: false,
                arrived_pm: false


            })
            this.logradouro = ''
            this.referencia = ''
            this.tipo = {}
            this.bptran = false
            this.samu = false
            this.cttu = false
            this.bombeiro = false
            this.prf = false
            this.pm = false
            this.confirmDialog = true

        },
        goHome(){
            this.$router.push('/ciodes')
        }
       
    }
}
</script>