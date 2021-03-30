<template>

    <ion-item-sliding>
      <ion-item lines="none">
        <!-- <ion-card style="width:100%"> -->
          <!-- <ion-card-header> -->
            <b style="color:black">{{ title }}</b>
          <!-- </ion-card-header> -->

          <!-- <ion-card-content> -->
            <!-- Buyer A wants 80 tons of green beans before 1/20/2020, offering a price of
      +0.35. -->
            <br />
            {{ content }}
            <br />
            <!-- <ion-button expand="full" v-bind:onclick="action">View</ion-button> -->
          <!-- </ion-card-content> -->
        <!-- </ion-card> -->
      </ion-item>
      <ion-item-options side="end">
        <ion-item-option onClick="archive(item)">Archive</ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

</template>

<script lang="ts">
import {
  // IonCardTitle,
  // IonCardHeader,
  // IonCardContent,
  IonCard,
  IonButton,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
} from "@ionic/vue";

export default {
  name: "myMessage",
  props: {
    title: String,
    content: String,
    action: String,
  },
  components: {
    // IonCardTitle,
    // IonCardHeader,
    // IonCardContent,
    IonCard,
    IonButton,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
  },
};
</script>