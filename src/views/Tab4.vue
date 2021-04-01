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

      <ion-item>
        <ion-segment
          scrollable
          @ionChange="segmentChanged($event)"
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
      <br />
      <ion-content scroll-x="true">
        <div style="width: 250%">
          <ion-item>
            <ion-col size="1.5" class="table">
              <b>Contract<br/>Date</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Deliverie<br/>Month</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Buyer</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Contract<br/>Amount</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Deliveried<br/>Amount</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Unit<br/>Price</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Total<br/>Value</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Status</b>
            </ion-col>
          </ion-item>

          <ion-list v-for="row in rows" v-bind:key="row">
            <ion-item>
              <ion-col size="1.5" class="table">
                {{ row.date }}
              </ion-col>
              <ion-col size="1.5" class="table">
                {{ row.month }}
              </ion-col>
              <ion-col size="1.5" class="table">
                {{ row.buyer }}
              </ion-col>
              <ion-col size="1.5" class="table">
                {{ row.amount }}
              </ion-col>
              <ion-col size="1.5" class="table">
                {{ row.deliveried }}
              </ion-col>
              <ion-col size="1.5" class="table">
                {{ row.unitprice }}
              </ion-col>
              <ion-col size="1.5" class="table">
                {{ row.totalvalue }}
              </ion-col>
              <ion-col
                size="1.5"
                class="table"
                v-bind:style="{ color: row.statuscolor }"
              >
                {{ row.status }}
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
  data() {
    return {
      rows: [
        {
          date: "1/22/2021",
          month: "Jun 2021",
          buyer: "MFA 1",
          amount: "500 bushels",
          deliveried: "0 bushels",
          unitprice: "$4.85",
          totalvalue: "$2425",
          status: "Not Started",
          statuscolor: "gray",
        },
        {
          date: "2/22/2021",
          month: "Mar 2021",
          buyer: "MFA 2",
          amount: "500 bushels",
          deliveried: "500 bushels",
          unitprice: "$4.85",
          totalvalue: "$2425",
          status: "Finished",
          statuscolor: "green",
        },
        {
          date: "1/22/2021",
          month: "Apr 2021",
          buyer: "Cargill 1",
          amount: "500 bushels",
          deliveried: "100 bushels",
          unitprice: "$4.85",
          totalvalue: "$2425",
          status: "In Progress",
          statuscolor: "orange",
        },
      ],
    };
  },
};
</script>

<style>
ion-segment-button {
  --border-radius: 50px;
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
  text-align: left;
}
</style>