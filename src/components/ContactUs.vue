<template>
  <v-container class="content">
    <h2 display-2 class="contactSuccess">{{response}}</h2>
    <h2 display-2 class="contactError">{{errorResponse}}</h2>
    <form @submit.prevent="submit">
      <v-text-field
          label="*Name"
          required
          v-model="form.name"
          :error-messages="errors.name"
          v-on:input="clearNameError"
      ></v-text-field>
      <v-text-field
          label="*Email"
          required
          v-model="form.email"
          :error-messages="errors.email"
          v-on:input="clearEmailError"
      ></v-text-field>
      <v-textarea
          label="Message"
          auto-grow
          outlined
          rows="7"
          row-height="15"
          v-model="form.message"
      ></v-textarea>
      <v-btn type="submit" depressed color="primary">Send</v-btn>
    </form>
  </v-container>
</template>

<script>
import send from '../../public/send';

export default {
  name: "ContactUs",
  data(){
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      errors: {
        name: '',
        email: ''
      },
      response: '',
      errorResponse: ''
    };
  },
  methods: {
    reset(){
      this.form.name = this.form.email = this.form.message = this.errors.name = this.errors.email = this.response = this.errorResponse = '';
    },
    clearEmailError(){
      this.response = this.errorResponse = this.errors.email = '';
    },
    clearNameError(){
      this.response = this.errorResponse = this.errors.name = '';
    },
    valid(){
      if(!this.form.name){
        this.errors.name = 'Name is required';
        return false;
      }
      if(!this.form.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)){
        this.errors.email = 'Not correct email';
        return false;
      }
      return true;
    },
    async sendForm(){
      // receive server url
      const server =  await send('/env.json','','get');
      this.serverUrl = server && server['SERVER_URL'];
      const {name,email,message} = this.form;
      this.reset();
      const response = await send(this.serverUrl,{contact: {name,email,message}});
      return response && response.message;
    },
    submit(){
      this.form.name = this.form.name.trim();
      this.form.email = this.form.email.trim();
      this.form.message = this.form.message.trim();
      if(!this.valid()) return false;
      this.sendForm().then(response => {
        if(response === false){
          this.errorResponse = 'Something went wrong, Try again';
          this.response = '';
        }
        else{
          this.response = 'Your request has sent successfully';
          this.errorResponse = '';
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .content{
    width: 561px;
    margin: 1.3rem auto;
  }

  .contactSuccess{
    color: #00ff00;
  }

  .contactError{
    color: #ff0000;
  }
</style>