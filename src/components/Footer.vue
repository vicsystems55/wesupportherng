<template>
  <footer class="bg-dark text-white">
    <div class="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-5">
      <!-- Brand -->
      <div class="lg:col-span-2">
        <img
          src="@/assets/images/logo-white.png"
          alt="WeSupportHer Logo"
          class="mb-4 h-16 w-auto"
        />

        <p class="max-w-md text-sm leading-relaxed text-white/75">
          Advancing gender equity by promoting girls’ and women’s health,
          leadership, representation, and empowerment.
        </p>

        <div class="mt-6 space-y-2 text-sm text-white/70">
          <p>
            <span class="font-bold text-white">Email:</span>
            <a href="mailto:info@wesupporther.org" class="hover:text-secondary">
              info@wesupporther.org
            </a>
          </p>

          <p>
            <span class="font-bold text-white">Phone:</span>
            <a href="tel:09112200110" class="hover:text-secondary">
              09112200110
            </a>
          </p>

          <p>
            <span class="font-bold text-white">Address:</span>
            No. 14 Negro Crescent, Maitama, Abuja.
          </p>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="mb-4 font-bold text-white">Quick Links</h4>

        <ul class="space-y-2 text-sm text-white/75">
          <li>
            <RouterLink to="/about-us" class="transition hover:text-secondary">
              About Us
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/our-initiatives" class="transition hover:text-secondary">
              Our Initiatives
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/impact" class="transition hover:text-secondary">
              Impact
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/gallery" class="transition hover:text-secondary">
              Gallery
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/get-involved" class="transition hover:text-secondary">
              Get Involved
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/donate" class="transition hover:text-secondary">
              Donate Now
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Initiatives -->
      <div>
        <h4 class="mb-4 font-bold text-white">Our Initiatives</h4>

        <ul class="space-y-2 text-sm text-white/75">
          <li>
            <RouterLink
              to="/our-initiatives#redbubble"
              class="transition hover:text-secondary"
            >
              RedBubble
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/our-initiatives#menowise"
              class="transition hover:text-secondary"
            >
              MenoWise
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/our-initiatives#sherepresents"
              class="transition hover:text-secondary"
            >
              SheRepresents
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/our-initiatives"
              class="transition hover:text-secondary"
            >
              WSH Advocacy Platform
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Subscribe -->
      <div>
        <h4 class="mb-4 font-bold text-white">Stay Connected</h4>

        <p class="mb-4 text-sm leading-relaxed text-white/75">
          Subscribe for updates, stories, events, and opportunities to support
          women and girls.
        </p>

        <form class="space-y-3" @submit.prevent>
          <input
            type="email"
            placeholder="Email address"
            class="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-dark outline-none transition focus:border-secondary"
          />

          <button
            type="submit"
            class="w-full rounded-xl bg-secondary px-4 py-3 text-sm font-bold text-white transition hover:bg-primary"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div class="border-t border-white/10 px-5 py-5">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-xs text-white/60 md:flex-row">
        <p>
          © {{ new Date().getFullYear() }} WeSupportHer. All Rights Reserved.
        </p>

        <p>
          Developed by
          <a
            href="https://vicsystems.us"
            target="_blank"
            rel="noopener noreferrer"
            class="font-bold text-white transition hover:text-secondary"
          >
            VICSYSTEMS TECHNOLOGIES LTD.
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>