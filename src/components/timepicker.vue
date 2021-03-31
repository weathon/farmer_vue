<template>
    <ion-header>
      <ion-toolbar>
        <ion-title><b>{{ date.split(",")[1] }}</b></ion-title>
        <ion-buttons slot="start">
          <ion-button @click="close()">
            <ion-icon :icon="chevronBackOutline" /> Back</ion-button
          >
          <!-- <ion-back-button></ion-back-button> -->
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  <ion-content>

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ date.split(",")[1] }}</ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-list
      v-for="time in [
        '5:30 - 5:50',
        '5:50 - 6:10',
        '6:10 - 6:50',
        '6:50 - 7:10',
        '7:10 - 7:50',
        '7:50 - 6:10',
        '8:10 - 6:50',
        '8:50 - 6:10',
        '8:50 - 6:10',
        '8:50 - 6:10',
        '8:50 - 6:10',
        '8:50 - 6:10',
        '8:50 - 6:10',
        '8:50 - 6:10',
        '8:50 - 6:10',
        '8:50 - 6:10',
        '8:50 - 6:10',
        '8:50 - 6:10',
      ]"
      v-bind:key="time"
    >
      <ion-item>
        <ion-col size="6" class="table">
          <b>{{ time }}</b>
        </ion-col>
        <ion-col size="6" class="table" style="color: green"> Open </ion-col>
      </ion-item>
    </ion-list>
    <ion-item>
      <ion-col size="6" class="table">
        <b>9:10 - 9:30</b>
      </ion-col>
      <ion-col size="6" class="table" style="color: red"> Closed </ion-col>
    </ion-item>

    <ion-item>
      <ion-col size="6" class="table">
        <b>9:30 - 9:50</b>
      </ion-col>
      <ion-col size="6" class="table" style="color: orange"> Schedueled </ion-col>
    </ion-item>
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
