<template src="./Login.html"></template>

<script>
import { defineComponent } from 'vue';
import { Form, Field, ErrorMessage, useIsFormDirty } from 'vee-validate';
import { computed } from "vue";


export default defineComponent({
  name: "IniciarSesion",
  data() {
    return {
      viewActive: 1,
      form: {
        email: '',
        password: '',
      },
      errorEmail: false,
      sendValidateEmail: false,
      isDisabled: computed(() => {
        let isDirty = useIsFormDirty();
        return isDirty.value;
      })
    }
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  computed: {

  },
  methods: {
    validateEmail(value) {
      if (this.sendValidateEmail) {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!value || this.form.email === "") {
          this.errorEmail = true;
          return 'Campo requerido.';
        } else if (!regex.test(value)) {
          this.errorEmail = true;
          return 'Por favor ingrese un correo valido.';
        } else {
          this.errorEmail = false;
        }
        return true;
      }
    },

    validEmail() {
      this.sendValidateEmail = true;
      console.log("enviar email")
      this.validateEmail(this.form.email);
      if (!this.errorEmail) {
        console.log("Envio")
        this.viewActive = 2;
      }
    },
    iniciarSesion() {
      console.log("Ir a home");
      this.$router.push('/home')
    },
    mounted() {
      this.form = {
        email: "",
        password: "",
      }
    }
  },
});
</script>

<style scoped src="./Login.css"></style>
