const { handler } = require("@hapi/hapi/lib/cors");

const routes = [
{
 method: 'GET',
 path: '/',
 handler:(request, h) =>{
    return 'HomePage'
 },
},
{
    method: 'GET',
    path: '/hello/{name?}',
    handler:(request, h) =>{
      const {name = "stranger"} =request.params;
      const {lang} =request.query;
      if (lang === 'id'){
         return `hai, ${name}`
      }
       return `hello,${name}`;
    },
   },

{
    method: 'GET',
    path: '/about',
    handler:(request, h) =>{
       return 'AboutPage'
    },
   },
   {
    method: '*',
    path: '/about',
    handler:(request, h) =>{
       return 'Halaman Tidak Dapat diakses oleh method'
    },
   },
   {
    method: '*',
    path: '/{any*}',
    handler:(request, h) =>{
       return 'halaman tidak ditemukan'
    },
   },


];

module.exports =routes;