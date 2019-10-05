<template>
    <div style="background-color:white;">
        <v-container>
            <!-- <v-layout justify-center  v-if="error">
                <v-flex xs12 sm12 md6 lg6 >
                    <app-alert style="margin-top: 0%; margin-bottom: 5%;" @dismissed="onDismissed" :text="error.message" ></app-alert>
                </v-flex>
            </v-layout> -->

            <v-layout justify-center>
                <v-flex xs12 align-self-center>

                    <img class="logoImgXs hidden-sm-and-up" src="../../imagens/ativo.png" alt="">
                    <img class="logoImgSm hidden-xs-only hidden-md-and-up" src="../../imagens/ativo.png" alt="">
                    <img class="logoImgMd hidden-sm-and-down hidden-lg-and-up" src="../../imagens/ativo.png" alt="">
                    <img class="logoImgLg hidden-md-and-down hidden-xl-only" src="../../imagens/ativo.png" alt="">
                    <img class="logoImgXl hidden-lg-and-down" src="../../imagens/ativo.png" alt="">
                </v-flex>
            </v-layout>
            <!-- 
            <v-layout>
                <v-flex>
                    <h1 style="margin: 0; padding: 0; color: white; font-weight: 900; font-size: 1.8em; text-align: center;">América Proteção Veicular</h1>
                </v-flex>
            </v-layout> -->

            <v-layout mt-5 align-center justify-center>
                <v-flex xs10 sm7 md5 lg4 xl3>
                    <v-card elevation="0" style="max-width: 380px; margin-left: auto; margin-right: auto;" text dark color="rgb(1, 11, 22, 0)">
                        <v-card-text style="padding: 0; margin: 0;">
                            <v-container>
                                <form @submit.prevent="login()">
                                    <v-flex xs12>
                                        <v-autocomplete
                                            label="Nome do órgão"
                                            :items="orgaos"
                                            v-model="cod"
                                            style="border-radius: 0px"
                                            background-color="white"
                                            color="#757575"
                                            class="v-text-field-input"    
                                            outlined
                                            required
                                            hide-details
                                            light
                                            solo
                                        ></v-autocomplete>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field
                                        light
                                        hide-details
                                        style="border-radius: 0px"
                                        background-color="white"
                                        color="#757575" 
                                        class="v-text-field-input my-4"          
                                        name="password"
                                        label="Senha"
                                        placeholder=""
                                        id="password"
                                        type="password"
                                        required 
                                        outlined
                                        single-line></v-text-field>
                                    </v-flex>
                                    
                                    <v-layout>
                                        <v-flex xs6 mr-1>
                                            <v-btn type="submit" rounded depressed outlined height="56" color="#fff" style="background-color: #3C78D8; border: 1px solid #C2C2C2; width: 100%;" dark :loading="loading">
                                                Entrar
                                                <span slot="loader" class="custom-loader">
                                                    <v-icon style="color: white">cached</v-icon>
                                                </span>
                                            </v-btn>
                                        </v-flex>
                                        <v-flex xs6 ml-1>
                                            <v-btn rounded depressed outlined height="56" color="#fff"  style="background-color: #0D0106; border: 1px solid #C2C2C2; width: 100%;" dark :loading="loading">
                                                Cadastrar
                                                <span slot="loader" class="custom-loader">
                                                    <v-icon style="color: white">cached</v-icon>
                                                </span>
                                            </v-btn>
                                        </v-flex>
                                    </v-layout>
                                    <v-flex xs12 ma-2 style="position: relative; text-align: center;">
                                        <span style="cursor: pointer; color: #424242;">Esqueceu a senha?</span>
                                    </v-flex>
                                    <!-- <v-btn @click="getGeoLocation()">kk</v-btn> -->
                                   
                                </form>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import axios from 'axios'
import gps from '../components/Gps'
export default {
    components:{
        gps:gps
    },
    name: 'login',
    data(){
        return{
            loading: false,
            cod: '',
            lat:'',
            lon:'',
            orgaos: ['ciodes', 'bombeiros', 'bptran', 'cttu', 'pm', 'prf', 'samu']
        }
    },
    mounted(){
        //this.$store.commit('reset')
    },
    computed: {
    },
    beforeCreate(){
        
        


    },
    watch: {
    },
    methods: {
        login(){
            this.$store.commit('setType', this.cod)
            var self = this
            this.loading = true
            setTimeout(function(){ 
                if (self.cod !== 'ciodes'){
                    self.$router.push('/ocorrencias')
                }else {
                    console.log(self.$router.push('/ciodes'))
                }
                
             }, 1000);
        }
       
      
	}
        
    
}
</script>
<style>
    .backgroundLogin{
        height: 100vh;
        width: 100%; 
        background-color: #FBFBFF; 
        display: table;
    }
    .backgroundLogin-cell{
        display: table-cell;
        vertical-align: middle;
    }
    .logoImgXs{
        height: 30vh;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .logoImgSm{
        width: 25vw; 
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .logoImgMd{
        width: 250px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .logoImgLg{
        width: 250px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .logoImgXl{
        width: 250px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }
    .divisor{
        margin-top: 10px;
        margin-bottom:10px;
    }
    .btnGoogle{
        width:276px;
    }
    .v-text-field-input >>> label{
        color: yellow;
    }
    @-moz-keyframes loader {
        from {
        transform: rotate(0);
        }
        to {
        transform: rotate(-360deg);
        }
    }
    @-webkit-keyframes loader {
        from {
        transform: rotate(0);
        }
        to {
        transform: rotate(-360deg);
        }
    }
    @-o-keyframes loader {
        from {
        transform: rotate(0);
        }
        to {
        transform: rotate(-360deg);
        }
    }
    @keyframes loader {
        from {
        transform: rotate(0);
        }
        to {
        transform: rotate(-360deg);
        }
    }
</style>