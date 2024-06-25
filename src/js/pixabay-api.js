import axios from 'axios';

const pixabayApi = async (searchrequest, page = 1, perPage = 15) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '44369714-aeb99d27cdb76d6e65f8cf0da',
      q: searchrequest,
      image_type: 'photo',
      page: page,
      per_page: perPage,
    },
  });

  if (response.status !== 200) {
    throw new Error(response.status);
  }

  return response.data;
};

export default pixabayApi;
