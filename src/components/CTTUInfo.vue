<template>
    <div style="width: 100%; height: 100%;">
        <v-container  style="width: 100%; height:100%;">
            <v-layout column>                 
                <v-flex>
                    <h3 class="text-xs-center">Lesão</h3>
                    <v-select
                        disabled
                        v-model="ocorrencia.vitimas"
                        :label="ocorrencia.vitimas" 
                    >
                    </v-select>
                </v-flex>
                <v-flex v-if="temLesao == false">
                    <h3 class="text-xs-center">Placa do carro</h3>
                    <v-text-field
                        disabled
                        v-model="ocorrencia.placa"
                        :label="ocorrencia.placa" 
                    >
                    </v-text-field>
                </v-flex>
                <v-flex>
                    <h3 class="text-xs-center">Qtd. de vítimas</h3>
                    <v-select
                        disabled
                        v-model="ocorrencia.qtdVitimas"
                        :label="ocorrencia.qtdVitimas" 
                    >
                    </v-select>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    fiery: true,
    data(){
        
        return{
            ocorrencia: this.$fiery(firebase.firestore().collection('ocorrencias').doc(this.$store.getters.getSelectedOcorrencia['.uid'].split('/', 6)[4])),
            lesao: '',
            localLesao:'',
            atendimento: ''
        }
    },
    created(){
    },
    computed:{
        temLesao(){
            return this.ocorrencia.lesao=='Não houve lesão' || this.ocorrencia.lesao == ''
        },
        user () {
            console.log(this.$store.getters.getUser)
            return this.$store.getters.getUser
        }
    },
    mounted (){
        console.log('depois do firebase')
        console.log(this.ocorrencia)
    },
    methods:{
    }
}
</script>