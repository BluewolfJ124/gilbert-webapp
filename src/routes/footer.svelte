<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';
    import { YoutubeSolid, GithubSolid, DiscordSolid } from 'flowbite-svelte-icons';
  </script>
  
  <Footer footerType="socialmedia" class="bg-secondary-600 dark:bg-secondary-900 rounded-2xl -mx-[10vw]">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 class="mb-6 text-m font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
          <FooterLinkGroup class="text-l text-lightParagraph dark:text-paragraph">
            <FooterLink liClass="mb-4" href="/worlddownload">World Download</FooterLink>
            <FooterLink liClass="mb-4" href="/map">World Map</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-m font-semibold uppercase text-gray-900 dark:text-white">Play now</h2>
          <FooterLinkGroup class="text-l text-lightParagraph dark:text-paragraph">
            <FooterLink liClass="mb-4" href="/play">Gilbert Server</FooterLink>
            <FooterLink liClass="mb-4" href="/">Discord</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-m font-semibold uppercase text-gray-900 dark:text-white">About me</h2>
          <FooterLinkGroup class="text-l text-lightParagraph dark:text-paragraph">
            <FooterLink liClass="mb-4" href="/about">About</FooterLink>
            <FooterLink liClass="mb-4" href="/">Projects</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterCopyright class="text-xl" href="/" by="Gilbertweb.site" />
      <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0">
        <FooterIcon href="https://www.youtube.com/@gilbet3141">
          <YoutubeSolid class="w-10 h-10 text-gray-500 dark:text-fontPrimary hover:text-gray-900 dark:hover:text-gray-400" />
        </FooterIcon>
        <FooterIcon href="/">
          <DiscordSolid class="w-10 h-10 text-gray-500 dark:text-fontPrimary hover:text-gray-900 dark:hover:text-gray-400" />
        </FooterIcon>
        <FooterIcon href="https://github.com/BluewolfJ124">
          <GithubSolid class="w-10 h-10 text-gray-500 dark:text-fontPrimary hover:text-gray-900 dark:hover:text-gray-400" />
        </FooterIcon>
      </div>
    </div>
  </Footer>