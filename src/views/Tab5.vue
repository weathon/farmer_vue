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
      <profile v-if="currentTab.profile"></profile>
      <buyer v-if="currentTab.buyers"></buyer>
      <crops v-if="currentTab.crops"></crops>
      <stations v-if="currentTab.stations"></stations>
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
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonItem,
  IonInput,
} from "@ionic/vue";
// import ExploreContainer from '@/components/ExploreContainer.vue';
import History from "@/components/History.vue";
import profile from "@/Settings/Profile.vue";
import buyer from "@/Settings/buyers.vue";
import crops from "@/Settings/crops.vue";
import stations from "@/Settings/stations.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tab4",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    History,
    profile,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonItem,
    IonInput,
    stations,
    crops,
    buyer,
  },
  data() {
    const profileA = true;
    const currentTab = {
      profile: true,
      buyers: false,
      stations: false,
      crops: false,
      about: false,
    };
    return { profileA, currentTab };
  },
  methods: {
    segmentChanged(e) {
      const mydict = {
        Profile: "profile",
        "Prefer Buyers": "buyers",
        "Prefer Stations": "stations",
        "Prefer Crops": "crops",
        About: "about",
      };
      console.log(mydict[e.detail.value]);
      this.currentTab = {
        profile: false,
        buyers: false,
        stations: false,
        crops: false,
        about: false,
      };
      this.currentTab[mydict[e.detail.value]] = true;
    },
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
});
</script>

<style scoped>
.as {
  visibility: collapse;
}
</style>