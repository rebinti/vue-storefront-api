import { apiStatus } from '../../../lib/util';
import { Router } from 'express';
// const Magento2Client = require('magento2-rest-client').Magento2Client

module.exports = ({ config, db }) => {

  let cmsApi = Router();

  cmsApi.get('/test', (req, res) => {

      apiStatus(res, "tujryu", 200); 
 
  })

  cmsApi.get('/slidedata', (req, res) => {
 let data = {
  "slides": [
    {
      "title": "Simple, yet impressive",
      "subtitle": "",
      "button_text": "Find your purpose",
      "image": "https://cdn.iclothing.com/media/codazon/slideshow/resize/1920x868/emptyname-354.jpg",
      "link": "/c/gear"
    },
    {
      "title": "Dresses, find stylish",
      "subtitle": "",
      "button_text": "Find your purpose",
      "image": "https://cdn.iclothing.com/media/codazon/slideshow/resize/1920x868/theya-hp.jpg2.jpg",
      "link": "/c/women-20"
    },
    {
      "title": "Unique Experience",
      "subtitle": "Collection",
      "button_text": "Fitness with style",
      "image": "https://cdn.iclothing.com/media/codazon/slideshow/resize/1920x868/emptyname-21.jpg",
      "link": "/c/training"
    }
  ],
  "total": "3"
 }
 
    apiStatus(res, data, 200); 

})
  

  return cmsApi
}
