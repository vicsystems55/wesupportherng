<template>
  <DashboardLayout>
    <div class="space-y-6">
      <!-- Welcome -->
      <div class="rounded-3xl bg-gradient-to-r from-primary to-secondary p-7 text-white shadow-xl shadow-primary/15">
        <p class="text-xs font-black uppercase tracking-[0.2em] text-white/70">
          Welcome Back
        </p>

        <h2 class="mt-3 font-display text-3xl font-black sm:text-4xl">
          WeSupportHer Admin Dashboard
        </h2>

        <p class="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
          Manage website content, volunteers, events, products, orders and
          other administrative records from one central workspace.
        </p>
      </div>

      <!-- Summary Cards -->
      <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="item in summaryCards"
          :key="item.label"
          class="rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-sm font-bold text-dark/50">
                {{ item.label }}
              </p>

              <h3 class="mt-3 text-3xl font-black text-dark">
                {{ item.value }}
              </h3>

              <p class="mt-2 text-xs font-semibold" :class="item.changeColor">
                {{ item.change }}
              </p>
            </div>

            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl"
              :class="item.bg"
            >
              <component
                :is="item.icon"
                class="h-7 w-7"
                :class="item.color"
              />
            </div>
          </div>
        </article>
      </div>

      <!-- Dashboard Content -->
      <div class="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <div class="min-h-[420px] rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="text-xs font-black uppercase tracking-[0.2em] text-secondary">
                Recent Activity
              </p>

              <h3 class="mt-2 text-2xl font-black text-dark">
                Latest updates
              </h3>
            </div>

            <RouterLink
              to="/admin/posts"
              class="text-sm font-bold text-secondary"
            >
              View All →
            </RouterLink>
          </div>

          <div class="mt-6 divide-y divide-black/5">
            <div
              v-for="activity in activities"
              :key="activity.title"
              class="flex items-start gap-4 py-5 first:pt-0 last:pb-0"
            >
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                :class="activity.bg"
              >
                <component
                  :is="activity.icon"
                  class="h-5 w-5"
                  :class="activity.color"
                />
              </div>

              <div class="min-w-0 flex-1">
                <p class="font-black text-dark">
                  {{ activity.title }}
                </p>

                <p class="mt-1 text-sm leading-relaxed text-dark/55">
                  {{ activity.text }}
                </p>
              </div>

              <p class="shrink-0 text-xs font-semibold text-dark/35">
                {{ activity.time }}
              </p>
            </div>
          </div>
        </div>

        <div class="min-h-[420px] rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
          <p class="text-xs font-black uppercase tracking-[0.2em] text-primary">
            Quick Actions
          </p>

          <h3 class="mt-2 text-2xl font-black text-dark">
            Create a record
          </h3>

          <div class="mt-6 space-y-3">
            <RouterLink
              v-for="action in quickActions"
              :key="action.label"
              :to="action.to"
              class="group flex items-center gap-4 rounded-2xl border border-black/5 bg-cream p-4 transition hover:border-secondary/20 hover:bg-white hover:shadow-md"
            >
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl"
                :class="action.bg"
              >
                <component
                  :is="action.icon"
                  class="h-5 w-5"
                  :class="action.color"
                />
              </div>

              <div class="flex-1">
                <p class="text-sm font-black text-dark">
                  {{ action.label }}
                </p>

                <p class="mt-1 text-xs text-dark/45">
                  {{ action.text }}
                </p>
              </div>

              <span class="text-secondary transition group-hover:translate-x-1">
                →
              </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import {
  Newspaper,
  HandHeart,
  CalendarDays,
  ShoppingCart,
  FilePlus2,
  UserPlus,
  PackagePlus,
} from 'lucide-vue-next'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const summaryCards = [
  {
    label: 'Published Posts',
    value: '24',
    change: '+4 this month',
    icon: Newspaper,
    color: 'text-primary',
    bg: 'bg-soft-purple',
    changeColor: 'text-primary',
  },
  {
    label: 'Volunteers',
    value: '128',
    change: '+12 this month',
    icon: HandHeart,
    color: 'text-secondary',
    bg: 'bg-soft-orange',
    changeColor: 'text-secondary',
  },
  {
    label: 'Upcoming Events',
    value: '6',
    change: '2 this week',
    icon: CalendarDays,
    color: 'text-accent',
    bg: 'bg-soft-green',
    changeColor: 'text-accent',
  }
]

const activities = [
  {
    title: 'New blog post published',
    text: 'Menstrual Health Education and Community Support was published.',
    time: '10 min ago',
    icon: Newspaper,
    color: 'text-primary',
    bg: 'bg-soft-purple',
  },
  {
    title: 'New volunteer application',
    text: 'A new volunteer application requires review.',
    time: '1 hour ago',
    icon: HandHeart,
    color: 'text-secondary',
    bg: 'bg-soft-orange',
  },
  {
    title: 'Event updated',
    text: 'The World Menstrual Hygiene Day event details were updated.',
    time: '3 hours ago',
    icon: CalendarDays,
    color: 'text-accent',
    bg: 'bg-soft-green',
  },
]

const quickActions = [
  {
    label: 'Create Blog Post',
    text: 'Publish a new story or update.',
    to: '/admin/posts/create',
    icon: FilePlus2,
    color: 'text-primary',
    bg: 'bg-soft-purple',
  },
  {
    label: 'Add Volunteer',
    text: 'Create a volunteer record.',
    to: '/admin/volunteers/create',
    icon: UserPlus,
    color: 'text-secondary',
    bg: 'bg-soft-orange',
  },
  {
    label: 'Add Product',
    text: 'Create a new store product.',
    to: '/admin/products/create',
    icon: PackagePlus,
    color: 'text-accent',
    bg: 'bg-soft-green',
  },
]
</script>