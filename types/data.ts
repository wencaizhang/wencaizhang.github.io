import type { siteMetadata } from '~/data/siteMetadata'

export interface Project {
  type: 'work' | 'self'
  title: string
  description?: string
  imgSrc: string
  url?: string
  repo?: string
  builtWith: string[]
  demo?: { name: string; url: string }[]
  state?: '开发中' | '维护中' | '待发布' | '待更新' | '停止更新'
}

export type SiteMetaData = typeof siteMetadata & {
  title: string
  author: string
  full_name: string
  header_title: string
  footer_title: string
  description: string
  language: string
}
