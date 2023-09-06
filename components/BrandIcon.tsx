import Bash from '~/icons/bash.svg'
import Git from '~/icons/git.svg'
import GitHub from '~/icons/github.svg'
import Javascript from '~/icons/javascript.svg'
import Liquid from '~/icons/liquid.svg'
import Markdown from '~/icons/markdown.svg'
import NextJS from '~/icons/nextjs.svg'
import Node from '~/icons/nodejs.svg'
import Prisma from '~/icons/prisma.svg'
import Railway from '~/icons/railway.svg'
import React from '~/icons/react.svg'
import Remix from '~/icons/remix.svg'
import Spotify from '~/icons/spotify.svg'
import TailwindCSS from '~/icons/tailwind.svg'
import Typescript from '~/icons/typescript.svg'
import Umami from '~/icons/umami.svg'
import Vercel from '~/icons/vercel.svg'
import CSS from '~/icons/css.svg'
import Vue from '~/icons/vue.svg'
import Nuxtjs from '~/icons/nuxtjs.svg'
import Nestjs from '~/icons/nestjs.svg'
import Webpack from '~/icons/webpack.svg'
import Shopify from '~/icons/shopify.svg'
import wordpress from '~/icons/wordpress.svg'
import ffmpeg from '~/icons/ffmpeg.svg'
import antd from '~/icons/antd.svg'
import jquery from '~/icons/jquery.svg'
// import vben from '~/icons/vben.png'

export let BrandIconsMap = {
  React,
  Remix,
  Git,
  GitHub,
  Javascript,
  Typescript,
  Node,
  Bash,
  Liquid,
  Markdown,
  NextJS,
  TailwindCSS,
  Prisma,
  Umami,
  Vercel,
  Railway,
  Spotify,
  CSS,
  Vue,
  Webpack,
  Shopify,
  wordpress,
  ffmpeg,
  antd,
  jquery,
}

export function BrandIcon(props: { type: keyof typeof BrandIconsMap; className?: string }) {
  let { type, className } = props
  let Icon = BrandIconsMap[type]
  if (!Icon) return <div>Missing icon for {type}</div>

  return (
    <Icon
      className={className || 'h-16 w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20'}
      fill="currentColor"
    />
  )
}

export const techstack = {
  css: {
    color: '#3375b8',
  },
  js: {
    color: '#f8d849',
  },
  javascript: {
    color: '#f8d849',
  },
  'antd pro': {
    color: '#448ef7',
    logo: antd,
  },
  vue: {
    color: '#42b883',
    logo: Vue,
  },
  vben: {
    color: '#a957f0',
    // logo: vben,
  },
  react: {
    color: '#5496b3',
    logo: React,
  },
  typescript: {
    color: '#4476c0',
    logo: Typescript,
  },
  nuxtjs: {
    color: '#64d98a',
    logo: Vue,
  },
  nextjs: {
    color: '#000000',
    logo: Nuxtjs,
  },
  nestjs: {
    color: '#e1315a',
    logo: Nestjs,
  },
  tailwindcss: {
    color: '#52b3d0',
    logo: TailwindCSS,
  },
  prisma: {
    color: '#5d67d1',
    logo: Prisma,
  },
  shopify: {
    color: '#88b253',
    logo: Shopify,
  },
  wordpress: {
    color: '#235696',
    logo: wordpress,
  },
  jquery: {
    color: '#2d66a7',
    logo: jquery,
  },
}
