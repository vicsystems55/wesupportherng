<template>
  <main class="flex min-h-screen items-center justify-center bg-cream px-5">
    <div class="max-w-xl text-center">
      <p class="text-sm font-black uppercase tracking-[0.25em] text-secondary">
        Error 404
      </p>

      <h1 class="mt-5 font-display text-5xl font-black text-dark">
        Page not found
      </h1>

      <p class="mt-5 text-base leading-relaxed text-dark/65">
        The page you are looking for may have been moved, deleted or does not
        exist.
      </p>

      <RouterLink
        to="/"
        class="mt-8 inline-flex rounded-xl bg-secondary px-6 py-4 text-sm font-black text-white transition hover:bg-primary"
      >
        Return Home
      </RouterLink>
    </div>
  </main>
</template>