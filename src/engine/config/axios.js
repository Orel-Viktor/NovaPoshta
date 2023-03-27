// Core
import axios from 'axios';

const instance = axios.create({
   baseURL: import.meta.env.VITE_API_LINK,
   headers: {
      'Content-Type': 'aplication/json',
   },
});

function createData(number, phone) {
   return {
      apiKey: '0d34da9bdaf8f13a193c64e2170238ed',
      modelName: 'TrackingDocument',
      calledMethod: 'getStatusDocuments',
      methodProperties: {
         Documents: [
            {
               DocumentNumber: number,
               Phone: phone,
            },
         ],
      },
   };
}
export const api = Object.freeze({
   getInfo(number, phone) {
      const data = createData(number, phone);
      return instance.post('', data);
   },
});

export const response = api.getInfo('20400048799000', '380962700019');
export default api;
