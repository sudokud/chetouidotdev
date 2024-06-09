/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'gray-43': 'hsl(0 0% 43.5%)',
        'system-blue': '#007AFF',
        'system-blue2': 'rgb(30, 110, 247)',
        'gray-dark':'rgba(56, 55, 54, 1)',
        'black':'rgb(0,0,0)',
        // light theme
        'primary-color': '',
        'gray-a1': 'rgba(250,250,250,1)',
        'gray-a2': 'rgba(240,240,240,1)',
        'gray-a3': 'rgba(210,210,210,1)',
        'gray-a4': 'rgba(182,182,182,1)',
        'gray-i1': 'rgba(115,115,115,1)',

      },
      fontSize: {
        'content':['15px', '28px']
      },
      maxWidth:{
        'content':'625px',
        '560': '560px'
      },
      minHeight:{
        'scroll':"780px"
      },
      borderRadius:{
        '4xl': '32px',
        'large':'12px'
      }
    },
  },
  plugins: [],
} satisfies Config

