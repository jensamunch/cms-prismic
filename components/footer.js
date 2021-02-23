import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (

    <div class="bg-white">
  <div
    class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 border-t border-gray-200"
  >
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <div class="grid grid-cols-2 gap-8 xl:col-span-2">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h4
              class="text-sm leading-5 font-semibold tracking-wider text-paceText uppercase"
            >
               .Site.Params.navSolutions 

            </h4>
            <ul class="mt-4">
              <li>
                <a
                  href="/solutions/pace-pricing"
                  class="text-gray-600 leading-6 hover:text-paceText"
                >
                   .Site.Params.navPricing 

                </a>
              </li>
              <li class="mt-4">
                <a
                  href="/solutions/pace-analytics"
                  class="text-gray-600 leading-6 hover:text-paceText"
                >
                   .Site.Params.navAnalytics 

                </a>
              </li>
              <li class="mt-4">
                <a
                  href="/solutions/pace-diagnostics"
                  class="text-gray-600 leading-6 hover:text-paceText"
                >
                   .Site.Params.navDiagnostics 

                </a>
              </li>
              <li class="mt-4">
                <a
                  href="/solutions/pace-groups"
                  class="text-gray-600 leading-6 hover:text-paceText"
                >
                   .Site.Params.navGroups 

                </a>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h4
              class="text-sm leading-5 font-semibold tracking-wider text-paceText uppercase"
            >
               .Site.Params.navCompany 

            </h4>
            <ul class="mt-4">
              <li>
                <a
                  href="/about-us"
                  class="text-gray-600 leading-6 hover:text-paceText"
                >
                   .Site.Params.navAbout 

                </a>
              </li>
              <li class="mt-4">
                <a
                  href="/blog"
                  class="text-gray-600 leading-6 hover:text-paceText"
                >
                   .Site.Params.navBlog 

                </a>
              </li>
              <li class="mt-4">
                <a
                  href="https://apply.workable.com/pacerevenue/"
                  target="_blank"                  class="text-gray-600 leading-6 hover:text-paceText"
                >
                   .Site.Params.navCareers 

                </a>
              </li>

            </ul>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h4
              class="text-sm leading-5 font-semibold tracking-wider text-paceText uppercase"
            >
               .Site.Params.navLegal 

            </h4>
            <ul class="mt-4">
              <li>
                <a
                  href="/legals/privacy-agreement"
                  class="text-gray-600 leading-6 hover:text-paceText"
                >
                   .Site.Params.footerPrivacy 

                </a>
              </li>
              <li class="mt-4">
                <a
                  href="/legals/terms-conditions"
                  class="text-gray-600 leading-6 hover:text-paceText"
                >
                   .Site.Params.footerTerms 

                </a>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0"></div>
        </div>
      </div>
      <div class="mt-8 xl:mt-0">
        <h4
          class="text-sm leading-5 font-semibold tracking-wider text-paceText uppercase"
        >
           .Site.Params.newsletterCta 

        </h4>
        <p class="mt-4  text-base leading-6">
           .Site.Params.newsletterSub 

        </p>

        <form
          class="sm:max-w-md"
          name="newsletter-footer"
          action="/thank-you-newsletter/"
        >
          <input
            required
            type="email"
            id="email-footer"
            placeholder=" .Site.Params.newsletterPlaceholder "
            class="form-input mt-4 w-full px-5 py-3 leading-6 rounded-full focus:outline-none"
          />
          <div class="flex mt-4">
            <button
              type="submit"
              class="px-4 py-2 text-base leading-6 font-semibold rounded-full text-paceText hover:bg-paceText hover:text-white border-paceText border-2 focus:outline-none focus:shadow-outline"
            >
               .Site.Params.newsletterButton 

            </button>
          </div>
        </form>
      </div>
    </div>
    <div
      class="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between"
    >
      <div class="flex md:order-2">
        <a
          href="https://twitter.com/PaceRevenue"
          target="_blank"
          class="ml-6 text-gray-400 hover:"
        >
          <span class="sr-only">Twitter</span>

          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 512 512">
            <path
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            ></path>
          </svg>
        </a>
        <a
          href="hhttps://www.linkedin.com/company/pacerevenue/"
          target="_blank"
          class="ml-6 text-gray-400 hover:"
        >
          <span class="sr-only">LinkedIn</span>
          <svg class="h-8 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M15.205 0H.695C.299 0 0 .3 0 .7v14.7c0 .3.298.6.696.6h14.608c.398 0 .696-.3.696-.7V.7c-.1-.4-.398-.7-.795-.7zM4.671 13.6H2.385V6H4.77v7.6h-.1zM3.578 5c-.795 0-1.392-.7-1.392-1.4 0-.8.597-1.4 1.392-1.4.795 0 1.39.6 1.39 1.4-.098.7-.695 1.4-1.39 1.4zm9.938 8.6H11.13V9.9c0-.9 0-2-1.192-2-1.193 0-1.391 1-1.391 2v3.8H6.16V6h2.286v1c.298-.6 1.093-1.2 2.187-1.2 2.385 0 2.782 1.6 2.782 3.6v4.2h.1z"
            />
          </svg>
        </a>
      </div>
      <p class="mt-8 text-base leading-6 text-gray-600 md:mt-0 md:order-1">
         .Site.Params.footerCopyright 

      </p>
    </div>
  </div>
</div>

  )
}
