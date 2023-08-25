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
import Spotify from '~/icons/spotify.svg'
import TailwindCSS from '~/icons/tailwind.svg'
import Typescript from '~/icons/typescript.svg'
import Umami from '~/icons/umami.svg'
import Vercel from '~/icons/vercel.svg'
import CSS from '~/icons/css.svg'
import Vue from '~/icons/vue.svg'
import Webpack from '~/icons/webpack.svg'

export let BrandIconsMap = {
  React,
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
}

export function BrandIcon(props: { type: keyof typeof BrandIconsMap; className?: string }) {
  let { type, className } = props
  let Icon = BrandIconsMap[type]
  if (!Icon) return <div>Missing icon for {type}</div>

  let defaultClass = 'h-16 w-16 lg:h-14 lg:w-14 xl:h-24 xl:w-24'
  return <Icon className={className || defaultClass} fill="currentColor" />
}
