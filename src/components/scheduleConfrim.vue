<template>
  <ion-content id="popcard">
    <!-- <ion-title> -->
    <ion-list>
      <ion-list-header>Schedule</ion-list-header>
      <!-- <ion-item lines="full"> -->
        <ion-item lines="full">
        <ion-label>Date</ion-label>
        <!-- <ion-label style="color: darkgray" ></ion-label> -->
        <ion-input
          id="date"
          slot="end"
          v-bind:value="Date"
          disabled=true
        ></ion-input>
      </ion-item>

            <!-- <ion-item lines="full"> -->
        <ion-item lines="full">
        <ion-label>Station</ion-label>
        <!-- <ion-label style="color: darkgray" ></ion-label> -->
        <ion-input
          id="station"
          slot="end"
          v-bind:value="Station"
          disabled=true
        ></ion-input>
      </ion-item>

            <!-- <ion-item lines="full"> -->
        <ion-item lines="full">
        <ion-label>Amount(Bushels)</ion-label>
        <!-- <ion-label style="color: darkgray" ></ion-label> -->
        <ion-input
          id="amount"
          slot="end"
          v-bind:value="Amount"
        ></ion-input>
      </ion-item>

      <!-- <ion-item lines="full"> -->
        <ion-item lines="full">
        <ion-label>Moisture (%)</ion-label>
        <!-- <ion-label style="color: darkgray" ></ion-label> -->
        <ion-input
          id="moisture"
          slot="end"
          v-bind:value="Moisture"
        ></ion-input>
      </ion-item>


      <!-- <ion-item lines="full"> -->
        <ion-item lines="full">
        <ion-label>Crop</ion-label>
        <!-- <ion-label style="color: darkgray" ></ion-label> -->
        <ion-input
          id="crop"
          slot="end"
          v-bind:value="Crop"
        ></ion-input>
      </ion-item>
    </ion-list>
    <br />
    <ion-button expand="block" v-on:click="c()">Confrim</ion-button>
  </ion-content>
</template>

<script lang="ts">
import {
  IonItem,
  IonContent,
  modalController,
  toastController,
} from "@ionic/vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "con",
  props: {
    // buyer: String,
    // grain: String,
    // month: String,
    // price: String,
    Station: String,
    Date: String,
    Amount: String,
    Moisture: String,
    Crop: String,
    Editable: Boolean,
  },
  components: {
    IonItem,
    IonContent,
  },
  data() {
    return {
      content: "Content",
    };
  },
  methods: {
    async openToast() {
      const toast = await toastController.create({
        message: "Successfully confirmed.",
        duration: 2000,
        color: "dark",
        // translucent: true
      });
      return toast.present();
    },
    c() {
      modalController.dismiss();
      this.openToast();
    },
  },
});
</script>

<style>
#popcard {
  --padding-start: 20px;
  --padding-end: 20px;
}

ion-segment-button {
  --border-radius: 50px;
}
ion-segment {
  border-radius: 50px;
  width: 60%;
  margin: 0 auto;
}
</style>
