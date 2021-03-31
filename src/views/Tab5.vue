<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Settings</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-segment
        scrollable
        @ionChange="segmentChanged($event)"
        mode="md"
        style="width: 100%"
        value="Profile"
      >
        <ion-segment-button
          v-for="item in [
            'Profile',
            'Prefer Buyers',
            'Prefer Stations',
            'Prefer Crops',
            'About',
          ]"
          v-bind:key="item"
          v-bind:value="item"
        >
          <ion-label style="text-transform: capitalize">{{ item }}</ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
// import ExploreContainer from '@/components/ExploreContainer.vue';
import History from "@/components/History.vue";

export default {
  name: "Tab4",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, History },
  methods: {
    switchGrain(id) {
      //@ts-ignore

      for (let i = 0; i < 4; i++) {
        //@ts-ignore
        document
          .getElementById("tab4Button" + i)
          .setAttribute("enable", "false");
        // console.log(buttonId);
      } //反了？
      const buttonId = "tab4Button" + id.toString();
      //@ts-ignore
      document.getElementById(buttonId).setAttribute("enable", "true");
      // document.getElementById(buttonId).className += " enabled";
      console.log(buttonId);
    },
  },
};
</script>
