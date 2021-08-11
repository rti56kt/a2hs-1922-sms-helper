<template>
  <a-layout-content class="align-center">
    <qrcode-stream
    @decode="onDecode"
    :camera="cameraSettings"
    :track="false"
    :paused="paused"
    />
  </a-layout-content>
</template>

<script>
import { QrcodeStream } from 'vue3-qrcode-reader'

export default {
  name: 'Qrcode',
  components: {
    QrcodeStream
  },
  methods: {
    async onDecode (content) {
      try {
        var checksms = /^(smsto?|SMSTO?):([0-9]+):(.+[\n]*.*)$/;
        if(checksms.test(content)) {
          let phonenum = null;
          let smsbody = null;
          let newcontent = null;

          phonenum = content.replace(/^(smsto?|SMSTO?):([0-9]+):(.+[\n]*.*)$/, '$2');
          smsbody = content.replace(/^(smsto?|SMSTO?):([0-9]+):(.+[\n]*.*)$/, '$3');
          newcontent = 'sms:' + phonenum + ';?&body=' + encodeURIComponent(smsbody);

          if(phonenum === "1922") {
            this.paused = true;
            location.replace(newcontent)
          }
        }
      } catch (error) {
        this.unPauseCamera()
      }
    }
  },
  data() {
    return {
      cameraSettings: {
        audio: false,
        video: {
            facingMode: { ideal: 'environment' }
        }
      },
      paused: false
    }
  }
}
</script>

<style>
</style>
