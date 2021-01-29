<template>
    <div id="app">
        <div id="nav">
            <nav class="navbar navbar-expand-sm navbar-light" style="background-color: #e3f2fd;">
                <button class="navbar-toggler" style="margin: 5px" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/about">About</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <router-view/>
    </div>

</template>

<style>
#app {
    font-family: "Noto Sans", Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #1890A9;
}

</style>
