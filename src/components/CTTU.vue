<template>
    <div style="width: 100%; height: 100%; background-color: #a1a1a1;">
        <v-container fill-height>
            <v-layout column>
                <h3 class="text-xs-center"> Sub Category </h3>
                        <v-flex>
                            <v-select
                                v-model="subCategoria"
                                :items="items1"
                                label="Select"
                                :rules="[v => !!v || 'SubCategory is required']"
                                required>
                            </v-select>
                        </v-flex>
                  
                        <h3 class="text-xs-center"> I have a GNIB card or I have been registered before</h3>
                           <v-flex>
                            <v-select
                                v-model="gnibCard"
                                :items="items2"
                                label="Select" 
                                required
                                :rules="[v => !!v || 'Gnib Card is required']"
                            >
                            </v-select>
                        </v-flex>
                       
                        <v-flex  v-if="gnibCard == 'Yes'">
                        <h3 class="text-xs-center"> GNIB Number</h3>
                            <v-text-field
                                label="Gnib Number"
                                v-model="gnibnumber"
                                :rules="[v => !!v || 'Gnib Number is required']"
                                >
                            </v-text-field>
                        </v-flex>
                        <v-flex  v-if="gnibCard == 'Yes'">
                            <h3 class="text-xs-center">Expiry date of current permission / GNIB card </h3>
                        <v-menu
                            ref="menu4"
                            v-model="menu4"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px">

                            <template v-slot:activator="{ on }">
                                <v-flex >
                                    <v-text-field
                                        v-model="Expirydate"
                                        label="Expiry date"
                                        readonly
                                        v-on="on"
                                       >
                                    </v-text-field>
                                </v-flex>
                            </template>
                            <v-date-picker
                                ref="picker"
                                v-model="Expirydate"
                                @change="save4">
                            </v-date-picker>
                        </v-menu>
                           
                        </v-flex>
                    
                        <v-flex >
                            <h3 class="text-xs-center"> Given Name</h3>
                            <v-text-field
                                label="Given Name"
                                v-model="givenName"
                                :rules="[v => !!v || 'Given Name is required']"
                                required>
                            </v-text-field>
                        </v-flex>
                        
                     

            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
     
    
}
</script>