THEORY 

QUESTION 1 

Breakpoints in Tailwind CSS are defined at specific screen sizes, allowing you to apply different styles at different viewport widths

Default Breakpoints

Breakpoint	Description
sm	        640px
md	        768px
lg	        1024px
xl	        1280px
2xl	        1536px

These breakpoints can be used as prefixes to apply styles conditionally based on the viewport width.

How md prefix works. 

example

md:bg-red-500: Sets the background color to a shade of red on medium screens and larger (min-width: 768px);md:bg-red-500: Sets the background color to a shade of red on medium screens and larger (min-width: 768px);

custom breakpoint 

module.exports = {
  theme: {
    extend: {
      screens: {
        'xl': '1200px',
      },
    },
  },
}

QUESTION 2 

Arbitrary value support in Tailwind CSS allows you to use any custom value with any utility where it makes sense. It's a powerful feature introduced in Tailwind CSS v2.2. This means you're no longer limited by the values defined in your configuration file and can use any value you need right in your HTML.

Use when 
building a rapid prototype, Handling dynamic user input 

use config when 
Value repeats, maintaining design system, simplifying maintenance 


ENGINEERING THINKING 
'
QUESTION 1

@theme {
  --color-page-bg: light-dark(#ffffff, #0f172a);
  --color-page-text: light-dark(#0f172a, #f8fafc);
}

:root {
  color-scheme: light dark;
}

html.dark {
  color-scheme: dark;
}

html.light {
  color-scheme: light;
}

QUESTION 2 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SaaSify - Launch Your Product</title>
     <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 text-slate-900 font-sans antialiased">

    
    <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex items-center gap-2">
                    <span class="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">S</span>
                    <span class="text-xl font-bold tracking-tight text-slate-900">SaaSify</span>
                </div>
                <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <a href="#features" class="hover:text-indigo-600 transition">Features</a>
                    <a href="#pricing" class="hover:text-indigo-600 transition">Pricing</a>
                </nav>
                <div class="flex items-center gap-4">
                    <a href="#pricing" class="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 transition">Get Started</a>
                </div>
            </div>
        </div>
    </header>

    <main>

        <section class="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-white">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
                   
                    <div class="text-center lg:text-left lg:col-span-6 max-w-2xl mx-auto lg:mx-0">
                        <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Ship your startup <span class="text-indigo-600">in days</span>, not months.
                        </h1>
                        <p class="mt-6 text-lg text-slate-600 sm:text-xl">
                            The ultimate production-ready boilerplate to launch your next big idea. Save hundreds of hours of engineering time with our pre-built infrastructure.
                        </p>
                        <div class="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <a href="#pricing" class="rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-md hover:bg-indigo-500 transition text-center">
                                View Pricing
                            </a>
                            <a href="#features" class="rounded-xl bg-slate-100 px-6 py-3.5 text-base font-semibold text-slate-900 hover:bg-slate-200 transition text-center">
                                Learn More
                            </a>
                        </div>
                    </div>
                  
                    <div class="mt-16 sm:mt-20 lg:mt-0 lg:col-span-6">
                        <div class="relative mx-auto max-w-md lg:max-w-none rounded-2xl border border-slate-200 bg-slate-100 p-4 shadow-xl">
                            <div class="aspect-video rounded-xl bg-slate-900 flex items-center justify-center text-slate-500 font-mono text-sm p-4 text-center">
                                [ Interactive Dashboard Mockup ]
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="features" class="py-20 sm:py-24 lg:py-32 bg-slate-50">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need to scale</h2>
                    <p class="mt-4 text-lg text-slate-600">Stop reinventing the wheel. Focus strictly on building features your users actually care about.</p>
                </div>
               
                <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
                   
                    <div class="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
                        <div class="h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mb-6">⚡</div>
                        <h3 class="text-xl font-bold text-slate-900">Ultra Fast Setup</h3>
                        <p class="mt-3 text-slate-600 leading-relaxed">Deploy to production with a single CLI command. Continuous integration comes fully configured right out of the box.</p>
                    </div>
                  
                    <div class="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
                        <div class="h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mb-6">🔒</div>
                        <h3 class="text-xl font-bold text-slate-900">Secure by Default</h3>
                        <p class="mt-3 text-slate-600 leading-relaxed">Pre-configured modern multi-factor authentication, robust row-level database security, and automated threat monitoring.</p>
                    </div>
      
                    <div class="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-xs sm:col-span-2 lg:col-span-1">
                        <div class="h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mb-6">📈</div>
                        <h3 class="text-xl font-bold text-slate-900">Built-in Analytics</h3>
                        <p class="mt-3 text-slate-600 leading-relaxed">Track customer acquisition, product usage events, and active subscriptions effortlessly without heavy third-party scripts.</p>
                    </div>
                </div>
            </div>
        </section>

     
        <section id="pricing" class="py-20 sm:py-24 lg:py-32 bg-white">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Fair pricing for any size</h2>
                    <p class="mt-4 text-lg text-slate-600">Start building for free, then scale up seamlessly as your user base expands.</p>
                </div>
               
                <div class="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3 items-start">
          
                    <div class="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs flex flex-col justify-between h-full">
                        <div>
                            <h3 class="text-lg font-semibold text-slate-900">Hobby</h3>
                            <p class="mt-2 text-sm text-slate-500">Perfect for prototyping side projects.</p>
                            <div class="mt-6 flex items-baseline gap-x-1">
                                <span class="text-4xl font-bold tracking-tight text-slate-900">$0</span>
                                <span class="text-sm font-semibold text-slate-500">/mo</span>
                            </div>
                            <ul class="mt-8 space-y-3 text-sm text-slate-600">
                                <li class="flex items-center gap-3">✓ 1 Active Project</li>
                                <li class="flex items-center gap-3">✓ Community Support</li>
                                <li class="flex items-center gap-3">✓ Standard Analytics</li>
                            </ul>
                        </div>
                        <a href="#" class="mt-8 block rounded-xl border border-indigo-200 bg-white px-4 py-2.5 text-center text-sm font-semibold text-indigo-600 hover:bg-indigo-50 transition">Get Started</a>
                    </div>

            
                    <div class="rounded-3xl border-2 border-indigo-600 bg-white p-8 shadow-md flex flex-col justify-between h-full relative">
                        <span class="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white tracking-wide uppercase">Popular</span>
                        <div>
                            <h3 class="text-lg font-semibold text-slate-900">Pro</h3>
                            <p class="mt-2 text-sm text-slate-500">For scaling production applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

</body>
</html>

This landing page uses Tailwind's mobile-first responsive design framework.
         Styles are applied for mobile by default and scale up using 3 distinct breakpoints:
         
         1. Mobile (Default): Single-column layouts, centered text, and compact padding.
         2. sm (>= 640px): Triggers grid expansions for small tablets; adjustments to padding.
         3. md (>= 768px): Upgrades grids to 2-columns (pricing) or horizontal flex layouts (navbar).
         4. lg (>= 1024px): Standard desktop view. Activates 3-column layouts (features/pricing) and max-width constraints.