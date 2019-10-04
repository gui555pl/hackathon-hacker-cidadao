<template>
    <v-container>
        <v-layout column>
            <v-flex>
                 <v-text-field
                    label="Logradouro"
                    v-model="logradouro"
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-text-field
                    label="Ponto de referência"
                    v-model="referencia"
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-select
                :items="tipos"
                label="Tipo de ocorrência"
                v-model="tipo"
                return-object
                ></v-select>
            </v-flex>
            <v-flex>
                <v-checkbox v-model="selected" label="BPTRAN" value="BPTRAN"></v-checkbox>
                <v-checkbox v-model="selected" label="CTTU" value="CTTU"></v-checkbox>
                <v-checkbox v-model="selected" label="SAMU" value="SAMU"></v-checkbox>
                <v-checkbox v-model="selected" label="Corpo de Bombeiros" value="Bombeiros"></v-checkbox>
                 <v-checkbox v-model="selected" label="Polícia Militar" value="Polícia Militar"></v-checkbox>
            </v-flex>
            <v-flex>
                <v-layout>
                    <v-spacer></v-spacer>
                    <v-btn to="/ciodes">
                        Abrir ocorrência
                    </v-btn>
                </v-layout>
                
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    fiery: true,
    data () {
        return {
            logradouro: '',
            referencia: '', 
            tipo: {},
            selected: [],
            tipos:['Colisão', 'Atropelamento', 'Capotamento']

        }
    }
}
</script>