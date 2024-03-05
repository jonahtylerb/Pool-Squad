<script>
  let theme = "light";

  const toggleTheme = () => {
    if (theme === "dark") {
      theme = "light";
      document.documentElement.setAttribute("data-theme", "dark");
      return;
    }
    theme = "dark";
    document.documentElement.setAttribute("data-theme", "light");
  };
</script>

<nav
  class="py-5 px-10 shadow-lg z-1000 fixed top-0 left-0 items-center right-0 w-full bg-$pico-background-color"
>
  <ul>
    <img src="/logo.png" class="w-10" alt="logo" />
    <li><a class="text-xl" href="/">POOL SQUAD</a></li>
  </ul>
  <ul class="ml-auto mr-5">
    <li class="">
      <a href="tel:6013360308"
        ><span class="text-xl text-$pico-color i-tabler-phone">P</span> CONTACT</a
      >
    </li>
  </ul>
  <ul class="lt-sm:fixed lt-sm:bottom-0 lt-sm:right-0 lt-sm:p-3">
    <li>
      <button on:click={toggleTheme}>
        {#if theme === "light"}
          <span class="text-sm i-tabler-moon">Dark</span>
        {:else}
          <span class="text-sm i-tabler-sun">Light</span>
        {/if}
      </button>
    </li>
  </ul>
</nav>
