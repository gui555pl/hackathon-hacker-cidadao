<template>
    <span>
        <v-container pa-0 style="max-width: 100%; margin-top: -64px; position: absolute; margin-left: auto; margin-right: auto; width: 100%;">
            <v-layout mx-1 justify-center v-if="error">
                <v-flex xs12 sm12 md6 lg6 >
                    <app-alert @dismissed="onDismissed" :text="error.message" ></app-alert>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container class="hidden-sm-and-up" style="height: 100vh; width: 100vw; margin-top: -64px;">
            <div class="very-specific-design" id="very-specific-design" style="padding-top: 56px">
                <v-layout justify-center>
                    <v-flex xs4>
                        <v-img contain></v-img>
                    </v-flex>
                </v-layout>
                <!-- 
                <v-layout>
                    <v-flex>
                        <h1 style="margin: 0; padding: 0; color: white; font-weight: 900; font-size: 1.8em; text-align: center;">América Proteção Veicular</h1>
                    </v-flex>
                </v-layout> -->

                <v-layout align-center justify-center>
                    <v-flex xs12 sm12 md6 lg6 xl6>
                        <v-card flat dark color="rgb(1, 11, 22, 0)">
                            <v-card-text>
                                <v-container>
                                    <form @submit.prevent="onsignIn">
                                        <v-layout row>
                                            <v-flex xs12>
                                                <v-text-field 
                                                class="v-text-field-input"                                        name="email"
                                                label="Email"
                                                placeholder=" "
                                                id="email"
                                                v-model="email"
                                                type="email"
                                                required ></v-text-field>
                                            </v-flex>
                                        </v-layout>
                                        <v-layout row>
                                            <v-flex xs12>
                                                <v-text-field 
                                                name="password"
                                                label="Senha"
                                                placeholder=" "
                                                id="password"
                                                v-model="password"
                                                type="password"
                                                required ></v-text-field>
                                            </v-flex>
                                        </v-layout>
                                        
                                        <v-layout>
                                            <v-btn color="#356884" dark type="submit" :disabled="loading" :loading="loading">
                                                Entrar
                                                <span slot="loader" class="custom-loader">
                                                    <v-icon light>cached</v-icon>
                                                </span>
                                            </v-btn>
                                            <v-btn flat to="/signup" :disabled="loading" :loading="loading">
                                                Não sou registrado
                                                <span slot="loader" class="custom-loader">
                                                    <v-icon light>cached</v-icon>
                                                </span>
                                            </v-btn>
                                        </v-layout>
                                        <v-divider class="divisor"></v-divider>
                                        <v-layout column>
                                        <v-btn ed color="error" @click="google">
                                            <v-icon color="white" left>fab fa-google</v-icon>
                                            <span>Login com o Google</span>
                                        </v-btn>
                                        <v-btn rounded color="primary" @click="facebook">
                                            <v-icon color="white" left>fab fa-facebook</v-icon>
                                        <span>Login com o Facebook</span>
                                        </v-btn>
                                        </v-layout>
                                    </form>
                                </v-container>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </div>
        </v-container>
        <v-container style="margin-top: -64px;" class="hidden-xs-only" mt-5>
            <v-layout justify-center>
                <v-flex xs4>
                    <v-img contain></v-img>
                </v-flex>
            </v-layout>
            <!-- 
            <v-layout>
                <v-flex>
                    <h1 style="margin: 0; padding: 0; color: white; font-weight: 900; font-size: 1.8em; text-align: center;">América Proteção Veicular</h1>
                </v-flex>
            </v-layout> -->

            <v-layout align-center justify-center>
                <v-flex xs12 sm12 md6 lg6 xl6>
                    <v-card text dark color="rgb(1, 11, 22, 0)">
                        <v-card-text>
                            <v-container>
                                <form @submit.prevent="onsignIn">
                                    <v-layout row>
                                        <v-flex xs12>
                                            <v-text-field 
                                            class="v-text-field-input"                                        name="email"
                                            label="Email"
                                            placeholder=" "
                                            id="email"
                                            v-model="email"
                                            type="email"
                                            required ></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row>
                                        <v-flex xs12>
                                            <v-text-field 
                                            name="password"
                                            label="Senha"
                                            placeholder=" "
                                            id="password"
                                            v-model="password"
                                            type="password"
                                            required ></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                    
                                    <v-layout>
                                        <v-btn color="#356884" dark type="submit" :disabled="loading" :loading="loading">
                                            Entrar
                                            <span slot="loader" class="custom-loader">
                                                <v-icon light>cached</v-icon>
                                            </span>
                                        </v-btn>
                                        <v-btn text to="/signup" :disabled="loading" :loading="loading">
                                            Não sou registrado
                                            <span slot="loader" class="custom-loader">
                                                <v-icon light>cached</v-icon>
                                            </span>
                                        </v-btn>
                                    </v-layout>
                                    <v-divider class="divisor"></v-divider>
                                    <v-layout column>
                                    <v-btn rounded color="error" @click="google">
                                        <v-icon color="white" left>fab fa-google</v-icon>
                                        <span>Login com o Google</span>
                                    </v-btn>
                                    <v-btn rounded color="primary" @click="facebook">
                                        <v-icon color="white" left>fab fa-facebook</v-icon>
                                    <span>Login com o Facebook</span>
                                    </v-btn>
                                    </v-layout>
                                </form>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </span>
</template>
<script>
export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },
    mounted(){
        var $el = $("#very-specific-design");
        var elHeight = $el.outerHeight();
        var elWidth = $el.outerWidth();
        var height, width, scale, origin;
        height = $(window).height();
        width = $(window).width(); 
        console.log('height: '+height+'\n');
        console.log('e a width: '+width);
        scale = Math.min(
            width / elWidth,    
            height / elHeight
        );
        $el.css({
            transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
        });
        $(window).resize(function(){
            if(!this.verify){
                height = $(window).height();
                width = $(window).width(); 
                console.log('height: '+height+'\n');
                console.log('e a width: '+width);
                scale = Math.min(
                    width / elWidth,    
                    height / elHeight
                );
                $el.css({
                    transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
                });
            }
        });
    },
    computed: {
        user (){
           return this.$store.getters.user
        },
        error (){
            return this.$store.getters.error
        },
         loading (){
            return this.$store.getters.loading
        },
        verify (){
            if (typeof window.cordova !== "undefined"){
                return false //pc
            }else{
                return true //celular
            }
        },
    },
      watch: {
        user(value){
            if (value !== null && value !== undefined){
                this.$router.push('/home')
            }
        }
    },
    methods: {
        onsignIn () {
            this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
        },
        onDismissed () {
            console.log('dismiss alert')
            this.$store.dispatch('clearError')
        },
        google() {
            this.$store.dispatch('signUserGoogle')
        },
        facebook() {
            this.$store.dispatch('signUserFacebook')
        }
    }
}
</script>
<style>
    .very-specific-design{
        width: 400px;
        height: 600px;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transform-origin: center center;
    }
    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }
    .divisor{
        margin-top: 20px;
        margin-bottom:20px;
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
