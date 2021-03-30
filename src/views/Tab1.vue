
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Prices</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- :fullscreen="true" -->
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Prices</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-item>
        <ion-button
          class="roundbutton"
          id="button0"
          v-on:click="switchGrain(0)"
          enable="true"
          >Corn</ion-button
        >&nbsp;
        <ion-button
          class="roundbutton"
          id="button1"
          v-on:click="switchGrain(1)"
          enable="false"
          >Rice</ion-button
        >&nbsp;
        <ion-button
          class="roundbutton"
          id="button2"
          v-on:click="switchGrain(2)"
          enable="false"
          >Wheat</ion-button
        >&nbsp;
        <ion-button
          class="roundbutton"
          id="button3"
          v-on:click="switchGrain(3)"
          enable="false"
          >Soybean</ion-button
        >
      </ion-item>
      <!-- <ion-grid> -->
      <!-- Cargrill *2 MFA Gfg Agriculture -->
      <!-- <ion-item lines="full">
<ion-col style="height: 100%" size="4"></ion-col>
      </ion-item> -->
      <ion-row>
        <ion-col size="4">
          <ion-item lines="full" style="height: 57px">
            <ion-col size="6" style="text-align: center"> </ion-col>
          </ion-item>
          <!-- Empty, use for monthes -->
          <buyer name="Cargill" location="California, MO"></buyer>
          <buyer name="Cargill" location="Eldon, MO"></buyer>
          <!-- <buyer name="Cargill" location="Versailles, MO"></buyer> -->
          <buyer name="MFA" location="Columbia, MO"></buyer>
        </ion-col>

        <ion-col size="8" style="height: 100%">
          <ion-slides>
            <ion-slide
              style="height: 100%"
              v-for="mymonth in [
                ['May', 'Jun'],
                ['Jul', 'Aug'],
                ['Sep', 'Oct'],
              ]"
              v-bind:key="mymonth"
            >
              <ion-grid>
                <ion-item>
                  <ion-col size="6" style="text-align: center">
                    <b>{{ mymonth[0] }}</b>
                    <!-- <buyer v-bind:name=mymonth[0]></buyer> -->
                  </ion-col>
                  <ion-col size="6" style="text-align: center">
                    <b>{{ mymonth[1] }}</b>
                  </ion-col>
                </ion-item>
                <ion-item lines="full" style="width: 100%">
                  <ion-row style="width: 100%">
                    <Price
                      :Aprice="4.85"
                      :Rprice="0.5"
                      :percentage="0.3"
                      buyer="Cargill - California, MO"
                      v-bind:Month="mymonth[0]"
                    ></Price>
                    <Price
                      :Aprice="4.85"
                      :Rprice="-0.3"
                      :percentage="0.8"
                      buyer="Cargill - California, MO"
                      v-bind:Month="mymonth[1]"
                    ></Price>
                  </ion-row>
                </ion-item>

                <ion-item lines="full" style="width: 100%">
                  <ion-row style="width: 100%">
                    <Price
                      :Aprice="4.85"
                      :Rprice="1.0"
                      :percentage="0.9"
                      buyer="Cargill - Eldon, MO"
                      v-bind:Month="mymonth[0]"
                    ></Price>
                    <Price
                      :Aprice="4.85"
                      :Rprice="+0.7"
                      :percentage="0.6"
                      buyer="Cargill - Eldon, MO"
                      v-bind:Month="mymonth[1]"
                    ></Price>
                  </ion-row>
                </ion-item>

                <ion-item lines="full" style="width: 100%">
                  <ion-row style="width: 100%">
                    <Price :close="true"></Price>
                    <Price
                      :Aprice="4.85"
                      :Rprice="0.5"
                      :percentage="0.3"
                      buyer="MFA - Columbia, MO"
                      v-bind:Month="mymonth[0]"
                    ></Price>
                  </ion-row>
                </ion-item>
                <ion-row>&nbsp;</ion-row>
                <ion-row>&nbsp;</ion-row>
              </ion-grid>
              <br />
              <br />
            </ion-slide>
          </ion-slides>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonSlides, IonSlide } from "@ionic/vue";
import { defineComponent } from "vue";
import buyer from "@/components/buyer.vue";
import Price from "@/components/Price.vue";
import myLogin from "@/views/Login.vue";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  // IonGrid,
  IonRow,
  IonItem,
  IonGrid,
  modalController,
} from "@ionic/vue";
// import ExploreContainer from '@/components/ExploreContainer.vue';
export default {
  name: "Tab1",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonCol,
    // IonGrid,
    IonItem,
    IonRow,
    IonSlides,
    IonSlide,
    buyer,
    Price,
    IonGrid,
  },
  methods: {
    async openModal() {
      const modal = await modalController.create({
        "component": myLogin,
        backdropDismiss: false,
      });
      return modal.present();
    },
    switchGrain(id) {
      //@ts-ignore

      for (let i = 0; i < 4; i++) {
        //@ts-ignore
        document.getElementById("button" + i).setAttribute("enable", "false");
        // console.log(buttonId);
      } //反了？
      const buttonId = "button" + id.toString();
      //@ts-ignore
      document.getElementById(buttonId).setAttribute("enable", "true");
      // document.getElementById(buttonId).className += " enabled";
      console.log(buttonId);
    },
  },
  created: function () {
    let alreadylogin = false;
    const foo = this.openModal;
    if (alreadylogin == false) foo();
    alreadylogin = true;
    //@ts-ignore
    // setTimeout(modalController.dismiss,15000);
  },
};

// 后端排序
// 还有什么
// 手指粗 怎么个滑动方法
</script>

<style>
.roundbutton {
  --border-radius: 50px;
}
#disabled {
  --background-color: lightgray;
}
#enabled {
  --background-color: gold;
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