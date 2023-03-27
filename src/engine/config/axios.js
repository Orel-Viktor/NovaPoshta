// Core
import axios from 'axios';

const instance = axios.create({
   baseURL: import.meta.env.VITE_API_LINK,
   headers: {
      'Content-Type': 'aplication/json',
   },
});

const dataTracking = JSON.stringify({
   apiKey: '0d34da9bdaf8f13a193c64e2170238ed',
   modelName: 'TrackingDocument',
   calledMethod: 'getStatusDocuments',
   methodProperties: {
      Documents: [
         {
            DocumentNumber: '20450682236944',
            Phone: '380505960943',
         },
      ],
   },
});

export const api = Object.freeze({
   getInfo() {
      return instance.get(dataTracking);
   },
});

export const response = api.getInfo();
export default api;
