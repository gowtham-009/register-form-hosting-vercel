// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title:"Form registertation",
      meta:[
        {charset: 'utf-8'},
        {name:'viewport',content:'width=device-width, initial-scale=1'},
        {hid:'description', name:'description',content:'Form registertation'},
        {name:'format-detection', content:'telephone-no'}
         ],
         link:[
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
          },
          {
            rel:'icon',
            type:'image/x-icon',
            href:'/favicon.ico'
          },
          {
            rel:'stylesheet',
            href:'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
            integrity:'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
            crossorigin:'anonymous'
          }
         ],
         script:[
          {
            src:'https://code.jquery.com/jquery-3.7.1.min.js',
            type:'text/javascript'
          },
            {
              src:'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
              type:'text/javascript'
            }
         ]
    
    }
  }
})
