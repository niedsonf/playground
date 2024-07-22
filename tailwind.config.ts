import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  mode: ['jit'],
  purge: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fff',

        'gray': {
          100: '#E1E1E6',
          300: '#C4C4CC',
          400: '#8D8D99',
          500: '#7C7C8A',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
        },

        'green': {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },

        'red': {
          300: '#F75A68',
          500: '#AB222E',
          700: '#7A1921',
        },

        'yellow': {
          300: '#E8E337',
          500: '#E5DE00',
          700: '#E6CC00',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^(grid-cols-(?:1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20))$/
    }
  ]
}
export default config
