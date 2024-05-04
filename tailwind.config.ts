import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      fontSize: {
        'content':['15px', '28px']
      },
      minWidth: {
        '148': '42rem',
        '560': '560px',
        
      },
      maxWidth:{
        'lg':'1024px',
        '560': '560px'
      },
      minHeight:{
        '50vh':"50vh"
      },
      borderRadius:{
        '4xl': '32px'
      }
    },
  },
  plugins: [],
} satisfies Config

