<template>
  <ion-item lines="full" style="height:64px">
    <div style="margin:5px 0px 5px 0px;">
      <div b style="font-size: 20px; margin: 0px 0px 7px 0px">
        <b>{{name}}</b>
      </div>
      <div style="font-size: small; margin: 5px 0px 5px 0px">
        {{location}}
      </div>
    </div>
  </ion-item>
</template>

<script lang="ts">
import { IonItem } from "@ionic/vue";

export default {
  name: "buyer",
  props: {
    name: String,
    location: String,
    action: String,
  },
  components: {
    IonItem,
  },
};
</script>