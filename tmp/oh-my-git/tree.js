module.exports = [
  {
    title: '基本命令',
    collapsable: true,
    children: [
      './01-basic/00-git-clone',
      './01-basic/02-remember-pwd.md',
      './01-basic/03-git-log',
      './01-basic/04-git-branch',
      './01-basic/05-git-tag',
      './01-basic/06-查看修改和撤销修改',
    ],
  },
  {
    title: '常见问题',
    collapsable: true,
    children: [
      './02-git-issues/01-git-branch-set-upstream',
      './02-git-issues/02-git-messy-code',
      './02-git-issues/03-git-stash',
      './02-git-issues/04-修改commit信息',
      './02-git-issues/git-submodule',
    ],
  },
  {
    title: 'Git实践',
    collapsable: true,
    children: [
      './03-git-practice/01-Git最佳实践',
      './03-git-practice/02-Git基本工作流程',
      './03-git-practice/03-git-commit-guide',
      './03-git-practice/04-gitmoji',
    ],
  },
]
