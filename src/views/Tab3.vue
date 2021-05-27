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
      <h1 v-if="loading">Loading</h1>

      <div v-if="loading == false">
        <myMessage
          v-for="message in mymessages"
          v-bind:key="message"
          v-bind:title="message.title"
          v-bind:content="message.content"
        ></myMessage>
      </div>
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
// async function fetchMessage() {

// }
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
  data() {
    // const messages = [];
    return { mymessages: [] };
  },
  methods: {
    close() {
      modalController.dismiss();
    },
    async fetchMessages() {
      this.loading = false;
      console.log("Get data");
      // return []
      const response = await fetch(
        "https://farmer.weathon.top/api/getMessages?archived=false",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      //https://stackoverflow.com/questions/61228241/how-do-i-get-fetch-result-from-api-to-store-as-a-global-variable
      return data;
      // .then((data) => {
      //   if (data.ok) {
      //     console.log(typeof(data.json()));
      //     //ts-ignore
      //     // this.mymessages = data.json();
      //   }
      // });
    },
  },
  setup() {
    const loading = true;
    // const messages = [];
    // this.fetchMessages();
    return { archiveOutline, chevronBackOutline, loading };
  },
  async mounted() {
    console.log("mounted")
    // this.loading=false //zheligaikeyi shangmianbuxing
    this.mymessages= await this.fetchMessages();//zhiqianhuihuaxian
    this.loading =false;
  },
});
</script>