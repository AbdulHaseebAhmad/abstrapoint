/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'zulo': '540px',   // Custom breakpoint
        'woodo': '1130px',   // Another custom breakpoint
      },
      boxShadow: {
        'custom': '2.33px 2.33px 5.826px 0px rgba(0, 0, 0, 0.25)', 
        'custom2': '0px -1px 22px -2px rgba(0, 0, 0, 0.10)',

      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        urbanist: ['Urbanist','sans-serif'],
        inter: ['Inter','sans-serif']
      },
      colors: {
        "neutralsilver": "#F9FBFD",
        "mediumgray": "#B8B8B8",
        "lightwarmgray": "#EDEDED",
        "lightgray": "#F6F6F6",
        "primaryyellow": "#FBB957",
        "mediumlighyellow": "#FFE6AF",
        "lightyellow": "#FDF3DC",
        "black": "#2E2E2E",
        "neutralblack": "#21232F",
        "blackgray": "#404040",
        'textgray':"#545454",
        'tint':'#FDF3DC',
        'dmred':"#FF3030",

      },
      fontSize: {

        // Navbar Font Sizes
        'nav-xs':'12px',
        'nav-sm':'12px',
        'nav-md':'18px',
        'nav-lg':'21px',

        // Hero Font Sizes
        'hero-xs': '108px',
        'hero-sm': '160px',
        'hero-md': '200px',
        'hero-lg': '220px',

        // h1 Font Sizes
        'h1-xs': '28px',
        'h1-sm': '36px',
        'h1-md': '48px',
        'h1-lg': '50px',

        // h2 Font Sizes
        'h2-xs': '26px',
        'h2-sm': '32px',
        'h2-md': '40px',
        'h2-lg': '48px',

        // h3 Font Sizes
        'h3-xs': '20px',
        'h3-sm': '22px',
        'h3-md': '26px',
        'h3-lg': '30px',

        // Body Large Font Sizes
        'bodyLg-xs': '18px',
        'bodyLg-sm': '20px',
        'bodyLg-md': '22px',
        'bodyLg-lg': '25px',

        // Body Medium Font Sizes
        'bodyMd-xs': '16px',
        'bodyMd-sm': '18px',
        'bodyMd-md': '20px',
        'bodyMd-lg': '24px',
      },
    },
  },
  plugins: [],
}

