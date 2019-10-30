import { apiStatus } from '../../../lib/util';
import { Router } from 'express';
const Magento2Client = require('magento2-rest-client').Magento2Client
// import { multiStoreConfig } from 'src/platform/magento1/util';


module.exports = ({ config, db }) => {

	let mcApi = Router();
	const urlPrefix = '/api/ext/example-magento-api/cart/';
	let url = urlPrefix;
	function getResponse(data){
	if(data.code === 200){
		return data.result;
 }
 return false;
	}
	
	// this.api = Magento1Client(multiStoreConfig(config.magento1.api, req));
	/** 
	 * This is just an example on how to extend magento2 api client and get the cms blocks
	 * https://devdocs.magento.com/swagger/#!/cmsBlockRepositoryV1/cmsBlockRepositoryV1GetListGet
	 * 
	 * NOTICE: vue-storefront-api should be platform agnostic. This is just for the customization example
	 */
	mcApi.get('/cmsBlock', (req, res) => {
		const client = Magento2Client(config.magento2.api);
		client.addMethods('cmsBlock', function (restClient) {
            var module = {};
			
			module.search = function () {
                return restClient.get('/cmsPage/search');
            }
            return module;
		})
		console.log(client)
		client.cmsBlock.search().then((result) => {
			apiStatus(res, result, 200); // just dump it to the browser, result = JSON object
		}).catch(err=> {
			apiStatus(res, err, 500);
		})				
	})
	mcApi.get('/new', (req, res) => {
		const Magento1Client = require('magento1-vsbridge-client').Magento1Client;
		const client = Magento1Client(config.magento1.api)
		client.addMethods('getmyview', function (restClient) {
            var module = {};
			
			module.getmyview = (customerToken) => {
				url += `getmyview?token=${customerToken}`;
				return restClient.get(url).then((data)=> {
				  return getResponse(data);
				});
			  }
		})
		// // console.log(client)
		// client.getmyview.getmyview().then((result) => {
		// 	apiStatus(res, result, 200); // just dump it to the browser, result = JSON object
		// }).catch(err=> {
		// 	apiStatus(res, err, 500);
		// })				
	})
	return mcApi
}
