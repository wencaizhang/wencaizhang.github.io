(function() {
  // 点击其他区域时关闭已经展开的导航菜单
  document.addEventListener('click', e => {
    console.log(e.target)
    if (
      !e.target.classList.contains('nav_item')
      && !e.target.classList.contains('nav_sub')
    ) {
      document.querySelectorAll('.nav_parent .nav_item.nav_open').forEach(ele => {
        ele.classList.remove('nav_open')
      })
    }
  })
})()