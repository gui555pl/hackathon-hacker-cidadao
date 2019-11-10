<template>
    <div style="width: 100%; height: 100%;">
        <v-container  style="width: 100%; height:100%;">
            <v-layout  column>
                <h3 class="text-xs-center"> Tipo de colisão </h3>
                        <v-flex>
                            <v-select
                                v-model="vitimas1"
                                :items="items1"
                                label="Selecione o tipo de colisão"
                                >
                            </v-select>
                        </v-flex>
                  
                        <v-flex >
                            <h3 class="text-xs-center">Placa do carro</h3>
                            <v-text-field
                                label="Placa do carro"
                                v-model="placa"
                            >
                            </v-text-field>
                        </v-flex>
                         <h3 class="text-xs-center"> Qtd. de vítimas </h3>
                        <v-flex>
                            <v-select
                                v-model="vitimas"
                                :items="items4"
                                label="Selecione a quantidade de vítimas"
                                >
                            </v-select>
                        </v-flex>
                        <v-flex xs12 sm6 mx-auto>
                        <v-btn style="dark color: #fff;" @click="salvar()">Salvar informações</v-btn>
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
            vitimas1:'',
            vitimas:'',
            items4:['1','2','3','4','5 ou mais'],
            items1:['Frontal','Com ciclista','Choque com veículo parado','Choque com objeto fixo'],
            lesao: '',
            items2:['Não houve lesão','Escoriação','Ferimentro','Fratura aberta','Fratura Fechada','Perfuração arma branca','Perfuração arma de fogo'],
            localLesao:'',
            items3:['Cranio','Face','Pescoço','Dorso','Torax','Abdômem'],
            placa:''
        }
    },
    created(){
    },
    computed:{
        temLesao(){
            return this.lesao=='Não houve lesão' || this.lesao == ''

        },
        user () {
            console.log(this.$store.getters.getUser)
            return this.$store.getters.getUser
        }
    },
    methods:{
   
        async salvar(){
            let oc = this.$store.getters.getSelectedOcorrencia
            var splits = oc['.uid'].split('/', 6)
            var tempid = splits[4]
            console.log(tempid)
            await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                lesao: this.lesao,
                localLesao:this.localLesao,
                status_cttu:'andamento'
            })
            this.$router.push('/ocorrencias')    
        }
    }
     
    
}
</script>