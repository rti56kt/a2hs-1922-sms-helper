<template>
  <a-layout>
    <a-layout-header>
      <img src="../public/img/icons/logo.svg" alt="logo.svg" width="35" height="35" class="logo">
      <span class="title">{{ $t('META.TITLE') }}</span>
      <a-space class="nav-btn">
        <a-button type="primary" disabled>
          <template #icon><PlusCircleOutlined /></template>
        </a-button>
        <a-button type="primary" @click="changeLang">
          <template #icon><GlobalOutlined /></template>
        </a-button>
        <a-button type="primary">
          <template #icon><InfoCircleOutlined /></template>
        </a-button>
      </a-space>
    </a-layout-header>
    <a-layout-content class="align-center">
      <img alt="logo" src="./assets/logo.svg">
    </a-layout-content>
  </a-layout>
</template>

<script>
import { PlusCircleOutlined, GlobalOutlined, InfoCircleOutlined } from '@ant-design/icons-vue'

export default {
  name: 'App',
  components: {
    PlusCircleOutlined,
    GlobalOutlined,
    InfoCircleOutlined
  },
  methods: {
    changeLang() {
      const currLang = localStorage.getItem('lang') || this.$i18n.locale
      let newLang
      if (currLang == "zh-tw") {
        newLang = "en"
      } else {
        newLang = "zh-tw"
      }
      localStorage.setItem('lang', newLang)
      this.$i18n.locale = newLang
      document.title = this.$t('META.TITLE')
    },
  },
  created(){
    document.title = this.$t('META.TITLE')
  }
}
</script>

<style>
.logo {
  float: left;
  margin: 16px 24px 16px 0;
}
.title {
  color:#fff;
  font-size: 1.25rem;
}
.nav-btn {
  float: right;
}
.align-center {
  text-align: center;
}
</style>
