<template>
    <v-container>
        <v-layout column>
             <v-flex xs12 sm6 md6 lg4 xl4 v-for="(texto, i) in textos" :key="i" style="padding: 5px">
                     <v-card
                        elevation-5
                        style="border-radius: 3px"
                        class="mx-auto"
                    >
                        <v-card-title style="background: #E0E0E0">
                            <v-layout>
                                <v-flex style="text-align: left">
                            <h3 class="fonte" style="font-size:30px; "> {{textos}}</h3>   
                                </v-flex>
                            </v-layout>
                        </v-card-title>
                        <v-card-text>
                            <v-layout>
                                <v-flex>
                                    Local : 
                                </v-flex>
                                <v-flex style="text-align: right">
                                    12345678910
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                        <v-card-text>
                            <v-layout>
                                <v-flex>
                                    Ref: 
                                </v-flex>
                                <v-flex style="text-align: right">
                                    12345678910
                                </v-flex>
                            </v-layout>
                        </v-card-text>    
                        <v-card-text style="text-align: right; padding-left: 0; padding-top: 0; padding-bottom: 0;  font-style: italic; ">Criado em {{data}} às {{hora}}</v-card-text>
                        <v-card-actions style="padding-right: 0; padding-top: 3px;"></v-card-actions>
                     </v-card>
                </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data(){
        return{
            textos: '31231239213',
            data: '13.09.2019',
            hora: '14:59:51'
        }
    }
}
</script>
<style>
.fontes{
        color: white;
        font-size: 50px;
       
    }
</style>