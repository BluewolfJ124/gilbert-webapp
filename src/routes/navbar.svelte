<script>
    import giraffe from "$lib/images/giraffe.svg"
    import { goto } from '$app/navigation'
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
    import { page } from '$app/stores';
    $: activeUrl = $page.url.pathname;
    import { DarkMode } from 'flowbite-svelte';
</script>
  <Navbar rounded class='bg-primary-400 dark:bg-secondary-800 fixed z-20 top-0 start-0 border-b'>
    <NavBrand href="/">
      <img src={giraffe} class="me-3 h-6 sm:h-9" alt="Logo" />
      <span class="self-center whitespace-nowrap text-4xl font-semibold text-white">Gilbert Website</span>
    </NavBrand>
    <NavHamburger />
    <NavUl {activeUrl}>
      <NavLi class="text-xl text-white dark:text-white" href="/">Home</NavLi>
      <NavLi class="cursor-pointer text-xl text-white dark:text-white" >
        Minecraft Server<ChevronDownOutline class="w-6 h-6 ms-2 dark:text-white inline" />
      </NavLi>
      <Dropdown class="w-44 z-20 ">
        <DropdownItem class="text-lg" href="/about">Join now</DropdownItem>
        <DropdownItem class="text-lg" href="/map">Map</DropdownItem>
        <DropdownItem class="text-lg" href="/about">World Download</DropdownItem>
      </Dropdown>
      <NavLi class="text-xl text-white dark:text-white" href="/about">About</NavLi>
      <NavLi class="text-xl text-white dark:text-white" href="/about">Contact</NavLi>
      <DarkMode class="text-white dark:text-white transform -translate-y-1"/>
    </NavUl>
  </Navbar>
<div style="margin-bottom: 10rem"></div>