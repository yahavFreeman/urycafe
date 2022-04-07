/**
 * @method - async send ajax query, receive accordance data from server and return it
 * @param url
 * @param request
 * @param method
 * @returns {Promise<any>}
 */
const send = async (url, request = '', method = 'post') => {
    if(method === 'get'){
      const response = await fetch(url).catch(err => {
        // if technical error - return null
        console.error(err);
        return null;
      });
      return response && await response.json().catch(err => {
        // if technical error - return null
        console.error(err);
        return null;
      });
    }
    
    const response = await fetch(url,{
      method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: request && JSON.stringify(request)
    }).catch(err => {
      // if technical error - return null
      console.error(err,'err');
      return null;
    });

    return response && await response.json().catch(err => {
      // if technical error - return null
      console.error(err);
      return null;
    });
};

export default send;