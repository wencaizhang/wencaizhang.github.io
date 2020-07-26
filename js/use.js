// /*页面载入完成后，创建复制按钮*/
// export default function initCopyCode({ success, error}) {
//   const copyBtnClassName = "btn-copy";
//   document.querySelectorAll('div[class*="language-"]').forEach(item => {
//     if (!item.querySelector('.' + copyBtnClassName)) {
//       const div = document.createElement("i");
//       div.classList.add(copyBtnClassName);
//       div.innerText = "复制";
//       div.title = "点击复制代码";
//       item.appendChild(div);
//     };
//   });
//   if (initCopyCode.clip) {
//     return;
//   }
//   initCopyCode.clip = new ClipboardJS(".btn-copy", {
//     target (trigger) {
//       return trigger.parentNode.querySelector('pre');
//     }
//   });
//   initCopyCode.clip.on("success", function(e) {
//     e.clearSelection();
//     success && success();
//   });

//   initCopyCode.clip.on("error", function(e) {
//     console.error("Action:", e.action);
//     console.error("Trigger:", e.trigger);
//     error && error();
//   });
// }
