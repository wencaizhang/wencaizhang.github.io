import { Twemoji } from '~/components/Twemoji'
import { siteMetadata } from '~/data/siteMetadata'

export function ProfileCardInfo() {
  return (
    <div className="hidden py-4 xl:block xl:px-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        {siteMetadata.fullName}
      </h3>
      <h5 className="py-2 text-gray-700 dark:text-gray-400">Learner | Creator | Builder</h5>
      <div className="mb-2 mt-4 space-y-4">
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>

          <p className="px-2">
            {siteMetadata.position}
            {siteMetadata.company && '@  '}
            {siteMetadata.company && (
              <a
                target="_blank"
                href={siteMetadata.companySite}
                rel="noreferrer"
                className="hover:underline"
              >
                {siteMetadata.company}
              </a>
            )}
          </p>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <p className="px-2">
            {siteMetadata.location}
            <span className="absolute ml-1 inline-flex pt-px">
              <Twemoji emoji={siteMetadata.locationIcon} />
            </span>
          </p>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a className="px-2" href={`mailto:${siteMetadata.email}`}>
            {siteMetadata.email}
          </a>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          <p className="flex space-x-1.5 px-2">
            <a
              target="_blank"
              href={siteMetadata.github}
              rel="noreferrer"
              className="hover:underline"
              data-umami-event="profile-card-github"
            >
              gh/{siteMetadata.socialAccounts.github}
            </a>
            {siteMetadata.linkedin && (
              <>
                <span className="text-gray-400 dark:text-gray-500">|</span>
                <a
                  target="_blank"
                  href={siteMetadata.linkedin}
                  rel="noreferrer"
                  className="hover:underline"
                  data-umami-event="profile-card-linkedin"
                >
                  in/{siteMetadata.socialAccounts.linkedin}
                </a>
              </>
            )}
            {siteMetadata.twitter && (
              <>
                <span className="text-gray-400 dark:text-gray-500">|</span>
                <a
                  target="_blank"
                  href={siteMetadata.twitter}
                  rel="noreferrer"
                  className="hover:underline"
                  data-umami-event="profile-card-twitter"
                >
                  tw/{siteMetadata.socialAccounts.twitter}
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
