<template>
  <ion-content id="popcard">
    <!-- <ion-title> -->
    <ion-list>
      <ion-item lines="full">
        <h1><b>Confirmation</b></h1>
        <br />
        <br />
        &nbsp;
      </ion-item>
      <!-- </ion-title> -->
      <ion-item lines="full">
        <ion-label>Buyer</ion-label>
        <ion-note slot="end"
          ><b>{{ buyer }}</b></ion-note
        >
      </ion-item>

      <ion-item lines="full">
        <ion-label>Month</ion-label>
        <ion-note slot="end"
          ><b>{{ Month }}</b></ion-note
        >
      </ion-item>

      <!-- <ion-item lines="full">
        <ion-label>Time</ion-label>

        <ion-segment
          @ionChange="segmentChanged($event)"
          mode="ios"
          value="d"
          style="border-radius: 50px; width: 60%; margin: 0 auto"
          expand="block"
          round=true
        >
          <ion-segment-button value="e" style="border-radius: 50px">
            <ion-label>Early {{ Month }}</ion-label>
          </ion-segment-button>
          <ion-segment-button value="l" style="border-radius: 50px">
            <ion-label style="border-radius: 0px">Late {{ Month }}</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-item> -->

      <ion-item lines="full">
        <ion-label>Price per bsh.</ion-label>
        <ion-note slot="end"
          ><b>{{ Aprice }}</b></ion-note
        >
      </ion-item>

      <ion-item lines="full">
        <ion-label>Amount(bsh.)</ion-label>
        <!-- <ion-label style="color: darkgray" ></ion-label> -->
        <ion-input
          id="username"
          slot="end"
          placeholder="Type Here"
          type="number"
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
  name: "confrim",
  props: {
    // buyer: String,
    // grain: String,
    // month: String,
    // price: String,
    buyer: String,
    Month: String,
    Aprice: String,
    closed: String,
    crop: String,
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
    async fetchMessages() {
      console.log("Get data");
      // return []
      const mydata = {
        crop: this.crop,
        deliverieMonth: this.Month,
        buyer: this.buyer,
        contractAmount: 0,
        deliveriedAmount: 0,
        unitPrice: 0,
      };
      const response = await fetch("http://127.0.0.1:8000/creatRecord", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mydata),
      });
      return response.ok;
    },
    async openToast() {
      const toast = await toastController.create({
        message: "Successfully confirmed.",
        duration: 2000,
        color: "dark",
        // translucent: true
      });
      return toast.present();
    },
    async c() {
      const ok = await this.fetchMessages(); //zhelijiumeiwenti huang gegechulai
      if (ok) {
        //kuohaowenti
        modalController.dismiss();
        this.openToast();
      } else {
        alert("Error!");
      }
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
[round="true"] {
  border-radius: 50px;
  width: 60%;
  margin: 0 auto;
}
</style>
