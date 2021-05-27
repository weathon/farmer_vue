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
              <b>Contract<br />Date</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Deliverie<br />Month</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Buyer</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Contract<br />Amount</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Deliveried<br />Amount</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Unit<br />Price</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Total<br />Value</b>
            </ion-col>
            <ion-col size="1.5" class="table">
              <b>Status</b>
            </ion-col>
          </ion-item>
          <div v-if="loading == false">
            <ion-list v-for="row in rows" v-bind:key="row">
              <ion-item>
                <ion-col size="1.5" class="table">
                  {{ row.contractDate }}
                </ion-col>
                <ion-col size="1.5" class="table">
                  {{ row.deliverieMonth }}
                </ion-col>
                <ion-col size="1.5" class="table">
                  {{ row.buyer }}
                </ion-col>
                <ion-col size="1.5" class="table">
                  {{ row.contractAmount }}
                </ion-col>
                <ion-col size="1.5" class="table">
                  {{ row.deliverieAmount }}
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
                  v-bind:style="{ color: statusColor[row.status] }"
                >
                  {{ statusText[row.status] }}
                </ion-col>
              </ion-item>
            </ion-list>
          </div>
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
  IonButton,
  IonSegment,
  IonSegmentButton,
} from "@ionic/vue";
// import ExploreContainer from '@/components/ExploreContainer.vue';
import History from "@/components/History.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tab4",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    History,
    IonButton,
    IonSegment,
    IonSegmentButton,
  },
  methods: {
    async fetchMessages(c) {
      this.loading = false;
      console.log("Get data");
      // return []
      const response = await fetch(
        "http://127.0.0.1:8000/getRecords?crop="+c,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      return data;
    },
    async segmentChanged(ev) {
        this.rows=await this.fetchMessages(ev.detail.value);
    },
    async mounted()
    {
      this.rows=await this.fetchMessages("Soybean");
    },
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
      loading:true,
      statusText: ["Pending", "In Progress", "Done", "Error"],
      statusColor: ["gray", "orange", "green", "red"],
      rows: [],
    };
  },
});
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