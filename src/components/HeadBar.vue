<template>
  <div class="nav">
    <div class="nav--link">DevOS</div>
    <div class="nav--link">Fichier</div>
    <div class="nav--link">Edition</div>
    <div class="nav--link">Fenêtre</div>
    <div class="nav--link">Aide</div>
    <div class="hour">{{ hour }}</div>
    <div class="network">
      <Icon icon="fluent:cellular-data-2-24-filled" color="white" height="30" />
    </div>
    <div class="wifi">
      <Icon
        icon="bx:bx-wifi-2"
        color="white"
        height="30"
        style="margin-right: 10px"
      />
    </div>
    <div class="battery">
      <Icon icon="fa-solid:battery-full" color="white" height="30" />
    </div>
    <div class="fullDate">{{ today }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Icon } from "@iconify/vue";

@Options({
  components: {
    Icon,
  },
})
export default class HeadBar extends Vue {
  date: Date = new Date();
  options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  hour =
    this.date.getHours().toString() + ":" + this.date.getMinutes().toString();
  today =
    this.date.toLocaleDateString("fr-FR", this.options).replaceAll(".", " ") +
    " " +
    this.hour;
}
</script>

<style lang="scss">
.nav {
  background: rgba(0, 0, 0, 0);
  color: #fff;
  font-family: "Helvetica";
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 40px;
  place-items: center;
  cursor: default;
  &--link,
  .fullDate {
    display: none;
  }
  .network {
    grid-column-start: 8;
  }
  .hour {
    font-weight: bold;
    padding-left: 20px;
  }
  .battery {
    padding-right: 20px;
  }
  @media screen and (min-width: 1280px) {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(150px);
    grid-template-columns: 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr 2fr 0.25fr 0.1fr 0.1fr 0.6fr;
    .network,
    .hour {
      display: none;
    }
    &--link:nth-child(1) {
      font-weight: bold;
    }
    &--link,
    .fullDate {
      display: block;
    }
    .wifi {
      grid-row-start: 1;
      grid-column-start: 8;
    }
    .battery {
      grid-row-start: 1;
      grid-column-start: 9;
    }
    .fullDate {
      grid-row-start: 1;
      grid-column-start: 10;
    }
  }
  @media screen and (min-width: 1368px) {
    grid-template-columns: 0.15fr 0.15fr 0.15fr 0.15fr 0.15fr 2.25fr 0.25fr 0.1fr 0.1fr 0.4fr;
  }
}
</style>
