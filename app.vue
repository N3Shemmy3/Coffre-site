<script setup>
const colorMode = useColorMode();
const isDarkMode = computed(() => colorMode.value == "dark");
const downloadLink = ref("");
const toggleTheme = () => {
  colorMode.preference = isDarkMode.value ? "light" : "dark";
};

const menuItems = [
  {
    icon: "lucide:github",
    name: "Github",
    url: "https://github.com/N3Shemmy3/Coffre",
  },
  {
    icon: "lucide:message-circle",
    name: "Telegram",
    url: "https://t.me/PixellateProjects",
  },
];
const tags = ["#Android", "#Native", "#Material-You", "#Java", "#XML", "#MD3"];

async function getLatestReleaseAsset(owner = "N3Shemmy3", repo = "Coffre") {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;
  const response = await fetch(apiUrl);
  if (!response.ok) throw new Error("Failed to fetch latest release");
  const release = await response.json();
  // Return the first asset, or null if none
  return release.assets && release.assets.length > 0 ? release.assets[0] : null;
}
onMounted(async () => {
  try {
    const asset = await getLatestReleaseAsset();
    if (asset) {
      downloadLink.value = asset.browser_download_url;
    } else {
      console.error("No assets found in the latest release.");
    }
  } catch (error) {
    console.error("Error fetching latest release asset:", error);
  }
});
</script>

<template>
  <div class="min-h-dvh scroll-smooth relative">
    <!--header-->
    <header
      class="w-full fixed left-0 top-0 right-0 flex items-center backdrop-blur-xl bg-colorSurface/10 z-50"
    >
      <div
        class="w-full max-w-full xl:max-w-7xl px-4 py-2 md:px-8 xl:mx-auto flex items-center justify-between"
      >
        <NuxtLink
          to="/"
          class="flex items-center gap-2 text-xl md:text-2xl font-bold text-colorOnPrimaryContainer"
        >
          <img
            class="size-8 rounded-full"
            src="data:image/png;base64,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QgAAKwRAgwCIEADACgHQIAAiBACwQgA0CIAIAQCsEAANAiBCAAArBECDAIgQAMAKAdAgACIEALBCADQIgAgBAKwQAA0CIEIAACsEQIMAiBAAwAoB0CAAIgQAsEIANAiACAEArBAADQIgQgAAKwRAgwCIEADACgHQIAAiBACwQgA0CIAIAQCsEAANAiBCAAArBECDAIgQAMAKAdAgACIEALBCADQIgAgBAKwQAA0CIEIAACsEQIMAiBAAwAoB0CAAIgQAsEIANAiACAEArBAADQIgQgAAKwRAgwCIEADACgHQIAAiBACwQgA0CIAIAQCsEAANAiBCAAArBECDAIgQAMAKAdAgACIEALBCADQIgAgBAKwQAA0CIEIAACsEQIMAiBAAwAoB0CAAIgQAsEIANAiACAEArBAADQIg4jvf/vjxwfvvwivvvPPyaWm+yV6+fPl4/70vPs3Jpm998xuPz3/+06c9yOslACJ+8tmnj08/+T688pUvf/R0ib7JPvrwvcePfvi9pznZ9NmPP3n88hc/e9qDvF4CAILeti8hT77QIwAgSAAA1wQABAkA4JoAgCABAFwTABAkAIBrAgCCBABwTQBAkAAArgkACBIAwDUBAEECALgmACBIAADXBAAECQDgmgCAIAEAXBMAECQAgGsCAIIEAHBNAECQAACuCQAIEgDANQEAQQIAuCYAIEgAANcEAAQJAOCaAIAgAQBcEwAQJACAawIAggQAcE0AQJAAAK4JAAgSAMA1AQBBAgC4JgAgSAAA1wQABAkA4JoAgCABAFwTABAkAIBrAgCCBABwTQBAkAAArgkACBIAwDUBAEECALgmACBIAADXBAAECQDgmgCAIAEAXBMAECQAgGsCAIIEAHBNAECQAACuCQAIEgDANQEAQQIAuCYAIEgAANcEAAQJAOCaAIAgAQBcEwAQJACAawIAggQAcE0AQJAAAK4JAAgSAMA1AQBBAgC4JgAgSAAA1wQABAkA4JoAgCABAFwTABAkAIBrAgCCBABwTQBAkAAArgkACBIAwDUBAEECALgmACBIAADXBAAECQDgmgCAIAEAXBMAECQAgGsCAIIEAHBNAECQAACuCQAIEgDANQEAQQIAuCYAIEgAANcEAAQJAOCaAIAgAQBcEwAQJACAawIAggQAcE0AQJAAAK4JAAgSAMA1AQBBAgC4JgAgSAAA1wQABAkA4JoAgCABAFwTABAkAIBrAgCCBABwTQBAkAAArgkACBIAwDUBAEECALgmACBIAADXBAAECQDgmgCAIAEAXBMAECQAgGsCAIIEAHBNAECQAACuCQAIEgDANQEAQQIAuCYAIEgAANcEAAQJAOCaAIAgAQBcEwAQJACAawIAggQAcE0AQJAAAK4JAAgSAMA1AQBBAgC4JgAgSAAA1wQABAkA4JoAgCABAFwTABAkAIBrAgCCBABwTQBAkAAArgkACBIAwDUBAEECALgmAABgkAAAgEECAAAGCQAAGCQAAGCQAACAQQIAAAYJAAAYJAAAYJAAAIBBAgAABgkAABgkAABgkAAAgEECAAAGCQAAGCQAAGCQAACAQQIAAAYJAAAYJAAAYJAAAIBBAgAABgkAABgkAABgkAAAgEECAAAGCQAAGCQAAGCQAACAQQIAAAYJAAAYJAAAYJAAAIBBAgAABgkAABgkAABgkAAAgEECAAAGCQAAGCQAAGCQAACAQQIAAAYJAAAYJAAAYJAAAIBBAgAABgkAABgkAABgkAAAgEECAAAGCQAAGCQAAGCQAACAQQIAAAYJAAAYJAAAYJAAAIBBAgAABgkAABgkAABgkAAAgEECAAAGCQAAGCQAAGCQAACAQQIAAAYJAAAYJAAAYJAAAIBBAgAABgkAABgkAABgkAAAgEECAAAGCQAAGCQAAGCQAACAQQIAAAYJAAAYJAAAYJAAAIBBAgAABgkAABgkAABgkAAAgEECAAAGCQAAGCQAAGCQAACAQQIAAAYJAAAYJAAAYJAAAIBBAgAABgkAABgkAABgkAAAgEECAAAGCQAAGCQAAGCQAACAQQIAAAYJAAAYJAAAYJAAAIBBAgAABgkAABgkAABgkAAAgEECAAAGCQAAGCQAAGCQAACAQQIAAAYJAAAYJAAAYJAAAIBBAgAABgkAABgkAABgkAAAgEECAAAGCQAAGPS/5N3uFD71AKIAAAAASUVORK5CYII="
            alt=""
          />
          <span>Coffre </span>
        </NuxtLink>
        <nav
          class="w-fit flex items-center gap-2 md:gap-4 text-colorOnPrimaryContainer"
        >
          <NuxtLink
            taget="_blank"
            v-for="item in menuItems"
            :key="item.name"
            :to="item.url"
          >
            <button
              class="size-12 flex items-center justify-center outline-0 rounded-full transition-all duration-300 hover:bg-colorSecondaryContainer cursor-pointer"
            >
              <Icon :name="item.icon" size="24" class />
            </button>
          </NuxtLink>

          <button
            @click.stop.prevent="toggleTheme"
            aria-label="Switch Theme"
            :name="isDarkMode ? 'lucide:sun' : 'lucide:moon'"
            class="size-12 flex items-center justify-center outline-0 theme-toggle-button rounded-full transition-all duration-300 hover:bg-colorSecondaryContainer cursor-pointer"
          >
            <Icon class="pointer-events-none" name="lucide:sun" size="24" />
          </button>
        </nav>
      </div>
    </header>
    <!--header-->

    <!--main-->
    <main
      class="relative w-full min-h-dvh 2xl:min-h-[826px] xl:max-w-7xl px-4 py-2 pt-16 md:px-8 mx-auto flex max-lg:flex-col items-center md:gap-4"
    >
      <!-- Grid Background-->
      <div
        id="grid-background"
        class="absolute -z-10 top-0 left-0 right-0 bottom-0 grid-background opacity-10 pointer-events-none"
      />
      <div
        id="left-gradient"
        class="absolute -z-[9] left-0 top-0 bottom-0 w-[20%] bg-gradient-to-r from-colorSurface to-transparent"
      />
      <div
        id="top-gradient"
        class="absolute -z-[9] left-0 top-0 right-0 h-[20%] bg-gradient-to-b from-colorSurface to-transparent"
      />
      <div
        id="right-gradient"
        class="absolute -z-[9] top-0 bottom-0 right-0 w-[20%] bg-gradient-to-l from-colorSurface to-transparent"
      />
      <div
        id="bottom-gradient"
        class="absolute -z-[9] left-0 right-0 bottom-0 h-[30%] bg-gradient-to-t from-colorSurface to-transparent"
      />
      <!-- Grid Background-->
      <!--Hero Text -->
      <div class="md:w-fit flex flex-col gap-2 max-sm:pt-8">
        <h1
          class="scroll-m-20 font-phudu text-colorPrimary text-6xl font-extrabold tracking-tight lg:text-8xl"
        >
          COFFRE
        </h1>
        <h2
          class="scroll-m-20 font-phudu text-2xl lg:text-5xl font-bold tracking-tight transition-colors"
        >
          Personal Finance Made Easy
        </h2>
        <p class="leading-7 md:text-lg text-colorOutline">
          Track your income, expenses, and transfers with ease, gain insights
          into your spending habits, and achieve your financial goals.
        </p>

        <div class="mt-8 flex items-center gap-2 md:gap-4">
          <NuxtLink
            to="https://github.com/N3Shemmy3/Coffre/releases"
            taget="_blank"
          >
            <button
              class="px-4 py-2 md:px-8 md:py-3 cursor-pointer drop-shadow-2xl shadow-2xl rounded-full hover:bg-colorOnPrimaryContainer hover:text-colorOnPrimary duration-300 transition-all bg-colorPrimary text-colorOnPrimary"
            >
              Download
            </button>
          </NuxtLink>
          <NuxtLink to="https://github.com/N3Shemmy3/Coffre" taget="_blank">
            <button
              class="px-4 py-2 md:px-8 md:py-3 cursor-pointer drop-shadow-2xl shadow-2xl rounded-full bg-colorSecondaryContainer text-colorOnSecondaryContainer duration-300 transition-all hover:bg-colorSurfaceContainerLow"
            >
              Constribute
            </button>
          </NuxtLink>
        </div>
        <!--Tags-->
        <div>
          <div class="flex items-center gap-2 mt-8">
            <span
              v-for="(tag, index) in tags.slice(0, 3)"
              class="text-nowrap text-xs md:text-sm px-3 py-1 transition-all duration-300 rounded-full hover:bg-colorSecondaryContainer border border-colorOutline text-colorOutline"
            >
              {{ tag }}</span
            >
          </div>
          <div class="flex px-6 items-center gap-2 mt-2">
            <span
              v-for="(tag, index) in tags.slice(3, tags.length)"
              class="text-nowrap text-sm px-3 py-1 transition-all duration-300 rounded-full hover:bg-colorSecondaryContainer border border-colorOutline text-colorOutline"
            >
              {{ tag }}</span
            >
          </div>
        </div>
      </div>
      <!--Hero App -->
      <div class="w-fit relative flex justify-center rounded-lg">
        <Phone />
      </div>
      <div
        id="bottom-gradient"
        class="absolute left-0 right-0 bottom-0 h-[30%] bg-gradient-to-t from-colorSurface to-transparent"
      />
    </main>
  </div>
</template>
<style>
.theme-toggle-button {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.theme-toggle-button:active {
  transform: rotate(360deg);
}

.font-phudu {
  font-family: "Phudu", sans-serif;
}

.grid-background {
  background-image: repeating-linear-gradient(
      var(--color-colorPrimary) 0 1px,
      transparent 1px 100%
    ),
    repeating-linear-gradient(
      90deg,
      var(--color-colorPrimary) 0 1px,
      transparent 1px 100%
    );
  background-size: 56px 56px;
}
</style>
