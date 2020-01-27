const urls = require('./urls');
const axios = require('axios');

module.exports = {
    get: async function (Tag) {
        try {
            let storage_r = await axios.get(urls.get(Tag));
            return { tag: storage_r.data.data.tag, size: storage_r.data.data.size, link: storage_r.data.data.downloadLink };
        } catch (e) {
            console.error("onGetDatapack: " + e);
        }
    }
}