<template>
    <section class="relative overflow-hidden bg-cream py-24">
        <img src="@/assets/images/leaves.png" alt=""
            class="pointer-events-none absolute -left-20 top-16 w-72 opacity-10" />

        <img src="@/assets/images/leaves.png" alt=""
            class="pointer-events-none absolute -right-24 bottom-8 w-80 rotate-180 opacity-10" />

        <div class="relative z-10 mx-auto max-w-7xl px-5">
            <div class="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
                <!-- Image -->
                <div class="reveal relative">
                    <div class="absolute -left-5 -top-5 h-full w-full rounded-[2rem] bg-primary/10"></div>

                    <div class="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-black/10">
                        <img src="@/assets/images/home-hero-bg-3.png" alt="WeSupportHer community outreach"
                            class="h-[520px] w-full object-cover object-center" />

                        <div class="absolute inset-0 bg-gradient-to-t from-dark/45 via-transparent to-transparent">
                        </div>

                        <div class="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 backdrop-blur-md">
                            <p class="text-sm font-black uppercase tracking-[0.2em] text-secondary">
                                Women-led. Community-driven.
                            </p>

                            <p class="mt-2 text-sm font-semibold leading-relaxed text-dark/75">
                                Advancing gender equity through health, advocacy, leadership and action.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div class="reveal">
                    <span
                        class="inline-flex rounded-full bg-soft-orange px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-secondary">
                        Who We Are
                    </span>

                    <h2 class="mt-6 font-display text-4xl font-black leading-tight text-dark md:text-5xl">
                        A women-led movement
                        <span class="text-secondary">supporting women and girls</span>
                        to thrive.
                    </h2>

                    <p class="mt-6 text-base leading-relaxed text-dark/70 md:text-lg">
                        WeSupportHer (WSH) is a non-governmental organisation dedicated to
                        advancing gender equity by promoting the health, leadership,
                        representation and empowerment of girls and women.
                    </p>

                    <p class="mt-5 text-base leading-relaxed text-dark/70 md:text-lg">
                        Founded in 2024 by Toyin Bashir, WSH exists to dismantle barriers,
                        amplify women’s voices, and create opportunities for girls and women
                        to realise their full potential through advocacy, education,
                        partnerships and community-driven action.
                    </p>

                    <div class="mt-8 grid gap-4 sm:grid-cols-3">
                        <div v-for="item in highlights" :key="item.title"
                            class="rounded-2xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            :class="item.border">
                            <div class="flex h-16 w-16 items-center justify-center rounded-2xl" :class="item.bg">
                                <component :is="item.icon" class="h-8 w-8" :class="item.color" />
                            </div>

                            <h3 class="mt-5 text-base font-black uppercase" :class="item.color">
                                {{ item.title }}
                            </h3>

                            <p class="mt-3 text-sm leading-relaxed text-dark/65">
                                {{ item.text }}
                            </p>
                        </div>
                    </div>

                    <RouterLink to="/our-initiatives"
                        class="mt-8 inline-flex rounded-xl bg-secondary px-6 py-4 text-sm font-bold text-white transition hover:bg-primary">
                        Explore Our Work →
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {
    UsersRound,
    Handshake,
    Globe,
} from 'lucide-vue-next'

const highlights = [
    {
        title: 'Women-led',
        text: 'Built around women’s voices, leadership and lived experiences.',
        icon: UsersRound,
        color: 'text-primary',
        bg: 'bg-soft-purple',
        border: 'border-primary/15',
    },
    {
        title: 'Community Driven',
        text: 'Working alongside communities to create practical and lasting impact.',
        icon: Handshake,
        color: 'text-secondary',
        bg: 'bg-soft-orange',
        border: 'border-secondary/15',
    },
    {
        title: 'SDG Aligned',
        text: 'Supporting health, gender equality, inclusion and sustainable development.',
        icon: Globe,
        color: 'text-accent',
        bg: 'bg-soft-green',
        border: 'border-accent/15',
    },
]
</script>