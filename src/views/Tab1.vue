
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Prices</ion-title>
        <ion-buttons slot="end" @click="openNotif()">
          <ion-menu-button auto-hide="false">
            <ion-icon :icon="notificationsOutline" />
          </ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Prices</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-item>
        <ion-segment
          scrollable
          @ionChange="segmentChanged1($event)"
          mode="md"
          style="width: 100%"
          value="Soybean"
        >
          <ion-segment-button
            v-for="item in ['Soybean', 'Corn', 'Rice']"
            v-bind:key="item"
            v-bind:value="item"
          >
            <ion-label style="text-transform: capitalize">{{ item }}</ion-label>
          </ion-segment-button>
        </ion-segment>
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
          <ion-slides v-if="crop == 'Soybean'">
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
          <ion-slides v-if="crop == 'Corn'">
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
                      :Aprice="5.05"
                      :Rprice="-0.5"
                      :percentage="0.8"
                      buyer="Cargill - California, MO"
                      v-bind:Month="mymonth[0]"
                    ></Price>
                    <Price
                      :Aprice="5.69"
                      :Rprice="-0.2"
                      :percentage="0.8"
                      buyer="Cargill - California, MO"
                      v-bind:Month="mymonth[1]"
                    ></Price>
                  </ion-row>
                </ion-item>

                <ion-item lines="full" style="width: 100%">
                  <ion-row style="width: 100%">
                    <Price
                      :Aprice="5.05"
                      :Rprice="+1.0"
                      :percentage="0.1"
                      buyer="Cargill - Eldon, MO"
                      v-bind:Month="mymonth[0]"
                    ></Price>
                    <Price
                      :Aprice="5.69"
                      :Rprice="+0.3"
                      :percentage="0.5"
                      buyer="Cargill - Eldon, MO"
                      v-bind:Month="mymonth[1]"
                    ></Price>
                  </ion-row>
                </ion-item>

                <ion-item lines="full" style="width: 100%">
                  <ion-row style="width: 100%">
                    <Price
                      :Aprice="5.05"
                      :Rprice="0.2"
                      :percentage="0.8"
                      buyer="MFA - Columbia, MO"
                      v-bind:Month="mymonth[0]"
                    ></Price>
                    <Price :close="true"></Price>

                  </ion-row>
                </ion-item>
                <ion-row>&nbsp;</ion-row>
                <ion-row>&nbsp;</ion-row>
              </ion-grid>
              <br />
              <br />
            </ion-slide>
          </ion-slides>
          <ion-slides v-if="crop == 'Rice'">
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
                      :percentage="0.8"
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
                      :percentage="0.2"
                      buyer="Cargill - Eldon, MO"
                      v-bind:Month="mymonth[0]"
                    ></Price>
                    <Price
                      :Aprice="4.85"
                      :Rprice="-0.6"
                      :percentage="0.7"
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
                      :Rprice="0.4"
                      :percentage="0.1"
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
import Notifications from "@/views/Tab3.vue";
import buyer from "@/components/buyer.vue";
import Price from "@/components/Price.vue";
import myLogin from "@/views/Login.vue";
import { notificationsOutline } from "ionicons/icons";
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
  IonSegmentButton,
  IonSegment,
  IonLabel,
  IonMenuButton,
  modalController,
} from "@ionic/vue";
// import ExploreContainer from '@/components/ExploreContainer.vue';
export default defineComponent({
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
    IonSegmentButton,
    IonSegment,
    IonLabel,
    IonMenuButton,
  },
  methods: {
    segmentChanged1(ev) {
      console.log(ev.detail.value);
      this.crop=ev.detail.value;
    },
    async openModal() {
      const modal = await modalController.create({
        component: myLogin,
        backdropDismiss: false,
      });
      return modal.present();
    },
    async openNotif() {
      const modal = await modalController.create({
        component: Notifications,
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
  async created() {
    let alreadylogin = false;
    if (alreadylogin == false) {
      const modal = await modalController.create({
        component: myLogin,
        backdropDismiss: false,
      });
      modal.present();
    }
    alreadylogin = true;
    //@ts-ignore
    // setTimeout(modalController.dismiss,15000);
  },
  data() {
    const crop = "Soybean";
    return { notificationsOutline, crop };
  },
});

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