import { useTranslation } from 'next-i18next'
import { Github } from 'lucide-react'
import useSWR from 'swr'
import type { ProjectCardProps } from '~/types/components'
import type { GithubRepository } from '~/types/server'
import { fetcher } from '~/utils/fetcher'
import { GithubRepo } from './GithubRepo'
import { Image } from './Image'
import { Link } from './Link'

import { techstack } from './BrandIcon'
const stateColors = {
  开发中: '#66ca82',
  维护中: '#3975eb',
  待发布: '#dd703b',
  待更新: '#f8d57a',
  停止更新: '#d95e5a',
}
function getState(state) {
  if (!state) {
    return null
  }

  const color = stateColors[state]

  return (
    <span
      className="absolute left-2 top-2 
      rounded-full border-0 border-solid px-3 py-1 
      text-xs text-white"
      style={{ backgroundColor: color }}
    >
      {state}
    </span>
  )
}

function getToolTech(tool: string) {
  const t = tool.toLowerCase().replaceAll('.', '')

  const theKey = Object.keys(techstack).find((key) => key.includes(t))

  if (!theKey) {
    return null
  }
  const { color } = techstack[theKey]

  return (
    <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: color }}></span>
  )
}

let idx = 0
function MyButton({ children }) {
  const baseClassName =
    'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xs text-gray-900 rounded-lg group bg-gradient-to-br'
  const spanClassName =
    'relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'
  const classNameList = [
    {
      btnClassName:
        ' from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800',

      desc: 'Purple to blue',
    },

    {
      btnClassName:
        ' from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800',

      desc: 'Cyan to blue',
    },

    {
      btnClassName:
        ' from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800',

      desc: 'Green to blue',
    },

    {
      btnClassName:
        ' from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800',

      desc: 'Purple to pink',
    },

    {
      btnClassName:
        ' from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800',

      desc: 'Pink to orange',
    },

    {
      btnClassName:
        ' from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800',

      desc: 'Teal to Lime',
    },

    {
      btnClassName:
        ' from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400',

      desc: 'Red to Yellow',
    },
  ]
  idx++
  const res = classNameList[idx % classNameList.length]
  console.log('%c Line:111 🥪 idx', 'color:#ed9ec7', idx)

  return (
    <button type="button" className={baseClassName + ' ' + res.btnClassName}>
      <span className={spanClassName}>{children}</span>
    </button>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  let { t } = useTranslation('common')
  let { title, description, imgSrc, url, demo = [], repo, builtWith, state } = project
  // let { data } = useSWR(`/api/github?repo=${repo}`, fetcher)
  // let repository: GithubRepository = data?.repository
  // let href = repository?.url || url
  let repository = repo
  let href = repo

  return (
    <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
      <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-nextjs dark:shadow-nextjs-dark relative">
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-60"
          width={1088}
          height={612}
        />
        {getState(state)}
        <div className="flex grow flex-col justify-between space-y-6 p-4 md:p-6">
          <div className="space-y-3">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                {href ? (
                  <Link href={href} aria-label={`Link to ${title}`}>
                    <span data-umami-event="project-title-link">{title}</span>
                  </Link>
                ) : (
                  title
                )}
              </h2>

              {href && (
                <a
                  href={href}
                  title={t('projects.source_code')}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1"
                  data-umami-event="project-repo"
                >
                  <Github size={20} strokeWidth={2} />
                </a>
              )}
            </div>

            {/* <Link
              href={url}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              <span data-umami-event="project-learn-more">{t('projects.learn_more')} &rarr;</span>
            </Link> */}

            {demo && demo.length > 0 && (
              <div>
                {demo.map((item) => (
                  <Link
                    key={item.url + item.name}
                    href={url}
                    className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Link to ${title}`}
                  >
                    <MyButton>{item.name}</MyButton>
                  </Link>
                ))}
              </div>
            )}

            {(!demo || !demo.length) && (
              <div>
                <button
                  type="button"
                  className="text-white bg-slate-300 dark:bg-slate-400 cursor-not-allowed rounded-lg text-xs px-3 py-1.5 text-center"
                  disabled
                >
                  暂无演示
                </button>
              </div>
            )}

            <div className="max-w-none space-y-2 text-gray-500 dark:text-gray-400">
              {/* <p>{repository?.description || description}</p> */}
              <p>{description}</p>
              <div className="flex flex-wrap gap-2">
                {/* <span className="shrink-0">{t('projects.built_with')}:</span> */}
                {builtWith?.map((tool, index) => {
                  return (
                    <span
                      key={index}
                      // className="font-semibold text-gray-600 dark:text-gray-300"
                      className="inline-flex items-center gap-1 rounded-full border border-solid border-slate-600 px-3 text-gray-500 dark:text-gray-400 text-sm"
                    >
                      {tool}
                      {getToolTech(tool)}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
