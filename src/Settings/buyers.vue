<template>
  <ion-content>
    <ion-list>
      <ion-list-header>Select the buyers</ion-list-header>
      <ion-item v-for="buyer in buyers" v-bind:key="buyer">
        <ion-label>{{ buyer[0] }}</ion-label>
        <ion-checkbox
          color="primary"
          v-bind:checked="buyer[1]"
          slot="start"
        ></ion-checkbox>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
import {} from "@ionic/vue";

export default {
  name: "buyers",
  components: {},
  methods: {},
  data() {
    const buyers = [
      ["MFA",false],
      ["Carhill",true],
      ["Steve's Corn",false],
      // {
      //   name: "MFA",
      //   selected: false,
      // },
      // {
      //   name: "Carhill",
      //   selected: false,
      // },
      // {
      //   name: "Steve's Corn",
      //   selected: true,
      // },
      //忘记这种方法 其实也不可以
    ];
    return { buyers };
  },
};
</script>
