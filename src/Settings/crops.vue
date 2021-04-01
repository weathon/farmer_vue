<template>
  <ion-content>
    <ion-list>
      <ion-list-header>Select the crops</ion-list-header>
      <ion-item v-for="buyer in buyers" v-bind:key="buyer">
        <ion-label>{{buyer[0]}}</ion-label>
        <ion-checkbox color="primary" v-bind:checked="buyer[1]" slot="start" ></ion-checkbox>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
import {} from "@ionic/vue";

export default {
  name: "crops",
  components: {},
  methods: {},
  data()
  {
    const buyers=[
        ["Corn",false],
        ["Rice",true],
        ["Wheat",false],
        ["Soybean",true],
    ];
    return {buyers};
  }
};
</script>
