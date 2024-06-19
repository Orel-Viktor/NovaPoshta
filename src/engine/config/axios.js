// Core
import axios from 'axios';

const instance = axios.create({
   baseURL: import.meta.env.VITE_API_LINK,
   headers: {
      'Content-Type': 'aplication/json',
   },
});

function createDataTrackingPackage(number, phone) {
   return {
      apiKey: '437aa5dbf97ee35715a4705783849928',
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

function createDataFindCity(city, numberDepart) {
   return {
      apiKey: '437aa5dbf97ee35715a4705783849928',
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
         CityName: city,
         WarehouseId: numberDepart,
      },
   };
}
export const api = Object.freeze({
   getInfoTracking(number, phone) {
      const dataTracking = createDataTrackingPackage(number, phone);
      return instance.post('', dataTracking);
   },
   getInfoDeparts(city, numberDepart) {
      const cityDeparts = createDataFindCity(city, numberDepart);
      return instance.post('', cityDeparts);
   },
});
