<template>
    <div>
        <UserProfile v-if="loggedIn"/>
        <UserLogin v-else/>
    </div>
</template>

<script>

import UserLogin from "@/components/UserLogin";
import UserProfile from "@/components/UserProfile";

import {mapGetters} from "vuex";

export default {
    name: "Home",
    components: {
        UserProfile,
        UserLogin
    },
    computed: {
        ...mapGetters({loggedIn: "getUserLoginStatus"})
    }
};
</script>
