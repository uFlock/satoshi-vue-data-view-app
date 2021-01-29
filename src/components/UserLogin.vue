<template>
    <div class="col-lg-8 container mt-3">
        <div v-if="showSubmitError" class="alert alert-danger" role="alert">
            {{ submitError }}
        </div>
        <div class="card text-center">
            <div class="card-header" style="background: #e3f2fd">
                Simple Login Form
            </div>
            <div class="card-body">
                <form @submit.prevent="submitForm" class="row g-3 justify-content-center">
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-floating">
                                    <input v-model="formUsername"
                                           id="username"
                                           type="text"
                                           class="form-control"
                                           :class="usernameValidClass"
                                           placeholder="Username"
                                           aria-label="Username"
                                           maxlength="20"
                                           required
                                    />
                                    <label for="username">Username</label>
                                </div>
                            </div>
                            <div class="col-lg-12 mt-1">
                                <div class="form-floating">
                                    <input v-model="formPassword"
                                           id="password"
                                           type="password"
                                           class="form-control"
                                           :class="passwordValidClass"
                                           maxlength="25"
                                           placeholder="Password"
                                           aria-label="Password"
                                           aria-required="true"
                                           required
                                    />
                                    <label for="username">Password</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 mt-2">
                            <button v-if="!submittingForm"
                                    type="submit"
                                    class="col-lg-12 btn"
                                    :class="submitButtonDisabled ? 'btn-secondary' : 'btn-success'"
                                    :disabled="submitButtonDisabled"
                            >
                                Sign In
                            </button>
                            <button v-else
                                    class="col-lg-12 btn btn-success"
                                    disabled
                            >
                                Signing In...
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions } from "vuex";

const SERVICE_UNAVAILABLE = 'Service Unavailable';

export default {
    name: "UserLogin",
    data: () => {
        return {
            formUsername: "",
            formPassword: "",
            submittingForm: false,
            showSubmitError: false,
            submitError: '',
        }
    },
    computed: {
        usernameValidClass() {
            return this.formUsername.length >= 3 ? 'is-valid' : '';
        },
        passwordValidClass() {
            return this.formPassword.length >= 8 ? 'is-valid' : '';
        },
        submitButtonDisabled() {
            return this.formUsername.length < 3 || this.formPassword.length < 8;
        }
    },
    methods: {
        ...mapActions({ submitLoginForm: 'submitLoginForm' }),
        async submitForm() {

            this.submittingForm = true;
            this.showSubmitError = false;
            this.submitError = '';

            const form = {
                username: this.formUsername,
                password: this.formPassword
            };

            //todo explain different ways of handling this
            try {
                await this.submitLoginForm(form);
            } catch (error) {

                this.showSubmitError = true;
                this.submittingForm = false;

                this.submitError = error || SERVICE_UNAVAILABLE;
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
    color: #1890A9;
}

label {
    padding: 5px;
    display: block;
}

</style>
