<template>
    <div v-if="showRoute()" class="toolbar" dark>
        <v-container style="width: 100%; max-width: 100%" ma-0 px-1 py-0 fill-height>
            <v-layout ma-0 pa-0 fill-height>
                <v-flex pl-4 align-self-center style="text-align: left;">
                    <v-icon color="#0D0106">fas fa-bars</v-icon>
                </v-flex>
                <v-flex align-self-center>
                    <img class="middle" style="height: 50px;"  src="../../imagens/logo-novo.png"/>
                </v-flex>
                <v-flex v-if="tipo == 'samu'" align-self-center>
                    <img class="middle" style="height: 50px;"  src="../../imagens/samu png.png"/>
                </v-flex>
                <v-flex v-if="tipo == 'cttu'" align-self-center>
                    <img class="middle" style="height: 50px;"  src="../../imagens/organizacao-cttu.png"/>
                </v-flex>
                <v-flex pr-4 align-self-center style="text-align: right;">
                    <v-flex @click="$router.push('/')" style="padding: 0; margin: 0;">
                        <v-icon color="#0D0106">fas fa-sign-out-alt</v-icon>
                    </v-flex>
                </v-flex>
            </v-layout>
        </v-container>
    </div>        
</template>

<style> 
.toolbar{
    z-index: 999;
    width: 100%; 
    height: 64px; 
    background: rgba(226, 226, 226, 0); 
    position: fixed;
    transform: translateY(0px);
}
.middle{
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
}
</style>

<script>
    export default {
        name: 'AppToolbar',
        data(){
            return{
            }
        },
        created(){
            console.log('a rota é ' + this.$route.meta.show)
        },
        methods: {
            showRoute(){
                return this.$route.meta.show
            },
        },
        computed: {
            
        tipo(){
            return this.$store.getters.getUser
        }
        },
        
    }
</script>