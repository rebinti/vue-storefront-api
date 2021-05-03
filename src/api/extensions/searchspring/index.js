import { apiStatus } from '../../../lib/util';
import { Router } from 'express';
const request = require('request')

module.exports = ({ config, db }) => {
  let mcApi = Router();

  /**
   * Retrieve user  status
   */
  mcApi.get('/edgesearch', (req, res) => {

    return request({
      url: 'https://vdwzmz.a.searchspring.io/api/search/search.json?siteId=vdwzmz&q=dress&resultsFormat=native',
      method: 'GET',
      json: true,
	  headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json',
            'searchspring-session-id': '6576ccfc-1294-4e30-878a-77cc2ca5299f',
            'searchspring-user-id': '3022b347-a272-46c3-b676-62266e335a80',
            'searchspring-page-load-id': '945ea9d2-f155-4cf1-81f5-f7c60b3ce0db',  
	  }
    }, function (error, response, body) {
      if (error) {
        console.error(error)
        apiStatus(res, 'An error occured sorryyyyyy', 500)
      } else {
        apiStatus(res, body, 200)
      }
    })
  })
  return mcApi;
};


