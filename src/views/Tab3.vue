<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Notifications</ion-title>
        <ion-buttons slot="end">
          <ion-menu-button auto-hide="false">
            <ion-icon :icon="archiveOutline" />
          </ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"
            >Notifications
            <ion-buttons slot="end">
              <ion-menu-button auto-hide="false">
                <ion-icon :icon="archiveOutline" />
              </ion-menu-button> </ion-buttons
          ></ion-title>
        </ion-toolbar>
      </ion-header>

      <myMessage
        title="Request from Buyer A"
        content="Buyer A wants 80 tons of green beans before 1/20/2020, offering
                a price of +0.35."
        action="alert('You clicked N1')"
      ></myMessage>

      <myMessage
        title="Request from Buyer A"
        content="Buyer A wants 80 tons of green beans before 1/20/2020, offering
                a price of +0.35."
        action="alert('You clicked N2')"
      ></myMessage>

      <myMessage
        title="Request from Buyer A"
        content="Buyer A wants 80 tons of green beans before 1/20/2020, offering
                a price of +0.35."
        action="alert('You clicked N2')"
      ></myMessage>

      <myMessage
        title="Request from Buyer A"
        content="Buyer A wants 80 tons of green beans before 1/20/2020, offering
                a price of +0.35."
        action="alert('You clicked N2')"
      ></myMessage>
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
  IonIcon,
  IonMenuButton,
  IonButtons,
} from "@ionic/vue";
import { archiveOutline } from "ionicons/icons";
import myMessage from "@/components/Message.vue";
export default {
  name: "Notifications",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonIcon,
    IonMenuButton,
    IonButtons,
    myMessage,
  },
  setup() {
    return { archiveOutline };
  },
};
</script>