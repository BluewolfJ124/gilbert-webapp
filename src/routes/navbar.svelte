<script>
    import giraffe from "$lib/images/giraffe.svg"
    import { goto } from '$app/navigation'
    import { Button, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
    import { page } from '$app/stores';
    $: activeUrl = $page.url.pathname;
    let activeClass = 'text-white md:text-primary-600 md:dark:text-secondary-600';
    import { DarkMode } from 'flowbite-svelte';
</script>
  <Navbar class='px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b bg-lightNavbar dark:bg-navbar backdrop-blur-lg'>
    <NavBrand href="/">
      <img src={giraffe} class="me-3 h-6 sm:h-9" alt="Logo" />
      <span class="self-center whitespace-nowrap text-4xl font-semibold text-fontPrimaryLight dark:text-fontPrimary">Gilbert Website</span>
    </NavBrand>
    <NavHamburger />
    <NavUl {activeUrl} {activeClass}>
      <NavLi class="text-xl text-fontPrimaryLight dark:text-fontPrimary" href="/">Home</NavLi>
      <NavLi class="cursor-pointer text-xl text-fontPrimaryLight dark:text-fontPrimary" >
        Minecraft Server<ChevronDownOutline class="w-6 h-6 ms-2 dark:text-white inline" />
      </NavLi>
      <Dropdown class="w-44 z-50">
        <DropdownItem class="text-lg" href="/mods">Mods</DropdownItem>
        <DropdownItem class="text-lg" href="/map">Map</DropdownItem>
        <DropdownItem class="text-lg" href="/worlddownload">World Download</DropdownItem>
      </Dropdown>
      <NavLi class="text-xl text-fontPrimaryLight dark:text-fontPrimary" href="/about">About</NavLi>
      <NavLi class="text-xl text-fontPrimaryLight dark:text-fontPrimary" href="/about">Contact</NavLi>
      <DarkMode class="text-fontPrimaryLight dark:text-fontPrimary transform -translate-y-1"/>
    </NavUl>
  </Navbar>
  <div class="mb-40"></div>