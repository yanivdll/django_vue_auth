<template>
  <div class="log-in">
    <h1>Login</h1>
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
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LogIn",
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      const formData = {
        username: this.username,
        password: this.password,
      };
      axios
        .post("/api/v1/token/login/", formData)
        .then((response) => {
          console.log(response);
          const token = response.data.auth_token;
          this.$store.commit("setToken", token);
          axios.defaults.headers.common["Authorization"] = `Token ${token}`;
          localStorage.setItem("token", token);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>