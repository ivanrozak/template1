import { GET_CLIENT_DATA, GET_CHAT_DATA } from './types';

const initialState = {
  dataState: {
    isLoading: false,
    isloadingChat: true,
    isLoadingClient: true,
    resultData: {
      nama_pria: 'Yuan Faris Efendi',
      nama_wanita: 'Marsha Saputri Wijaya',
      inisial_pria: 'Yuan',
      inisial_wanita: 'Marsha',
      ayah_pria: 'Sulthon Abdillah',
      ibu_pria: 'Lusi Septiani',
      ayah_wanita: 'Karim Wijaya',
      ibu_wanita: 'Yuliana Dewi Sartika',
      tanggal_akad: '2021-10-10 08:30:40',
      waktu_start_akad: '2021-10-10 08:30:40',
      waktu_end_akad: '2021-10-10 13:00:40',
      venue_akad: 'Masjid Agung Jakarta',
      alamat_akad: 'Jl. Raya Kota Baru Nomor 15 Jakarta',
      kota_akad: 'Jakarta',
      tanggal_resepsi: '2021-10-11 08:30:40',
      waktu_start_resepsi: '2021-10-11 08:30:40',
      waktu_end_resepsi: '2021-10-11 13:00:40',
      venue_resepsi: 'Royal Hotem and Suite',
      alamat_resepsi: 'Jl. Raya Dharmawangsa Nomor 25',
      kota_resepsi: 'Jakarta',
    },
    resultChat: [],
    resultClient: [],
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAT_DATA: {
      return {
        ...state,
        dataState: {
          ...state.dataState,
          [action.payload.params.name]: action.payload.params.val,
        },
      };
    }
    case GET_CLIENT_DATA: {
      return {
        ...state,
        dataState: {
          ...state.dataState,
          [action.payload.params.name]: action.payload.params.val,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
