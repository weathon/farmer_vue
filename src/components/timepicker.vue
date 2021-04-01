<template>
  <ion-backdrop v-if="backdrop"></ion-backdrop>

  <ion-header>
    <ion-toolbar>
      <ion-title
        ><b>{{ date.split(",")[1] }}</b></ion-title
      >
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
        '5:30-5:50',
        '5:50-6:10',
        '6:10-6:30',
        '6:30-6:50',
        '6:50-7:10',
        '7:10-7:30',
        '7:30-7:50',
        '7:50-8:10',
        '8:10-8:30',
        '8:30-8:50',
        '8:50-9:10',
        '9:10-9:30',
        '9:30-9:50',
        '9:50-10:10',
        '10:10-10:30',
        '10:30-10:50',
        '10:50-11:10',
        '11:10-11:30',
        '11:30-11:50',
      ]"
      v-bind:key="time"
    >
      <ion-item @click="openModal(time)">
        <ion-col size="6" class="table">
          <b>{{ time }}</b>
        </ion-col>
        <ion-col
          size="6"
          class="table"
          style="color: green"
          v-if="ifopen[time] == 'Open'"
        >
          {{ ifopen[time] }}
        </ion-col>
        <ion-col
          size="6"
          class="table"
          style="color: orange"
          v-if="ifopen[time] == 'Scheduled'"
        >
          {{ ifopen[time] }}
        </ion-col>
        <ion-col
          size="6"
          class="table"
          style="color: gray"
          v-if="ifopen[time] == 'Closed'"
        >
          {{ ifopen[time] }}
        </ion-col>
      </ion-item>
    </ion-list>
    <ion-item @click="openToast('This window is closed.')">
      <ion-col size="6" class="table">
        <b>9:10 - 9:30</b>
      </ion-col>
      <ion-col size="6" class="table" style="color: red"> Closed </ion-col>
    </ion-item>

    <ion-item @click="presentAlert()">
      <ion-col size="6" class="table">
        <b>9:30 - 9:50</b>
      </ion-col>
      <ion-col size="6" class="table" style="color: orange">
        Schedueled
      </ion-col>
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
  toastController,
  alertController,
  IonSegmentButton,
  IonSegment,
  IonLabel,
  IonMenuButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { chevronBackOutline } from "ionicons/icons";
import con from "@/components/scheduleConfrim.vue";

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
    IonSegmentButton,
    IonSegment,
    IonLabel,
    IonMenuButton,
  },
  setup() {
    return { chevronBackOutline };
  },
  data() {
    const backdrop = false;
    const ifopen = {
      "5:30-5:50": "Open",
      "5:50-6:10": "Open",
      "6:10-6:30": "Open",
      "6:30-6:50": "Open",
      "6:50-7:10": "Open",
      "7:10-7:30": "Open",
      "7:30-7:50": "Open",
      "7:50-8:10": "Open",
      "8:10-8:30": "Open",
      "8:30-8:50": "Open",
      "8:50-9:10": "Open",
      "9:10-9:30": "Open",
      "9:30-9:50": "Open",
      "9:50-10:10": "Open",
      "10:10-10:30": "Open",
      "10:30-10:50": "Open",
      "10:50-11:10": "Open",
      "11:10-11:30": "Open",
      "11:30-11:50": "Open",
    };
    return { backdrop, ifopen };
  },
  methods: {
    async openModal(time) {
      this.backdrop = true;
      const modal = await modalController.create({
        //@ts-ignore
        component: con,
        // componentProps: [
        //   "AAAAAAAAAAAAA",
        //   "AAAAA",
        //   "AAAAA",
        //   "AAAAAA",
        //   "AAAAA",
        //   false,
        // ],
        cssClass: "popup",
      });
      console.log(time);

      modal.onWillDismiss().then((d: any) => (this.backdrop = false));
      modal.onDidDismiss().then((d: any) => (this.ifopen[time] = "Scheduled"));

      //@ts-ignore
      console.log(this.ifopen);
      return modal.present();
    },
    async openToast(message) {
      const toast = await toastController.create({
        message: message,
        duration: 2000,
        color: "dark",
        // translucent: true
      });
      return toast.present();
    },

    async conCan() {
      const alert = await alertController.create({
        message: "Are you sure you want to cancel the schedule?",
        buttons: [
          {
            text: "Yes",
            role: "cancel",
            cssClass: "danger",
            handler: (blah) => {
              console.log("Confirm Cancel:", blah);
            },
          },
          {
            text: "No",
            role: "cancel",
            cssClass: "danger",
            handler: (blah) => {
              console.log("Confirm Cancel:", blah);
            },
          },
        ],
      });
      return alert.present();
    },

    async presentAlert() {
      const alert = await alertController.create({
        header: "You have schedueled this window.",
        message:
          "You have schedueled this window on " +
          this.date +
          ". You can cancel your schedule if you want.",
        cssClass: "alert",
        buttons: [
          {
            text: "Cancel the schedule",
            role: "cancel",
            cssClass: "danger",
            handler: (blah) => {
              this.conCan();
            },
          },
          {
            text: "OK",
            role: "ok",
            cssClass: "danger",
            handler: (blah) => {
              console.log("Confirm Cancel:", blah);
            },
          },
        ],
      });
      return alert.present();
    },
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

.popup {
  --width: 90%;
  --height: 80%;
  --border-radius: 10px;
}

ion-backdrop {
  opacity: 0.3;
}
</style>
