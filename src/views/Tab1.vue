
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
          <div v-if="crop == 'Soybean' && loading == false">
            <ion-slides>
              <!--  v-for="buyer in myjson" v-bind:key="buyer" -->
              <ion-slide
                style="height: 100%"
                v-for="mymonth in [
                  ['Jun', 'Jul'],
                  ['Aug', 'Sep'], //修改
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
                  <ion-item
                    lines="full"
                    style="width: 100%"
                    v-bind:key="buyer"
                    v-for="buyer in [
                      'Cargill - California, MO',
                      'Cargill - California, MO',
                      'MFA - Columbia, MO',
                    ]"
                  >
                    <!-- https://stackoverflow.com/questions/41424354/vue-js-cannot-access-to-nested-properties-of-data-object -->
                    <div v-if="myjson[buyer]" style="width: 100%">
                      <ion-row style="width: 100%">
                        <Price
                          :Aprice="myjson[buyer][mymonth[0]].aprice / 100"
                          :Rprice="myjson[buyer][mymonth[0]].rprice / 100"
                          :percentage="
                            myjson[buyer][mymonth[0]].percentage / 100
                          "
                          :buyer="myjson[buyer][mymonth[0]].buyer"
                          v-bind:Month="mymonth[0]"
                        ></Price>
                          <Price
                          :Aprice="myjson[buyer][mymonth[1]].aprice / 100"
                          :Rprice="myjson[buyer][mymonth[1]].rprice / 100"
                          :percentage="
                            myjson[buyer][mymonth[1]].percentage / 100
                          "
                          :buyer="myjson[buyer][mymonth[1]].buyer"
                          v-bind:Month="mymonth[1]"
                        ></Price>
                      </ion-row>
                    </div>
                  </ion-item>

                  <ion-row>&nbsp;</ion-row>
                  <ion-row>&nbsp;</ion-row>
                </ion-grid>
                <br />
                <br />
              </ion-slide>
            </ion-slides>
          </div>
          <div v-if="crop == 'Corn'">
                       <ion-slides>
              <!--  v-for="buyer in myjson" v-bind:key="buyer" -->
              <ion-slide
                style="height: 100%"
                v-for="mymonth in [
                  ['Jun', 'Jul'],
                  ['Aug', 'Sep'], //修改
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
                  <ion-item
                    lines="full"
                    style="width: 100%"
                    v-bind:key="buyer"
                    v-for="buyer in [
                      'Cargill - California, MO',
                      'Cargill - California, MO',
                      'MFA - Columbia, MO',
                    ]"
                  >
                    <!-- https://stackoverflow.com/questions/41424354/vue-js-cannot-access-to-nested-properties-of-data-object -->
                    <div v-if="myjson[buyer]" style="width: 100%">
                      <ion-row style="width: 100%">
                        <Price
                          :Aprice="myjson[buyer][mymonth[0]].aprice / 100"
                          :Rprice="myjson[buyer][mymonth[0]].rprice / 100"
                          :percentage="
                            myjson[buyer][mymonth[0]].percentage / 100
                          "
                          :buyer="myjson[buyer][mymonth[0]].buyer"
                          v-bind:Month="mymonth[0]"
                        ></Price>
                          <Price
                          :Aprice="myjson[buyer][mymonth[1]].aprice / 100"
                          :Rprice="myjson[buyer][mymonth[1]].rprice / 100"
                          :percentage="
                            myjson[buyer][mymonth[1]].percentage / 100
                          "
                          :buyer="myjson[buyer][mymonth[1]].buyer"
                          v-bind:Month="mymonth[1]"
                        ></Price>
                      </ion-row>
                    </div>
                  </ion-item>

                  <ion-row>&nbsp;</ion-row>
                  <ion-row>&nbsp;</ion-row>
                </ion-grid>
                <br />
                <br />
              </ion-slide>
            </ion-slides>
          </div>
          <div v-if="crop == 'Rice'">
                        <ion-slides>
              <!--  v-for="buyer in myjson" v-bind:key="buyer" -->
              <ion-slide
                style="height: 100%"
                v-for="mymonth in [
                  ['Jun', 'Jul'],
                  ['Aug', 'Sep'], //修改
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
                  <ion-item
                    lines="full"
                    style="width: 100%"
                    v-bind:key="buyer"
                    v-for="buyer in [
                      'Cargill - California, MO',
                      'Cargill - California, MO',
                      'MFA - Columbia, MO',
                    ]"
                  >
                    <!-- https://stackoverflow.com/questions/41424354/vue-js-cannot-access-to-nested-properties-of-data-object -->
                    <div v-if="myjson[buyer]" style="width: 100%">
                      <ion-row style="width: 100%">
                        <Price
                          :Aprice="myjson[buyer][mymonth[0]].aprice / 100"
                          :Rprice="myjson[buyer][mymonth[0]].rprice / 100"
                          :percentage="
                            myjson[buyer][mymonth[0]].percentage / 100
                          "
                          :buyer="myjson[buyer][mymonth[0]].buyer"
                          v-bind:Month="mymonth[0]"
                        ></Price>
                          <Price
                          :Aprice="myjson[buyer][mymonth[1]].aprice / 100"
                          :Rprice="myjson[buyer][mymonth[1]].rprice / 100"
                          :percentage="
                            myjson[buyer][mymonth[1]].percentage / 100
                          "
                          :buyer="myjson[buyer][mymonth[1]].buyer"
                          v-bind:Month="mymonth[1]"
                        ></Price>
                      </ion-row>
                    </div>
                  </ion-item>

                  <ion-row>&nbsp;</ion-row>
                  <ion-row>&nbsp;</ion-row>
                </ion-grid>
                <br />
                <br />
              </ion-slide>
            </ion-slides>
          </div>
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
  async mounted() {
    console.log("Mounted");
    this.myjson = await this.fetchMessages(this.crop);
    console.log(this.myjson["Cargill CAMO"]["Jun"]["aprice"] / 100);
    let alreadylogin = false;
    await fetch("https://farmer.weathon.top/api/users/me", {
      method: "GET",
    }).then((response) => {
      if (response.ok) {
        alreadylogin = true;
      }
    });
    // jiancha?
    //     // if (success) modalController.dismiss();
    //     // else this.presentAlert();
    //   },
    // },
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
  methods: {
    async fetchMessages(c) {
      console.log("Get data");
      // return []
      const response = await fetch("http://127.0.0.1:8000/price?crop=" + c, {
        method: "GET",
      });
      this.loading = false;
      return response.json();
    },
    async segmentChanged1(ev) {
      console.log(ev.detail.value);
      this.crop = ev.detail.value;
      this.myjson = await this.fetchMessages(this.crop);
      console.log(this.myjson);
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
  // async created() {

  // },
  data() {
    const crop = "Soybean";
    return { notificationsOutline, crop, loading: true, myjson: {} };
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