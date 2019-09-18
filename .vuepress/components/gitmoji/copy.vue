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
        this.$message.success({
          message: `<code style="
                      color: #476582;
                      padding: 0.25rem 0.5rem;
                      margin: 0;
                      font-size: 0.85em;
                      background-color: rgba(27,31,35,0.05);
                      border-radius: 3px;"
                    >${e.text}</code> copied 😜`,
          supportHTML: true,
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
