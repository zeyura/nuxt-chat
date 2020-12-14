<template>
    <v-layout column justify-center align-center>
        <v-flex xs12 sm8 md6>Flexes!!! </v-flex>
    </v-layout>
</template>

<script>
//import Logo from '~/components/Logo.vue'

export default {
    sockets: {
        connect: () => {
            console.log("Sock connect!");
        }
    }
};
</script>
