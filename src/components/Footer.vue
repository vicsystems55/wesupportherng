<template>
  <footer class="bg-dark text-white">
    <div class="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
      <div>
        <img src="@/assets/images/logo-white.png" alt="WeSupportHer Logo" class="mb-4 h-16 w-auto" />
        <p class="text-sm leading-relaxed text-white/75">
          Advancing gender equity by promoting girls’ and women’s health,
          leadership, representation, and empowerment.
        </p>
      </div>

      <div>
        <h4 class="mb-4 font-bold">Quick Links</h4>
        <ul class="space-y-2 text-sm text-white/75">
          <li><RouterLink to="/about-us">About Us</RouterLink></li>
          <li><RouterLink to="/our-initiatives">Our Initiatives</RouterLink></li>
          <li><RouterLink to="/impact">Impact</RouterLink></li>
          <li><RouterLink to="/get-involved">Get Involved</RouterLink></li>
        </ul>
      </div>

      <div>
        <h4 class="mb-4 font-bold">Our Initiatives</h4>
        <ul class="space-y-2 text-sm text-white/75">
          <li>RedBubble</li>
          <li>MenoWise</li>
          <li>SheRepresents</li>
          <li>WSH Advocacy Platform</li>
        </ul>
      </div>

      <div>
        <h4 class="mb-4 font-bold">Stay Connected</h4>
        <p class="mb-4 text-sm text-white/75">Subscribe for updates and stories.</p>
        <div class="flex gap-2">
          <input
            type="email"
            placeholder="Email address"
            class="w-full rounded-lg px-4 py-3 text-sm text-dark outline-none"
          />
          <button class="rounded-lg bg-secondary px-4 py-3 text-sm font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10 py-5 text-center text-xs text-white/60">
      © {{ new Date().getFullYear() }} WeSupportHer. All Rights Reserved.
    </div>
  </footer>
</template>