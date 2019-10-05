<template>
    <div style="width: 100%; height: 100%; background-color: #a1a1a1;">
        <v-container  style="width: 100%; height:100%;">
            <v-layout column>
                <h3 class="text-xs-center"> Qtd. de vítimas </h3>
                        <v-flex>
                            <v-select
                                v-model="vitimas"
                                :items="items1"
                                label="Selecione a quantidade de vítimas"
                                >
                            </v-select>
                        </v-flex>
                  
                        <h3 class="text-xs-center">Lesão</h3>
                           <v-flex>
                            <v-select
                                v-model="lesao"
                                :items="items2"
                                label="Selecione o tipo de lesão" 
                            >
                            </v-select>
                        </v-flex>
                           <v-flex v-if="temLesao== false">
                                <h3 class="text-xs-center">Local da lesão</h3>
                            <v-select
                                v-model="localLesao"
                                :items="items3"
                                label="Selecione o local da lesão" 
                            >
                            </v-select>
                        </v-flex>
                       <v-btn @click="salvar()">SALVAR</v-btn>

            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            vitimas:'',
            items1:['1','2','3','4','5 ou mais'],
            lesao: '',
            items2:['Não houve lesão','Escoriação','Ferimentro','Fratura aberta','Fratura Fechada','Perfuração arma branca','Perfuração arma de fogo'],
            localLesao:'',
            items3:['Cranio','Face','Pescoço','Dorso','Torax','Abdômem']
        }
    },
    created(){
    },
    computed:{
        temLesao(){
            return this.lesao=='Não houve lesão' || this.lesao == ''

        }
    },
    methods:{
        salvar(){
            this.vitimas='',
            this.items1=['1','2','3','4','5 ou mais'],
            this.lesao= '',
            this.items2=['Não houve lesão','Escoriação','Ferimentro','Fratura aberta','Fratura Fechada','Perfuração arma branca','Perfuração arma de fogo'],
            this.localLesao='',
            this.items3=['Cranio','Face','Pescoço','Dorso','Torax','Abdômem']
        }
    }
     
    
}
</script>