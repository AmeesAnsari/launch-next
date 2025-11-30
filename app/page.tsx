import { ThemeToggle } from './components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-800/95">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="from-primary-500 to-secondary-600 h-10 w-10 rounded-xl bg-gradient-to-br shadow-lg" />
              <h1 className="text-xl font-bold">Project Starter</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <div className="bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-medium">
            🚀 Next.js Starter Template
          </div>
          <h2 className="from-primary-600 via-secondary-600 to-accent-600 mb-6 bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent">
            Build Something Amazing
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-neutral-600 dark:text-neutral-400">
            A modern starter template with Tailwind CSS v4, TypeScript, and
            beautiful dark mode support out of the box.
          </p>
        </section>

        {/* Buttons Showcase */}
        <section className="mb-20">
          <h3 className="mb-8 text-3xl font-bold">Buttons</h3>
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
            <div className="flex flex-wrap gap-4">
              {/* Primary */}
              <button className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800 rounded-lg px-6 py-2.5 font-medium text-white shadow-sm transition-all duration-200 hover:shadow-md">
                Primary Action
              </button>

              {/* Secondary */}
              <button className="bg-secondary-600 hover:bg-secondary-700 active:bg-secondary-800 rounded-lg px-6 py-2.5 font-medium text-white shadow-sm transition-all duration-200 hover:shadow-md">
                Secondary Action
              </button>

              {/* Accent */}
              <button className="bg-accent-600 hover:bg-accent-700 active:bg-accent-800 rounded-lg px-6 py-2.5 font-medium text-white shadow-sm transition-all duration-200 hover:shadow-md">
                Accent Action
              </button>

              {/* Outline */}
              <button className="border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950 rounded-lg border-2 px-6 py-2.5 font-medium transition-all duration-200">
                Outline
              </button>

              {/* Ghost */}
              <button className="rounded-lg px-6 py-2.5 font-medium text-neutral-700 transition-all duration-200 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700">
                Ghost
              </button>

              {/* Danger */}
              <button className="bg-error-500 hover:bg-error-600 active:bg-error-700 rounded-lg px-6 py-2.5 font-medium text-white shadow-sm transition-all duration-200 hover:shadow-md">
                Danger
              </button>
            </div>
          </div>
        </section>

        {/* Button Sizes */}
        <section className="mb-20">
          <h3 className="mb-8 text-3xl font-bold">Button Sizes</h3>
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-primary-600 hover:bg-primary-700 rounded-lg px-4 py-1.5 text-sm font-medium text-white transition-all duration-200">
                Small
              </button>
              <button className="bg-primary-600 hover:bg-primary-700 rounded-lg px-6 py-2.5 font-medium text-white transition-all duration-200">
                Medium
              </button>
              <button className="bg-primary-600 hover:bg-primary-700 rounded-lg px-8 py-3 text-lg font-medium text-white transition-all duration-200">
                Large
              </button>
            </div>
          </div>
        </section>

        {/* Cards Grid */}
        <section className="mb-20">
          <h3 className="mb-8 text-3xl font-bold">Cards</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Default Card */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800">
              <div className="from-primary-500 to-primary-600 mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-xl font-bold text-white">
                1
              </div>
              <h4 className="mb-2 text-lg font-semibold">Default Card</h4>
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                This is a beautifully designed card with smooth shadows and
                hover effects.
              </p>
            </div>

            {/* Primary Card */}
            <div className="from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900 border-primary-200 dark:border-primary-800 rounded-2xl border bg-gradient-to-br p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
              <div className="bg-primary-600 mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold text-white">
                2
              </div>
              <h4 className="text-primary-900 dark:text-primary-100 mb-2 text-lg font-semibold">
                Primary Card
              </h4>
              <p className="text-primary-700 dark:text-primary-300 leading-relaxed">
                A card with primary color theming for important content.
              </p>
            </div>

            {/* Secondary Card */}
            <div className="from-secondary-50 to-secondary-100 dark:from-secondary-950 dark:to-secondary-900 border-secondary-200 dark:border-secondary-800 rounded-2xl border bg-gradient-to-br p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
              <div className="bg-secondary-600 mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold text-white">
                3
              </div>
              <h4 className="text-secondary-900 dark:text-secondary-100 mb-2 text-lg font-semibold">
                Secondary Card
              </h4>
              <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
                A card with secondary color theming for variety.
              </p>
            </div>
          </div>
        </section>

        {/* Status Badges */}
        <section className="mb-20">
          <h3 className="mb-8 text-3xl font-bold">Status Badges</h3>
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
            <div className="flex flex-wrap gap-3">
              <span className="bg-success-100 dark:bg-success-950 text-success-700 dark:text-success-300 rounded-full px-3 py-1 text-sm font-medium">
                ✓ Success
              </span>
              <span className="bg-warning-100 dark:bg-warning-950 text-warning-700 dark:text-warning-300 rounded-full px-3 py-1 text-sm font-medium">
                ⚠ Warning
              </span>
              <span className="bg-error-100 dark:bg-error-950 text-error-700 dark:text-error-300 rounded-full px-3 py-1 text-sm font-medium">
                ✕ Error
              </span>
              <span className="bg-info-100 dark:bg-info-950 text-info-700 dark:text-info-300 rounded-full px-3 py-1 text-sm font-medium">
                ℹ Info
              </span>
              <span className="bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 rounded-full px-3 py-1 text-sm font-medium">
                Primary
              </span>
              <span className="bg-secondary-100 dark:bg-secondary-950 text-secondary-700 dark:text-secondary-300 rounded-full px-3 py-1 text-sm font-medium">
                Secondary
              </span>
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">
                Neutral
              </span>
            </div>
          </div>
        </section>

        {/* Form Example */}
        <section className="mb-20">
          <h3 className="mb-8 text-3xl font-bold">Form Elements</h3>
          <div className="max-w-2xl rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="focus:ring-primary-500 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-all outline-none placeholder:text-neutral-400 focus:border-transparent focus:ring-2 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="focus:ring-primary-500 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-all outline-none placeholder:text-neutral-400 focus:border-transparent focus:ring-2 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="focus:ring-primary-500 w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-all outline-none placeholder:text-neutral-400 focus:border-transparent focus:ring-2 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500"
                  placeholder="Tell us what you're working on..."
                />
              </div>

              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800 w-full rounded-lg px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md"
              >
                Submit Form
              </button>
            </form>
          </div>
        </section>

        {/* Color Palette Preview */}
        <section className="mb-20">
          <h3 className="mb-8 text-3xl font-bold">Color Palette</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Primary */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
              <h4 className="mb-4 text-sm font-bold tracking-wide text-neutral-600 uppercase dark:text-neutral-400">
                Primary Colors
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-500 h-10 w-16 rounded-lg shadow-sm" />
                  <span className="font-mono text-sm">primary-500</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary-600 h-10 w-16 rounded-lg shadow-sm" />
                  <span className="font-mono text-sm">primary-600</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary-700 h-10 w-16 rounded-lg shadow-sm" />
                  <span className="font-mono text-sm">primary-700</span>
                </div>
              </div>
            </div>

            {/* Secondary */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
              <h4 className="mb-4 text-sm font-bold tracking-wide text-neutral-600 uppercase dark:text-neutral-400">
                Secondary Colors
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-secondary-500 h-10 w-16 rounded-lg shadow-sm" />
                  <span className="font-mono text-sm">secondary-500</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary-600 h-10 w-16 rounded-lg shadow-sm" />
                  <span className="font-mono text-sm">secondary-600</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary-700 h-10 w-16 rounded-lg shadow-sm" />
                  <span className="font-mono text-sm">secondary-700</span>
                </div>
              </div>
            </div>

            {/* Accent */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
              <h4 className="mb-4 text-sm font-bold tracking-wide text-neutral-600 uppercase dark:text-neutral-400">
                Accent Colors
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-accent-500 h-10 w-16 rounded-lg shadow-sm" />
                  <span className="font-mono text-sm">accent-500</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-accent-600 h-10 w-16 rounded-lg shadow-sm" />
                  <span className="font-mono text-sm">accent-600</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-accent-700 h-10 w-16 rounded-lg shadow-sm" />
                  <span className="font-mono text-sm">accent-700</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-neutral-600 dark:text-neutral-400">
          <p>Built with Next.js, TypeScript & Tailwind CSS v4</p>
        </div>
      </footer>
    </div>
  );
}
