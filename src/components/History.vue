<template>
  <ion-item lines="none">
    <ion-card style="width: 100%">
      <ion-card-header>
        <ion-card-title>{{ title }}</ion-card-title>
      </ion-card-header>

      <ion-card-content>
 

        <br />
        <br />
      </ion-card-content>
    </ion-card>
  </ion-item>
</template>

<script lang="ts">
import {
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonCard,
  IonItem,
  IonIcon,
} from "@ionic/vue";

import {
  closeOutline,
  checkmarkOutline,
  fileTrayFullOutline,
} from "ionicons/icons";

export default {
  name: "History",
  props: {
    title: String,
    content: String,
    action: String,
  },
  components: {
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonCard,
    IonItem,
  },
  setup() {
    return {
      checkmarkOutline,
    };
  },
};
// 舅舅说他们很喜欢看数据 但是不要有下拉框 还有什么 横轴纵轴 还有什么 表格卡片

</script>

<style>
#bold-icon {
  --ionicon-stroke-width: 100px;
}
</style>

