<template>
  <ion-content>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ date.split(",")[1] }}</ion-title>
        <ion-buttons slot="start">
          <ion-button @click="close()">
            <ion-icon :icon="chevronBackOutline" /> Back</ion-button
          >
          <!-- <ion-back-button></ion-back-button> -->
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-list
      v-for="time in [
        '5:30 - 6:00',
        '6:00 - 6:30',
        '6:30 - 7:00',
        '7:00 - 7:30',
        '7:30 - 8:00',
        '8:30 - 9:00',
      ]"
      v-bind:key="time"
    >
      <ion-item>
        <ion-col size="6" class="table">
          <b>{{ time }}</b>
        </ion-col>
        <ion-col size="6" class="table"> 2/5 </ion-col>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
import {
  modalController,
  IonBackButton,
  IonButtons,
  IonContent,
  IonToolbar,
  IonHeader,
  IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { chevronBackOutline } from "ionicons/icons";

export default defineComponent({
  name: "timepicker",
  props: { date: String },
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonToolbar,
    IonHeader,
    IonIcon,
  },
  setup() {
    return { chevronBackOutline };
  },
  methods: {
    close() {
      modalController.dismiss();
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

.table {
  text-align: center;
}
</style>
