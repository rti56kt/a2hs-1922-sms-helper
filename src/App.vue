<template>
  <a-layout>
    <a-layout-header class="a-header">
      <span class="a-header-brand">
        <img src="../public/img/icons/logo.svg" alt="logo.svg" width="35" height="35" class="logo">
        {{ $t('META.TITLE') }}
      </span>
      <span class="a-header-button">
        <a-space class="nav-btn">
          <a-button type="primary" @click="install" v-bind:disabled="disabled" v-show="display">
            <template #icon><PlusCircleOutlined /></template>
          </a-button>
          <a-button type="primary" @click="changeLang">
            <template #icon><GlobalOutlined /></template>
          </a-button>
          <a-button type="primary">
            <template #icon><InfoCircleOutlined /></template>
          </a-button>
        </a-space>
      </span>
    </a-layout-header>
    <Content/>
  </a-layout>
</template>

<script>
import { PlusCircleOutlined, GlobalOutlined, InfoCircleOutlined } from '@ant-design/icons-vue'
import Content from '@/components/Content.vue'

export default {
  name: 'App',
  components: {
    PlusCircleOutlined,
    GlobalOutlined,
    InfoCircleOutlined,
    Content
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
    install() {
      console.log(this.installPromptEvent);
      this.disabled = true;
      if(this.installPromptEvent) {
        this.installPromptEvent.prompt();
        this.installPromptEvent = null;
      }
    }
  },
  data() {
    return {
      disabled: true,
      display: false,
      installPromptEvent: null
    };
  },
  created() {
    document.title = this.$t('META.TITLE');
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      this.installPromptEvent = event;
      this.disabled = false;
      this.display = true;
    });
    window.addEventListener('appinstalled', () => {
      this.display = false;
    });
  }
}
</script>

<style>
.a-header {
  padding: 0 10px !important;
  display: flex;
  justify-content: space-between;
}
.a-header-brand {
  color:#fff;
  font-size: 1.25rem;
  white-space: nowrap;
}
.logo {
  float: left;
  margin: 16px 6px 16px 0;
}
.nav-btn {
  gap: 6px !important;
  float: right;
}
.align-center {
  text-align: center;
}
</style>
