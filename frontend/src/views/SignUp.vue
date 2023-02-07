<template>
  <div class="sign-up">
    <h1>Signup</h1>
    <form action="" @submit.prevent="submitForm">
      <input
        name="username"
        v-model="username"
        type="email"
        placeholder="username"
      />
      <input
        name="password"
        v-model="password"
        type="password"
        placeholder="password"
      />
      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  methods: {
    submitForm() {
      const formData = {
        username: this.username,
        password: this.password,
        email: this.username,
      };
      axios
        .post("/api/v1/users/", formData)
        .then((response) => {
          this.$router.push("/log-in");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>