<template>
  <ion-content class="ion-padding" id="loginpop" style="position: relative">
    <br />
    <br />
    <br />
    <br />

    <div>
      <ion-card style="position: absolute; top: 5%; width: 85%">
        <ion-item>
          <br />
          <ion-card-title>Welcome,</ion-card-title>
          <!-- <br/> -->
          <div style="color: gray">Regrester to continue</div>
          <ion-label position="floating" style="color: lightgray"
            >E-mail</ion-label
          >
          <ion-input id="reusername"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating" style="color: lightgray"
            >Farm Name</ion-label
          >
          <ion-input id="farmname"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating" style="color: lightgray"
            >Farmer Name</ion-label
          >
          <ion-input id="farmername"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating" style="color: lightgray"
            >Phone</ion-label
          >
          <ion-input id="phone"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating" style="color: lightgray"
            >Password</ion-label
          >
          <ion-input type="password" id="repsw"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating" style="color: lightgray"
            >Re-enter Password</ion-label
          >
          <ion-input type="password" id="repsw2"></ion-input>
        </ion-item>
        <br />

        <ion-button expand="block" v-on:click="register()">Confirm</ion-button>
      </ion-card>
    </div>
  </ion-content>
</template>

<script lang="ts">
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
  toastController,
} from "@ionic/vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "reg",
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
    async openToast() {
      const toast = await toastController.create({
        message:
          "registration success! Please wait for the verification email to be sent.",
        duration: 2000,
        color: "dark",
        // translucent: true
      });
      return toast.present();
    },

    register() {
      //sign up
      // @ts-ignore
      const username = document.getElementById("reusername").value;
      // @ts-ignore
      const psd1 = document.getElementById("repsw").value;
      // @ts-ignore
      const psd2 = document.getElementById("repsw2").value;

      if (psd1 != psd2) {
        alert("Password is not the same between two fileds.");
        return;
      }

      const myjson = {
        email: username,
        password: psd1,
        // @ts-ignore
        phone: document.getElementById("phone").value,
        pin: "string",
        // @ts-ignore
        farmername: document.getElementById("farmername").value,
        // @ts-ignore
        farmname: document.getElementById("farmname").value,
      };
      fetch("http://127.0.0.1:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(myjson),
      }).then(async (response) => {
        if (response.ok) {
          // verify
          const toast = await toastController.create({
            message:
              "Registration success! Please wait for the verification email to be sent.",
            duration: 2000,
            color: "dark",
            // translucent: true
          });
          toast.present() //wangjile weiosm cu await
          fetch("http://127.0.0.1:8000/auth/request-verify-token", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: username }),
          }).then((response) => {
            if (response.ok) {
              alert("Please check your email to verify.");
              modalController.dismiss();
            } else {
              alert("Error during request-verify-token");
            }
          });
        } else {
          alert("Error!");
        }
      });
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

