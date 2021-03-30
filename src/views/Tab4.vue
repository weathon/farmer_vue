<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Records</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Records</ion-title>
        </ion-toolbar>
      </ion-header>
      <br />
      <ion-segment
        @ionChange="segmentChanged($event)"
        mode="ios"
        value="d"
        style="border-radius: 50px; width: 60%; margin: 0 auto"
      >
        <ion-segment-button value="d" style="border-radius: 50px">
          <ion-label>Delivery Record</ion-label>
        </ion-segment-button>
        <ion-segment-button value="c" style="border-radius: 50px">
          <ion-label style="border-radius: 0px">Contract Record</ion-label>
        </ion-segment-button>
      </ion-segment>
      <ion-item>
        <ion-button
          size="small"
          class="roundbutton"
          id="tab4Button0"
          v-on:click="switchGrain(0)"
          enable="true"
          >MFA 1</ion-button
        >&nbsp;
        <ion-button
          size="small"
          class="roundbutton"
          id="tab4Button1"
          v-on:click="switchGrain(1)"
          enable="false"
          >MFA 2</ion-button
        >&nbsp;
        <ion-button
          size="small"
          class="roundbutton"
          id="tab4Button2"
          v-on:click="switchGrain(2)"
          enable="false"
          >Cargill A</ion-button
        >&nbsp;
        <ion-button
          size="small"
          class="roundbutton"
          id="tab4Button3"
          v-on:click="switchGrain(3)"
          enable="false"
          >Cargill B</ion-button
        >
      </ion-item>
      <ion-item>
        <ion-col size="3" class="table">
          <b>Crops</b>
        </ion-col>
        <ion-col size="3" class="table">
          <b>Amount</b>
        </ion-col>
        <ion-col size="3" class="table">
          <b>Price</b>
        </ion-col>
        <ion-col size="3" class="table">
          <b>Status</b>
        </ion-col>
      </ion-item>
      <ion-list>
        <ion-item>
          <ion-col size="3" class="table"> Corn </ion-col>
          <ion-col size="3" class="table"> 510 bushel </ion-col>
          <ion-col size="3" class="table"> $1,625 </ion-col>
          <ion-col size="3" class="table" style="color: green">
            Deliveried
          </ion-col>
        </ion-item>

        <ion-item>
          <ion-col size="3" class="table"> Soybean </ion-col>
          <ion-col size="3" class="table"> 600 bushel </ion-col>
          <ion-col size="3" class="table"> $8,400 </ion-col>
          <ion-col size="3" class="table" style="color: green">
            Deliveried
          </ion-col>
        </ion-item>

        <ion-item>
          <ion-col size="3" class="table"> Corn </ion-col>
          <ion-col size="3" class="table"> 500 bushel </ion-col>
          <ion-col size="3" class="table"> $1,200 </ion-col>
          <ion-col size="3" class="table" style="color: orange">
            In Process
          </ion-col>
        </ion-item>
      </ion-list>
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

<style>
ion-segment-button {
  --border-radius: 50px;
}
ion-segment {
  border-radius: 50px;
  width: 60%;
  margin: 0 auto;
}

.scroll {
  overflow: scroll;
}
[enable="false"] {
  --background: lightgray;
  color: black;
}
[enable="true"] {
  --background: gold;
  color: black;
}
.table {
  text-align: center;
}
</style>