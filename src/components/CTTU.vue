<template>
    <div style="width: 100%; height: 100%; background-color: #a1a1a1;">
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
                                :items="items1"
                                label="Selecione a quantidade de vítimas"
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
            vitimas1:'',
            vitimas:'',
            items1:['1','2','3','4','5 ou mais'],
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

        }
    },
    methods:{
        salvar(){
            this.vitimas='',
            this.vitimas1='',
            this.items1=['1','2','3','4','5 ou mais'],
            this.lesao= '',
            this.items2=['Não houve lesão','Escoriação','Ferimentro','Fratura aberta','Fratura Fechada','Perfuração arma branca','Perfuração arma de fogo'],
            this.localLesao='',
            this.items3=['Cranio','Face','Pescoço','Dorso','Torax','Abdômem']
        }
    }
     
    
}
</script>