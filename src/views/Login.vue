<template>
  <ion-content class="ion-padding" id="loginpop" style="position: relative">
    <br />
    <br />
    <br />
    <br />

    <div>
      <ion-card style="position: absolute; top: 20%; width: 85%">
        <ion-item>
          <br />
          <ion-card-title>Welcome,</ion-card-title>
          <!-- <br/> -->
          <div style="color: gray">Sign in to continue</div>
          <ion-label position="floating" style="color: lightgray"
            >User Name</ion-label
          >
          <ion-input id="username"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating" style="color: lightgray"
            >Password</ion-label
          >
          <ion-input type="password" id="psw"></ion-input>
        </ion-item>
        <ion-item lines="none">
          <a slot="end"><b>Reset Password</b></a>
        </ion-item>
        <br />
        <ion-row>
          <ion-col size="6">
            <ion-button
              expand="block"
              style="background-color: "
              @click="openreg()"
              >Register</ion-button
            >
          </ion-col>
          <ion-col size="6">
            <ion-button expand="block" v-on:click="login()">Sign In</ion-button>
          </ion-col>
        </ion-row>
      </ion-card>
    </div>
  </ion-content>
</template>

<script lang="ts">
import reg from "@/views/register.vue";

import {
  IonCard,
  IonInput,
  IonLabel,
  IonItem,
  IonCardTitle,
  IonContent,
  IonButton,
  IonCol,
  IonRow,
  modalController,
  alertController,
} from "@ionic/vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "myLogin",
  data() {
    return {
      content: "Content",
    };
  },
  components: {
    IonCard,
    IonInput,
    IonLabel,
    IonItem,
    IonCardTitle,
    IonContent,
    IonButton,
    IonCol,
    IonRow,
  },
  created: function () {
    //   setTimeout(modalController.dismiss,1000)
  },
  methods: {
    async presentAlert() {
      const alert = await alertController.create({
        header: "Password Error",
        message: 'Please retry or click "Reset Password"',
        buttons: ["OK"],
      });
      return alert.present();
    },
    async openreg() {
      const modal = await modalController.create({
        component: reg,
        backdropDismiss: false,
      });
      return modal.present();
    },
    login() {
      // @ts-ignore
      const username = document.getElementById("username").value;
      // @ts-ignore
      const psw = document.getElementById("psw").value;
      const fd = new FormData();
      fd.append("username", username);
      fd.append("password", psw);

      fetch("http://127.0.0.1:8000/auth/jwt/login", {
        method: "POST",
        body: fd,
      }).then((response) => {
        if (response.ok) {
          modalController.dismiss();
        }
        else
        {
          this.presentAlert();
        }
      });

      // if (success) modalController.dismiss();
      // else this.presentAlert();
    },
  },
});
</script>
<style>
#loginpop {
  /* --background: url("https://images.unsplash.com/photo-1559915075-7290c8f71407?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")
    no-repeat center center / cover; */

  --background: url("https://images.unsplash.com/photo-1586294839852-650d52bb6923?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")
    no-repeat center center / cover;
}
/* 为什么直接Style不行 */
</style>

