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
  已弃用: '#d95e5a',
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
  const { color } = techstack[t]

  return (
    <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: color }}></span>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  let { t } = useTranslation('common')
  let { title, description, imgSrc, url, repo, builtWith, state } = project
  let { data } = useSWR(`/api/github?repo=${repo}`, fetcher)
  // let repository: GithubRepository = data?.repository
  // let href = repository?.url || url
  let repository = repo
  let href = repo

  return (
    <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
      {/* <div className="flex h-full flex-col overflow-hidden rounded-lg border border-transparent shadow-nextjs border-opacity-60 dark:border-gray-600 dark:hover:border-gray-400"> */}
      <div className="flex h-full flex-col overflow-hidden rounded-md border border-gray-400 border-opacity-60 hover:border-gray-500 dark:border-gray-700 dark:hover:border-gray-600 relative">
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
          {/* {repository ? (
            <GithubRepo repo={repository} />
          ) : ( */}
          <Link
            href={url}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            <span data-umami-event="project-learn-more">{t('projects.learn_more')} &rarr;</span>
          </Link>
          {/* )} */}
        </div>
      </div>
    </div>
  )
}
