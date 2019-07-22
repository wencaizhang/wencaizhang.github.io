<template>
  
</template>

<script>
export default {
  mounted () {
    this.copy();
  },
  methods: {
    copy () {
      const initCopyCode = {}
      initCopyCode.clip = new ClipboardJS("tr td:nth-child(2)", {
        target (trigger) {
          return trigger.parentNode.querySelector('code');
        }
      });
      initCopyCode.clip.on("success", e => {
        e.clearSelection();
        console.log(e);
        this.$alert.success({
          content: e.text + ' copied 😜'
        })
      });

      initCopyCode.clip.on("error", e => {
        console.error("Action:", e.action);
        console.error("Trigger:", e.trigger);
        error && error();
      });
    }
  }
}
</script>
