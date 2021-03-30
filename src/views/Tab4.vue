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

      <ion-item>
        <ion-button
          size="small"
          class="roundbutton"
          id="tab4Button0"
          v-on:click="switchGrain(0)"
          enable="true"
          >Corn</ion-button
        >&nbsp;
        <ion-button
          size="small"
          class="roundbutton"
          id="tab4Button1"
          v-on:click="switchGrain(1)"
          enable="false"
          >Rice</ion-button
        >&nbsp;
        <ion-button
          size="small"
          class="roundbutton"
          id="tab4Button2"
          v-on:click="switchGrain(2)"
          enable="false"
          >Soybean</ion-button
        >&nbsp;
        <ion-button
          size="small"
          class="roundbutton"
          id="tab4Button3"
          v-on:click="switchGrain(3)"
          enable="false"
          >Wheat</ion-button
        >
      </ion-item>

      <ion-content scroll-x="true">
        <div style="width:250%">
          <ion-item>
            <ion-col size="1.5" class="table">
              <b>Contract Date</b>
            </ion-col>
              <ion-col size="1.5" class="table">
              <b>Deliverie Month</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Buyer</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Contract Amount</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Deliveried Amount</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Unit Price</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Total Price</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Status</b>
            </ion-col>
          </ion-item>

          <ion-list>
                       <ion-item>
                      <ion-col size="1.5" class="table">
                        01/22/2021
                      </ion-col>
                        <ion-col size="1.5" class="table">
                        Jun 2021
                      </ion-col>
                      <ion-col size="1.5" class="table">
                        MFA
                      </ion-col>
                      <ion-col size="1.5" class="table">
                        500 bushels
                      </ion-col>
                      <ion-col size="1.5" class="table">
                        0 bushels
                      </ion-col>
                      <ion-col size="1.5" class="table">
                        $4.85
                      </ion-col>
                      <ion-col size="1.5" class="table">
                        $2425
                      </ion-col>
                      <ion-col size="1.5" class="table" style="color:gray">
                        Not Started
                      </ion-col>
                    </ion-item>
          </ion-list>
        </div>
       </ion-content>
       <!-- 交货计划在日历上显示 -->

      <!-- </ion-list> -->
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