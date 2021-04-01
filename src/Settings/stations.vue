<template>
  <ion-content>
    <ion-list>
      <ion-list-header>Select the stations</ion-list-header>
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
        ["MFA 1",false],
        ["MFA 2",true],
        ["Cargill 1",false],
        ["Cargill 2",true],
    ];
    return {buyers};
  }
};
</script>
