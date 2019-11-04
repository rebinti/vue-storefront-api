module.exports = function (restClient) {
    let module = {};
    const urlPrefix = 'mstocknotification/';
    let url = urlPrefix;
    function getResponse(data){
      if(data.code === 200){
        return data.result;
      }
      return false;
    }
    module.moutofstocknotification = (data) => {
      url += `moutofstocknotification`;
      return restClient.post(url,data).then((data)=> {
        return getResponse(data);
      });
    };
  
    return module;
  };
 