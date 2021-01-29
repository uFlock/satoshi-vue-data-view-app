<template>
    <div class="hello">
        <div class="col-lg-6 container mt-3">
            <div class="card text-center">
                <div class="card-header" style="background: #e3f2fd">
                    Simple Profile
                </div>
                <div class="card-body justify-content-center">
                    <div class="container">
                        <div class="row">
                            <div class="col col-lg-3"><b>User Name</b></div>
                            <div class="col col-lg-3">{{username}}</div>
                            <div class="col col-lg-3"><b>Age</b></div>
                            <div class="col col-lg-3">{{age}}</div>
                            <div class="col col-lg-3"><b>Score</b></div>
                            <div class="col col-lg-3">{{score}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "UserProfile",
    computed: {
        ...mapGetters({username: "getUsername", age: "getAge", score: "getScore"})
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
