<template>
    <div style="width: 100%; height: 100%;">
        <v-container  style="width: 100%; height:100%;">
            <v-layout column>                 
                        <h3 class="text-xs-center">Lesão</h3>
                           <v-flex>
                            <v-select
                                disabled
                                v-model="lesao"
                                :items="items2"
                                label="Selecione o tipo de lesão" 
                            >
                            </v-select>
                        </v-flex>
                           <v-flex v-if="temLesao== false">
                                <h3 class="text-xs-center">Local da lesão</h3>
                            <v-select
                                disabled
                                v-model="localLesao"
                                :items="items3"
                                label="Selecione o local da lesão" 
                            >
                            </v-select>
                        </v-flex>
                        <h3 class="text-xs-center">Unidade de atendimento</h3>
                           <v-flex>
                            <v-select
                                disabled
                                v-model="atendimento"
                                :items="items4"
                                label="Selecione a unidade de atendimento" 
                            >
                            </v-select>
                        </v-flex>
                       <v-btn @click="salvar()">Salvar Informações</v-btn>
                        
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
            vitimas:'1',
            items1:['1','2','3','4','5 ou mais'],
            lesao: 'Não houve lesão',
            items2:['Escoriação','Escoriação','Ferimentro','Fratura aberta','Fratura Fechada','Perfuração arma branca','Perfuração arma de fogo'],
            localLesao:'Dorso',
            items3:['Cranio','Face','Pescoço','Dorso','Torax','Abdômem'],
            items4:['UPA - Unidade de Pronto Atendimento - Tipo III Torrões','PA Nova Descoberta – Solano Trindade','UPA - Caxangá','UPA - Tipo III Lagoa Encantada','Unidade de Pronto Atendimento Maria Esther Souto Carvalho','Upinha 24h Dr Moacyr André Gomes'],
            atendimento: 'UPA - Unidade de Pronto Atendimento - Tipo III Torrões',
            ocorrencia:{},
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
                }
            })
    },
    methods:{
      async  salvar(){
            let oc = this.$store.getters.getSelectedOcorrencia
            var splits = oc['.uid'].split('/', 6)
            var tempid = splits[4]
            await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                lesao: this.lesao,
                localLesao:this.localLesao,
                atendimento:this.atendimento,
                status_samu:'andamento'
            })
            this.$router.push('/ocorrencias')   
    }
    
}}
</script>