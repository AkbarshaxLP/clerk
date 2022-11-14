<template>
  <div @click="$router.push({name:'pkey'})">
    <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0001 2C14.5523 2 15.0001 2.44771 15.0001 3V4.07089C18.3924 4.55612 21.0001 7.47353 21.0001 11V12.1036C21.0001 13.7412 21.5742 15.3269 22.6225 16.5849L23.0346 17.0794C24.663 19.0334 23.2735 22 20.73 22H18.0001C18.0001 24.2091 16.2092 26 14.0001 26C11.7909 26 10.0001 24.2091 10.0001 22H7.27014C4.72663 22 3.33715 19.0334 4.96547 17.0794L5.37761 16.5849C6.42594 15.3269 7.00006 13.7412 7.00006 12.1036V11C7.00006 7.47353 9.60776 4.55612 13.0001 4.07089V3C13.0001 2.44771 13.4478 2 14.0001 2ZM12.0001 22C12.0001 23.1046 12.8955 24 14.0001 24C15.1046 24 16.0001 23.1046 16.0001 22H12.0001ZM7.27014 20C6.4223 20 5.95915 19.0111 6.50192 18.3598L6.91405 17.8653C8.26191 16.2478 9.00006 14.209 9.00006 12.1036V11C9.00006 8.23858 11.2386 6 14.0001 6C16.7615 6 19.0001 8.23858 19.0001 11V12.1036C19.0001 14.209 19.7382 16.2478 21.0861 17.8653L21.4982 18.3598C22.041 19.0111 21.5778 20 20.73 20H7.27014Z" fill="#A7B1BD"/>
      <circle cx="19.5" cy="9.5" r="3.5" v-if="badge" fill="#FF003A"/>
      </g>
      <defs>
      <filter id="filter0_d" x="-2" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.0352941 0 0 0 0 0.109804 0 0 0 0 0.192157 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      </defs>
    </svg>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['badge']
  }
</script>