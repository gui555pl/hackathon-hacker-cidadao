<template>
    <div style="width: 100%; height: 100%; background-color: #FBFBFF;">
        <v-container fill-height>
            <v-layout column>
                <v-flex class="centerDiv" shrink>
                    <div>
                        <button id="buttonCheguei" @click="onButtonClick()" class='btn btn--shockwave'> <!--  is-active -->
                            Cheguei
                        </button>
                    </div>
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
        return {
            ocorrencia: {}
        }
    },
    computed: {
         user () {
            console.log(this.$store.getters.getUser)
            return this.$store.getters.getUser
        }
    },
    created (){
        // console.log(this.$store.getters.getSelectedOcorrencia)
        // this.selected = this.$store.getters.getSelectedOcorrencia

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
    methods: {
        onButtonClick(){
            $('#buttonCheguei').addClass('is-active')
            var self = this
            setTimeout(function(){
                self.getGeoRef()
                $('#buttonCheguei').removeClass('is-active')
            } , 1650);
        },
        async getGeoRef () {
            let self = this
         
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition( async function showPosition (position) {	
                    self.lat = position.coords.latitude;
                    self.lon = position.coords.longitude;
                    console.log(self.lat)
                    console.log(self.lon)
                    let cord = {
                        lat: self.lat,
                        long: self.lon
                    }
                    self.ocorrencia.lat = cord.lat
                    self.ocorrencia.long = cord.long
                    let oc = self.$store.getters.getSelectedOcorrencia
                    var splits = oc['.uid'].split('/', 6)

                    var tempid = splits[4]
                    if (self.user == 'samu'){
                        await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                            lat: self.ocorrencia.lat,
                            long: self.ocorrencia.long,
                            already_arrived: true,
                            arrived_samu: true

                            
                        })
                    }
                   if (self.user == 'cttu'){
                        await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                            lat: self.ocorrencia.lat,
                            long: self.ocorrencia.long,
                            already_arrived: true,
                            arrived_cttu: true

                            
                        })
                    }
                    if (self.user == 'pm'){
                        console.log('oi')
                        await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                            lat: self.ocorrencia.lat,
                            long: self.ocorrencia.long,
                            already_arrived: true,
                            arrived_pm: true

                            
                        })
                    }
                   if (self.user == 'prf'){
                        await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                            lat: self.ocorrencia.lat,
                            long: self.ocorrencia.long,
                            already_arrived: true,
                            arrived_prf: true

                            
                        })
                    }
                        if (self.user == 'bptran'){
                        await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                            lat: self.ocorrencia.lat,
                            long: self.ocorrencia.long,
                            already_arrived: true,
                            arrived_bptran: true

                            
                        })
                    }
                   if (self.user == 'bombeiro'){
                        await firebase.firestore().collection('ocorrencias').doc(tempid).update({
                            lat: self.ocorrencia.lat,
                            long: self.ocorrencia.long,
                            already_arrived: true,
                            arrived_bombeiro: true

                            
                        })
                    }

                        

                })
           
            //8sja5otIAzJEWhn2tkNn

            
            this.$router.push('/ocorrencia')
            
            
            }else{
                this.error = "Geolocation is not supported."; 
                
            }
        }
    
    }
}
</script>

<style>
   .btn-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    }

    .btn {
    width: 13.4rem;
    line-height: 13.4rem;
    background: #fff;
    border-radius: 50%;
    text-align: center;
    margin: 1.6rem;
    font-size: 1.5rem;
    font-weight: 700;
    border: none;
    padding: 0;
    position: relative;
    outline: none;
    }

    .btn--shockwave.is-active {
    -webkit-animation: shockwaveJump 1s ease-out;
            animation: shockwaveJump 1s ease-out;
    }
    .btn--shockwave.is-active:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    -webkit-animation: shockwave 1s .65s ease-out;
            animation: shockwave 1s .65s ease-out;
    }
    .btn--shockwave.is-active:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    -webkit-animation: shockwave 1s .5s ease-out;
            animation: shockwave 1s .5s ease-out;
    }

    @-webkit-keyframes shockwaveJump {
    0% {
        -webkit-transform: scale(1);
                transform: scale(1);
    }
    40% {
        -webkit-transform: scale(1.08);
                transform: scale(1.08);
    }
    50% {
        -webkit-transform: scale(0.98);
                transform: scale(0.98);
    }
    55% {
        -webkit-transform: scale(1.02);
                transform: scale(1.02);
    }
    60% {
        -webkit-transform: scale(0.98);
                transform: scale(0.98);
    }
    100% {
        -webkit-transform: scale(1);
                transform: scale(1);
    }
    }

    @keyframes shockwaveJump {
    0% {
        -webkit-transform: scale(1);
                transform: scale(1);
    }
    40% {
        -webkit-transform: scale(1.08);
                transform: scale(1.08);
    }
    50% {
        -webkit-transform: scale(0.98);
                transform: scale(0.98);
    }
    55% {
        -webkit-transform: scale(1.02);
                transform: scale(1.02);
    }
    60% {
        -webkit-transform: scale(0.98);
                transform: scale(0.98);
    }
    100% {
        -webkit-transform: scale(1);
                transform: scale(1);
    }
    }
    @-webkit-keyframes shockwave {
    0% {
        -webkit-transform: scale(1);
                transform: scale(1);
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.15), inset 0 0 1px rgba(0, 0, 0, 0.15);
    }
    95% {
        box-shadow: 0 0 50px rgba(0, 0, 0, 0), inset 0 0 30px rgba(0, 0, 0, 0);
    }
    100% {
        -webkit-transform: scale(2.25);
                transform: scale(2.25);
    }
    }
    @keyframes shockwave {
    0% {
        -webkit-transform: scale(1);
                transform: scale(1);
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.15), inset 0 0 1px rgba(0, 0, 0, 0.15);
    }
    95% {
        box-shadow: 0 0 50px rgba(0, 0, 0, 0), inset 0 0 30px rgba(0, 0, 0, 0);
    }
    100% {
        -webkit-transform: scale(2.25);
                transform: scale(2.25);
    }
    }

    .centerDiv{
        position: absolute;
        margin-top: 0 !important;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>