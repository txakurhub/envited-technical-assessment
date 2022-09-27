/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary1":"#240D57",
        "primary2":"#501FC1",
        "primary3":"#8456EC",
        "primary4":"#E87BF8",
        "secondary1":"#CCB6FF",
        "secondary2":"#EDE5FF",
        "secondary3":"#F6F2FF",
        "alert1":"#FFD7E0",
        "alert2":"#E61445",
        "alert3":"#E3FFE2",
        "alert4":"#00805E",
        "neutral1":"#4F4F4F",
        "neutral2":"#828282",
        "neutral3":"#BDBDBD",
        "neutral4":"#E0E0E0",
        "neutral5":"#F2F2F2"
      }
    },
  },
  plugins: [],
}
