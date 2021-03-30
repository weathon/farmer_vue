<template>

    <ion-item-sliding>
      <!-- <ion-item lines="none"> -->
            <b style="color:black">{{ title }}</b>
            <br />
            {{ content }}
            <br />
      <!-- </ion-item> -->
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