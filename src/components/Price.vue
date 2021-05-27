<template>
  <ion-col
    size="6"
    style="text-align: center; color: gray; height: 64px"
    v-if="close"
    v-on:click="sell(buyer, Month, Aprice + Rprice, close)"
  >
    <b>Closed</b>
  </ion-col>

  <ion-col
    size="6"
    style="text-align: center; color: red; height: 64px"
    v-if="Rprice < 0"
    v-on:click="sell(buyer, Month, Aprice + Rprice, close)"
  >
    <div style="font-size: small">
      {{ Aprice }} <slot v-if="Rprice > 0">+</slot> {{ Rprice }}
    </div>
    <b>{{ (Aprice + Rprice).toFixed(2) }}</b>
    <ion-progress-bar
      v-bind:value="percentage"
      style="margin: 5px"
    ></ion-progress-bar>
  </ion-col>

  <ion-col
    size="6"
    style="text-align: center; color: green; height: 64px"
    v-if="Rprice > 0"
    v-on:click="sell(buyer, Month, Aprice + Rprice, close)"
  >
    <div style="font-size: small">
      {{ Aprice }} <slot v-if="Rprice > 0">+</slot> {{ Rprice }}
    </div>
    <b>{{ (Aprice + Rprice).toFixed(2) }}</b>
    <ion-progress-bar
      v-bind:value="percentage"
      style="margin: 5px"
    ></ion-progress-bar>
  </ion-col>
</template>

<script lang="ts">
import { IonCol, IonProgressBar, toastController, modalController } from "@ionic/vue";
import confrim from "@/components/confrim.vue";

export default {
  name: "Price",
  props: {
    percentage: Number,
    Aprice: Number,
    Rprice: Number,
    close: Boolean,
    buyer: String,
    Month: String,
  },
  components: {
    IonCol,
    IonProgressBar,
  },
  methods: {
    async openModal(buyer, Month, Aprice, closed) {
      const modal = await modalController
        .create({
	//@ts-ignore
          component: confrim,
          cssClass: 'popup',
          componentProps: {
            buyer, Month, Aprice, closed
          },
        })
      return modal.present();
    },

    async openToast() {
      const toast = await toastController.create({
        message: "This window is closed.",
        duration: 2000,
        color: 'dark',
        // translucent: true
      });
      return toast.present();
    },
    sell(buyer, Month, Aprice, closed) {
      if (closed) {
        this.openToast()
        return;
      }
      console.log(Month)
      this.openModal(buyer, Month, Aprice, closed);
    },
  },
};
</script>

<style>
.popup
{
  --width:90%;
  --height:80%;
  --border-radius: 10px;
}
</style>
