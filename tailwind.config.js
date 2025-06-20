

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
     colors: {
      /* Primary palette */
      'Blue/1':'#EBF8FF',
      'Blue/2':'#D1EFFF',
      'Blue/3':'#A6E0FF',
      'Blue/4':'#89D1FF',
      'Blue/5':'#4DB1FF',
      'Blue/6':'#1B90FF',
      'Blue/7':'#0070F2',
      'Blue/8':'#0057D2',
      'Blue/9':'#0040B0',
      'Blue/10':'#002A86',
      'Blue/11':'#00144A',
      'Neutral/White':'#FFFFFF',
      'Neutral/Black':'#000000',
      /* Secondary Palette */
      'Grey/1':'#F5F6F7',
      'Grey/2':'#EAECEE',
      'Grey/3':'#D5DADD',
      'Grey/4':'#A9B4BE',
      'Grey/5':'#8396A8',
      'Grey/6':'#5B738B',
      'Grey/7':'#475E75',
      'Grey/8':'#354A5F',
      'Grey/9':'#223548',
      'Grey/10':'#1A2733',
      'Grey/11':'#12171C',
      /* Indigo Palette */
      'Indigo/1':'#F1ECFF',
      'Indigo/2':'#E2D8FF',
      'Indigo/3':'#D3B6FF',
      'Indigo/4':'#B894FF',
      'Indigo/5':'#9B76FF',
      'Indigo/6':'#7858FF',
      'Indigo/7':'#5D36FF',
      'Indigo/8':'#470CED',
      'Indigo/9':'#2C13AD',
      'Indigo/10':'#1C0C6E',
      'Indigo/11':'#0E0637',
      /* Pink Palette */
      'Pink/1':'#FFF0FA',
      'Pink/2':'#FFDCF3',
      'Pink/3':'#FFAFED',
      'Pink/4':'#FF8AF0',
      'Pink/5':'#F65AF2',
      'Pink/6':'#F31DED',
      'Pink/7':'#CC00DC',
      'Pink/8':'#A100C2',
      'Pink/9':'#7800A4',
      'Pink/10':'#510080',
      'Pink/11':'#28004A',
      /* Raspberry Palette */
      'Raspberry/1':'#FFF0F5',
      'Raspberry/2':'#FFDCE8',
      'Raspberry/3':'#FECBDA',
      'Raspberry/4':'#FEADC8',
      'Raspberry/5':'#FE83AE',
      'Raspberry/6':'#FA4F96',
      'Raspberry/7':'#DF1278',
      'Raspberry/8':'#BA066C',
      'Raspberry/9':'#9B015D',
      'Raspberry/10':'#71014B',
      'Raspberry/11':'#510136',
      /* Red Palette */
      'Red/1':'#FFEAF4',
      'Red/2':'#FFD5EA',
      'Red/3':'#FFB2D2',
      'Red/4':'#FF8CB2',
      'Red/5':'#FF5C77',
      'Red/6':'#EE3939',
      'Red/7':'#D20A0A',
      'Red/8':'#AA0808',
      'Red/9':'#840606',
      'Red/10':'#5A0404',
      'Red/11':'#350000',
      /* Mango Palette */
      'Mango/1':'#FFF8D6',
      'Mango/2':'#FFF3B8',
      'Mango/3':'#FFDF72',
      'Mango/4':'#FFC933',
      'Mango/5':'#FFB300',
      'Mango/6':'#E76500',
      'Mango/7':'#C35500',
      'Mango/8':'#A93E00',
      'Mango/9':'#8D2A00',
      'Mango/10':'#6D1900',
      'Mango/11':'#450B00',
      /* Green Palette */
      'Green/1':'#F5FAE5',
      'Green/2':'#EBF5CB',
      'Green/3':'#BDE986',
      'Green/4':'#97DD40',
      'Green/5':'#5DC122',
      'Green/6':'#36A41D',
      'Green/7':'#188918',
      'Green/8':'#256F3A',
      'Green/9':'#1E592F',
      'Green/10':'#164323',
      'Green/11':'#0E2B16',
      /* Teal Palette */
      'Teal/1':'#DAFDF5',
      'Teal/2':'#C2FCEE',
      'Teal/3':'#64EDD2',
      'Teal/4':'#2CE0BF',
      'Teal/5':'#00CEAC',
      'Teal/6':'#049F9A',
      'Teal/7':'#07838F',
      'Teal/8':'#046C7A',
      'Teal/9':'#035663',
      'Teal/10':'#02414C',
      'Teal/11':'#012931',
    },
    extend: {},
  },
  plugins: [],
}

