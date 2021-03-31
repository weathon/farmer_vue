<template>
  <ion-content>
    <ion-list>
      <ion-item lines="full">
        <br />
        <ion-label><b>User Name</b></ion-label>
        <ion-label slot="end" style="color: gray">Test003</ion-label>
      </ion-item>

      <ion-item lines="full">
        <ion-label
          ><b>Farm Name</b></ion-label
        >
        <ion-input id="farmname" slot="end" style="color: gray" v-bind:value="form.farmname"></ion-input>
      </ion-item>

      <ion-item lines="full">
        <ion-label
          ><b>Farmer Name</b></ion-label
        >
        <ion-input id="farmername" slot="end" style="color: gray" v-bind:value="form.farmername"></ion-input>
      </ion-item>

      <ion-item lines="full">
        <ion-label
          ><b>Phone</b></ion-label
        >
        <ion-input id="phone" slot="end" style="color: gray" v-bind:value="form.phone"></ion-input>
      </ion-item>

      <ion-item lines="full">
        <ion-label
          ><b>E-mail</b></ion-label
        >
        <ion-input id="email" slot="end" style="color: gray" v-bind:value="form.email"></ion-input>
      </ion-item>

      <ion-item lines="full">
        <ion-label
          ><b>Adress Line 1</b></ion-label
        >
        <ion-input id="line1" slot="end" style="color: gray" v-bind:value="form.line1"></ion-input>
      </ion-item>

      <ion-item lines="full">
        <ion-label
          ><b>Adress Line 2</b></ion-label
        >
        <ion-input id="line2" slot="end" style="color: gray" v-bind:value="form.line2"></ion-input>
      </ion-item>

      <ion-item lines="full">
        <ion-label
          ><b>City/County</b></ion-label
        >
        <ion-input id="city" slot="end" style="color: gray" v-bind:value="form.city"></ion-input>
      </ion-item>

      <ion-item lines="full">
        <ion-label
          ><b>State</b></ion-label
        >
        <ion-input id="state" slot="end" style="color: gray" v-bind:value="form.state"></ion-input>
      </ion-item>

      <ion-item lines="full">
        <ion-label
          ><b>Zip Code</b></ion-label
        >
        <ion-input id="zip" slot="end" style="color: gray" v-bind:value="form.zip"></ion-input>
      </ion-item>

      <!-- <ion-item>
        <ion-label position="floating"
          >Password</ion-label
        >
        <ion-input type="password" id="psw" style="color: gray"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating"
          >Re-enter Password</ion-label
        >
        <ion-input type="password" id="psw" style="color: gray"></ion-input>
      </ion-item> -->
      <br />

      <ion-button expand="block" v-on:click="submit()"
        >Submit Changes</ion-button
      >
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "profile",
  components: {},
  methods: {
      submit()
      {
        const newform={}
        const ids=["farmname","farmername","phone","email","line1","line2","city","state","zip"]
        //还要多处改
        for(let i=0;i<ids.length;i++)
        {
            //@ts-ignore
            newform[ids[i]]=document.getElementById(ids[i]).value;
        }
        console.log(newform)
      }
  },
  data()
  {
      return {
          form:{
            farmname:"Steve's Farm",
            farmername:"John Steve",
            phone:"573-123-4567",
            email:"example@example.com",
            line1:"5800 Cheese Rd.",
            line2:"",
            city:"City of Cake",
            state:"MO",
            zip:"52065"
          }
      }
  }
});
</script>
