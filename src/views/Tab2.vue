<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Schedule</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Schedule</ion-title>
        </ion-toolbar> 
      </ion-header>
      <ion-item>
                <ion-segment
          scrollable
          @ionChange="segmentChanged($event)"
          mode="md"
          style="width: 100%"
          value="MFA 1"
        >
          <ion-segment-button
            v-for="item in [
              'MFA 1',
              'MFA 2',
              'Cargill 1',
              'Cargill 2',
            ]"
            v-bind:key="item"
            v-bind:value="item"
          >
            <ion-label style="text-transform: capitalize">{{ item }}</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-item>
      <br />
      <div style="width: 100%; text-align: center">
        <Calendar
          style="width: 80%; text-align: center"
          :attributes="attrs"
          @dayclick="onDayClick"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// import { Calendar } from "vue-sweet-calendar";
// import "vue-sweet-calendar/dist/SweetCalendar.css";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  modalController,
} from "@ionic/vue";
// import { Calendar } from 'v-calendar';
// import { CalendarModule } from "ion2-calendar";

import { Calendar } from "v-calendar";
import { defineComponent } from "vue";
import timepicker from "@/components/timepicker.vue";

import { useRouter } from "vue-router";

// import {defineComponent} from 'vue'; and import defineComponent from 'vue'; the second one is not callable
export default defineComponent({
  name: "Tab2",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    Calendar,
    // Calendar,
  },
  data() {
    return {
      config: {
        inline: true,
        position: "center",
        wrap: true,
        defaultDate: new Date(),
      },
      selectedDate: new Date(),
      attrs: [
        {
          highlight: "red",
          dates: new Date(2021, 3, 30),
        },
        {
          highlight: "red",
          dates: new Date(2021, 3, 20),
        },
        {
          highlight: "red",
          dates: new Date(2021, 3, 15),
        },
        {
          highlight: "red",
          dates: new Date(2021, 2, 25),
        },
        {
          highlight: "gray",
          dates: new Date(2021, 3, 3),
        },
        {
          highlight: "gray",
          dates: new Date(2021, 2, 6),
          disabled: true,
        },
      ],
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async openModal() {
      const modal = await modalController.create({
        component: timepicker,
        backdropDismiss: true,
        swipeToClose: true,
        //@ts-ignore
        componentProps:{date:this.selectedDate.ariaLabel}
      });
      return modal.present();
    },

    onDayClick(day) {
      console.log(day);
      //验证是否可行
      this.selectedDate = day;
      this.openModal();
      // this.router.push("/picktime");
    },
    next() {
      console.log(this.selectedDate);
      this.openModal();
    },
    switchGrain(id) {
      //@ts-ignore

      for (let i = 0; i < 4; i++) {
        //@ts-ignore
        document
          .getElementById("tab2Button" + i)
          .setAttribute("enable", "false");
        // console.log(buttonId);
      } //反了？
      const buttonId = "tab2Button" + id.toString();
      //@ts-ignore
      document.getElementById(buttonId).setAttribute("enable", "true");
      // document.getElementById(buttonId).className += " enabled";
      console.log(buttonId);
    },
  },
});
</script>

<style>
.roundbutton {
  --border-radius: 50px;
}
[enable="false"] {
  --background: lightgray;
  color: black;
}
[enable="true"] {
  --background: gold;
  color: black;
}
</style>