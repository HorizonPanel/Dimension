<template>
    <v-app>
        <v-fade-transition mode="out-in">
            <router-view />
        </v-fade-transition>
    </v-app>
</template>

<script>
    //import t from "@/plugins/multilanguage";
    //import axios from "axios";

    export default {
        name: "App",
        data: () => ({

        })
    };
</script>