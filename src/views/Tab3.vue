<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Notifications</ion-title>
        <ion-buttons slot="end">
          <ion-menu-button auto-hide="false">
            <ion-icon :icon="archiveOutline" />
          </ion-menu-button>
        </ion-buttons>
        <ion-buttons slot="start">
          <ion-button @click="close()">
            <ion-icon :icon="chevronBackOutline" /> Back</ion-button
          >
          <!-- <ion-back-button></ion-back-button> -->
        </ion-buttons>
      </ion-toolbar>
      <!-- </ion-toolbar> -->
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"
            >Notifications
            <ion-buttons slot="end">
              <ion-menu-button auto-hide="false">
                <ion-icon :icon="archiveOutline" />
              </ion-menu-button>
            </ion-buttons>
            <ion-buttons slot="start">
              <ion-button @click="close()">
                <ion-icon :icon="chevronBackOutline" /> Back</ion-button
              ></ion-buttons
            ></ion-title
          >
        </ion-toolbar>
      </ion-header>

      <!-- title="Request from Buyer A"
        content="Buyer A wants 80 tons of green beans before 1/20/2020, offering
                a price of +0.35."
        action="alert('You clicked N1')" -->
      <myMessage
        v-for="message in messages"
        v-bind:key="message"
        v-bind:title="message.title"
        v-bind:content="message.content"
      ></myMessage>

      <!-- </div> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { chevronBackOutline } from "ionicons/icons";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonMenuButton,
  IonButtons,
  modalController,
} from "@ionic/vue";
import { archiveOutline } from "ionicons/icons";
import myMessage from "@/components/Message.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Notifications",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonIcon,
    IonMenuButton,
    IonButtons,
    myMessage,
  },
  setup() {
    const messages = [
      {
        title: "Your contract with MFA is confrimed",
        content:
          "The contract of 500 bushels of rice is confrimed by the buyer. The deliverie month is June.",
      },
      {
        title: "Request from Cargill",
        content:
          "Cargill is requesting 50,000 bushels of corn before April 5, 2021, offering a price of $4.90 per bushel.",
      },

      {
        title: "Your contract with Cargill is confrimed",
        content:
          "The contract of 800 bushels of corn is confrimed by the buyer. The deliverie month is June.",
      },
      {
        title: "Request from MFA",
        content:
          "Cargill is requesting 10,000 bushels of rice before April 6, 2021, offering a price of $4.90 per bushel.",
      },
    ];
    return { archiveOutline, chevronBackOutline, messages };
  },
  methods: {
    close() {
      modalController.dismiss();
    },
  },
});
</script>