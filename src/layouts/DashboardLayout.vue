<template>
  <div class="min-h-screen bg-[#f8f7fa] font-sans text-dark">
    <!-- Mobile Sidebar Backdrop -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <button
        v-if="mobileSidebarOpen"
        type="button"
        aria-label="Close sidebar"
        class="fixed inset-0 z-40 bg-dark/55 backdrop-blur-[2px] lg:hidden"
        @click="closeMobileSidebar"
      />
    </Transition>

    <!-- Sidebar -->
    <aside
      class="fixed inset-y-0 left-0 z-50 flex flex-col border-r border-white/10 bg-dark text-white shadow-2xl transition-all duration-300"
      :class="[
        desktopSidebarCollapsed ? 'lg:w-24' : 'lg:w-72',
        mobileSidebarOpen
          ? 'w-[290px] translate-x-0'
          : 'w-[290px] -translate-x-full lg:translate-x-0',
      ]"
    >
      <!-- Sidebar Logo -->
      <div
        class="flex h-20 shrink-0 items-center border-b border-white/10 px-5"
        :class="desktopSidebarCollapsed ? 'lg:justify-center lg:px-3' : 'justify-between'"
      >
        <RouterLink
          to="/admin"
          class="flex min-w-0 items-center gap-3"
          @click="closeMobileSidebar"
        >
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-lg">
            <img
              src="@/assets/images/logo.png"
              alt="WeSupportHer"
              class="h-full w-full object-contain"
            />
          </div>

          <div
            class="min-w-0 transition-all duration-300"
            :class="desktopSidebarCollapsed ? 'lg:hidden' : ''"
          >
            <p class="truncate text-base font-black text-white">
              WeSupportHer
            </p>

            <p class="truncate text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
              Admin Dashboard
            </p>
          </div>
        </RouterLink>

        <button
          type="button"
          aria-label="Close sidebar"
          class="flex h-10 w-10 items-center justify-center rounded-xl text-white/70 transition hover:bg-white/10 hover:text-white lg:hidden"
          @click="closeMobileSidebar"
        >
          <X class="h-5 w-5" />
        </button>
      </div>

      <!-- Sidebar Navigation -->
      <div class="flex-1 overflow-y-auto px-4 py-6 dashboard-scrollbar">
        <nav class="space-y-7">
          <div
            v-for="group in menuGroups"
            :key="group.label"
          >
            <p
              class="mb-3 px-3 text-[10px] font-black uppercase tracking-[0.24em] text-white/35"
              :class="desktopSidebarCollapsed ? 'lg:text-center lg:px-0' : ''"
            >
              <span :class="desktopSidebarCollapsed ? 'lg:hidden' : ''">
                {{ group.label }}
              </span>

              <span
                v-if="desktopSidebarCollapsed"
                class="hidden h-px w-full bg-white/10 lg:block"
              />
            </p>

            <div class="space-y-1.5">
              <RouterLink
                v-for="item in group.items"
                :key="item.label"
                :to="item.to"
                class="group relative flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-bold transition duration-200"
                :class="[
                  isActive(item)
                    ? 'bg-secondary text-white shadow-lg shadow-secondary/20'
                    : 'text-white/65 hover:bg-white/10 hover:text-white',
                  desktopSidebarCollapsed
                    ? 'lg:justify-center lg:px-0'
                    : '',
                ]"
                @click="closeMobileSidebar"
              >
                <component
                  :is="item.icon"
                  class="h-5 w-5 shrink-0"
                  :class="isActive(item) ? 'text-white' : 'text-white/55 group-hover:text-white'"
                />

                <span
                  class="truncate"
                  :class="desktopSidebarCollapsed ? 'lg:hidden' : ''"
                >
                  {{ item.label }}
                </span>

                <span
                  v-if="item.badge"
                  class="ml-auto rounded-full px-2 py-0.5 text-[10px] font-black"
                  :class="[
                    isActive(item)
                      ? 'bg-white/20 text-white'
                      : 'bg-secondary/20 text-orange-200',
                    desktopSidebarCollapsed ? 'lg:hidden' : '',
                  ]"
                >
                  {{ item.badge }}
                </span>

                <!-- Collapsed Sidebar Tooltip -->
                <span
                  v-if="desktopSidebarCollapsed"
                  class="pointer-events-none absolute left-[calc(100%+14px)] z-50 hidden whitespace-nowrap rounded-xl bg-dark px-3 py-2 text-xs font-bold text-white opacity-0 shadow-xl transition group-hover:opacity-100 lg:block"
                >
                  {{ item.label }}
                </span>
              </RouterLink>
            </div>
          </div>
        </nav>
      </div>

      <!-- Sidebar Bottom -->
      <div class="shrink-0 border-t border-white/10 p-4">
        <RouterLink
          to="/"
          class="group flex items-center gap-3 rounded-2xl bg-white/5 px-3 py-3 text-sm font-bold text-white/70 transition hover:bg-white/10 hover:text-white"
          :class="desktopSidebarCollapsed ? 'lg:justify-center lg:px-0' : ''"
          @click="closeMobileSidebar"
        >
          <ExternalLink class="h-5 w-5 shrink-0 text-secondary" />

          <span :class="desktopSidebarCollapsed ? 'lg:hidden' : ''">
            View Website
          </span>
        </RouterLink>
      </div>
    </aside>

    <!-- Page Wrapper -->
    <div
      class="flex min-h-screen flex-col transition-all duration-300"
      :class="desktopSidebarCollapsed ? 'lg:pl-24' : 'lg:pl-72'"
    >
      <!-- Dashboard Header -->
      <header class="sticky top-0 z-30 border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <div class="flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <!-- Header Left -->
          <div class="flex min-w-0 items-center gap-3">
            <button
              type="button"
              aria-label="Open sidebar"
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/5 bg-cream text-dark transition hover:border-secondary/30 hover:text-secondary lg:hidden"
              @click="openMobileSidebar"
            >
              <Menu class="h-5 w-5" />
            </button>

            <button
              type="button"
              :aria-label="
                desktopSidebarCollapsed
                  ? 'Expand sidebar'
                  : 'Collapse sidebar'
              "
              class="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/5 bg-cream text-dark transition hover:border-secondary/30 hover:text-secondary lg:flex"
              @click="desktopSidebarCollapsed = !desktopSidebarCollapsed"
            >
              <PanelLeftOpen
                v-if="desktopSidebarCollapsed"
                class="h-5 w-5"
              />

              <PanelLeftClose
                v-else
                class="h-5 w-5"
              />
            </button>

            <div class="min-w-0">
              <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">
                Administration
              </p>

              <h1 class="truncate text-lg font-black text-dark sm:text-xl">
                {{ pageTitle }}
              </h1>
            </div>
          </div>

          <!-- Header Right -->
          <div class="flex items-center gap-2 sm:gap-3">
            <!-- Search -->
            <div class="hidden xl:block">
              <label class="relative block">
                <Search class="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-dark/35" />

                <input
                  v-model="searchQuery"
                  type="search"
                  placeholder="Search dashboard..."
                  class="h-11 w-64 rounded-xl border border-black/5 bg-cream pl-11 pr-4 text-sm text-dark outline-none transition placeholder:text-dark/35 focus:border-secondary/40 focus:bg-white"
                />
              </label>
            </div>

            <!-- Notifications -->
            <button
              type="button"
              aria-label="Notifications"
              class="relative flex h-11 w-11 items-center justify-center rounded-xl border border-black/5 bg-cream text-dark/65 transition hover:border-secondary/30 hover:text-secondary"
            >
              <Bell class="h-5 w-5" />

              <span class="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-secondary" />
            </button>

            <!-- Profile -->
            <div ref="profileMenuRef" class="relative">
              <button
                type="button"
                class="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-1.5 pr-2 transition hover:border-secondary/20 hover:shadow-md"
                @click="profileMenuOpen = !profileMenuOpen"
              >
                <div class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-soft-purple">
                  <UserRound class="h-5 w-5 text-primary" />
                </div>

                <div class="hidden text-left md:block">
                  <p class="max-w-32 truncate text-sm font-black text-dark">
                    Administrator
                  </p>

                  <p class="text-[11px] font-semibold text-dark/45">
                    Super Admin
                  </p>
                </div>

                <ChevronDown
                  class="hidden h-4 w-4 text-dark/40 transition md:block"
                  :class="{ 'rotate-180': profileMenuOpen }"
                />
              </button>

              <Transition
                enter-active-class="transition duration-200"
                enter-from-class="-translate-y-2 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="-translate-y-2 opacity-0"
              >
                <div
                  v-if="profileMenuOpen"
                  class="absolute right-0 top-[calc(100%+12px)] w-56 overflow-hidden rounded-2xl border border-black/5 bg-white p-2 shadow-2xl shadow-black/10"
                >
                  <RouterLink
                    to="/admin/profile"
                    class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-dark/70 transition hover:bg-cream hover:text-secondary"
                    @click="profileMenuOpen = false"
                  >
                    <UserRound class="h-4 w-4" />
                    My Profile
                  </RouterLink>

                  <RouterLink
                    to="/admin/settings"
                    class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-dark/70 transition hover:bg-cream hover:text-secondary"
                    @click="profileMenuOpen = false"
                  >
                    <Settings class="h-4 w-4" />
                    Settings
                  </RouterLink>

                  <div class="my-2 h-px bg-black/5" />

                  <button
                    type="button"
                    class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-bold text-red-600 transition hover:bg-red-50"
                    @click="logout"
                  >
                    <LogOut class="h-4 w-4" />
                    Sign Out
                  </button>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content
           flex-1 pushes the footer down when a page has little content.
           min-h-[calc(100vh-10rem)] gives inner pages a substantial content area.
      -->
      <main class="flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div class="mx-auto min-h-[calc(100vh-12rem)] w-full max-w-[1600px]">
          <slot />
        </div>
      </main>

      <!-- Dashboard Footer -->
      <footer class="mt-auto border-t border-black/5 bg-white">
        <div
          class="mx-auto flex min-h-20 max-w-[1600px] flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:text-left lg:px-8"
        >
          <div>
            <p class="text-sm font-bold text-dark/65">
              © {{ currentYear }} WeSupportHer. All rights reserved.
            </p>

            <p class="mt-1 text-xs text-dark/40">
              Empowering women. Uplifting communities. Building futures.
            </p>
          </div>

          <div class="flex items-center gap-2 text-xs font-semibold text-dark/45">
            <span>Developed by</span>

            <a
              href="https://vicsystems.us"
              target="_blank"
              rel="noopener noreferrer"
              class="font-black text-secondary transition hover:text-primary"
            >
              Vicsystems Technologies
            </a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  watch,
} from 'vue'
import { useRoute, useRouter } from 'vue-router'

import {
  LayoutDashboard,
  Newspaper,
  FolderTree,
  Image,
  Mail,
  HandHeart,
  MessageSquareText,
  BarChart3,
  Settings,
  UserRound,
  ShieldCheck,
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
  LogOut,
  ExternalLink,
  PanelLeftClose,
  PanelLeftOpen,
  FileText,
} from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const mobileSidebarOpen = ref(false)
const desktopSidebarCollapsed = ref(false)
const profileMenuOpen = ref(false)
const profileMenuRef = ref(null)
const searchQuery = ref('')

const currentYear = new Date().getFullYear()

const menuGroups = [
  {
    label: 'Overview',
    items: [
      {
        label: 'Dashboard',
        to: '/admin',
        icon: LayoutDashboard,
        exact: true,
      },
      {
        label: 'Website Analytics',
        to: '/admin/analytics',
        icon: BarChart3,
      },
    ],
  },

  {
    label: 'Blog Management',
    items: [
      {
        label: 'Blog Posts',
        to: '/admin/posts',
        icon: Newspaper,
      },
      {
        label: 'Post Categories',
        to: '/admin/post-categories',
        icon: FolderTree,
      },
      {
        label: 'Media Library',
        to: '/admin/media',
        icon: Image,
      },
    ],
  },

  {
    label: 'Submissions',
    items: [
      {
        label: 'Volunteer Forms',
        to: '/admin/volunteer-submissions',
        icon: HandHeart,
        badge: 'New',
      },
      {
        label: 'Contact Messages',
        to: '/admin/contact-submissions',
        icon: MessageSquareText,
        badge: 'New',
      },
    ],
  },

  {
    label: 'Newsletter',
    items: [
      {
        label: 'Subscribers',
        to: '/admin/subscribers',
        icon: Mail,
      },
      {
        label: 'Newsletter Content',
        to: '/admin/newsletters',
        icon: FileText,
      },
    ],
  },

  {
    label: 'System',
    items: [
      {
        label: 'Administrators',
        to: '/admin/administrators',
        icon: ShieldCheck,
      },
      {
        label: 'Settings',
        to: '/admin/settings',
        icon: Settings,
      },
    ],
  },
]

const pageTitle = computed(() => {
  const currentMenuItem = menuGroups
    .flatMap((group) => group.items)
    .find((item) => isActive(item))

  return currentMenuItem?.label || route.meta?.title || 'Dashboard'
})

const isActive = (item) => {
  if (item.exact) {
    return route.path === item.to
  }

  return route.path === item.to || route.path.startsWith(`${item.to}/`)
}

const openMobileSidebar = () => {
  mobileSidebarOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeMobileSidebar = () => {
  mobileSidebarOpen.value = false
  document.body.style.overflow = ''
}

const logout = async () => {
  profileMenuOpen.value = false

  const token =
    localStorage.getItem('wsh_admin_token') ||
    sessionStorage.getItem('wsh_admin_token')

  try {
    await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/auth/logout`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          ...(token
            ? {
                Authorization: `Bearer ${token}`,
              }
            : {}),
        },
        credentials: 'include',
      },
    )
  } catch (error) {
    console.error('Logout request failed:', error)
  } finally {
    localStorage.removeItem('wsh_admin_token')
    localStorage.removeItem('wsh_admin_user')

    sessionStorage.removeItem('wsh_admin_token')
    sessionStorage.removeItem('wsh_admin_user')

    await router.replace('/login')
  }
}

const handleOutsideClick = (event) => {
  if (
    profileMenuRef.value &&
    !profileMenuRef.value.contains(event.target)
  ) {
    profileMenuOpen.value = false
  }
}

watch(
  () => route.fullPath,
  () => {
    closeMobileSidebar()
    profileMenuOpen.value = false
  },
)

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.dashboard-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.16) transparent;
}

.dashboard-scrollbar::-webkit-scrollbar {
  width: 5px;
}

.dashboard-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.dashboard-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.16);
  border-radius: 999px;
}

.dashboard-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.28);
}
</style>