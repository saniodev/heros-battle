import axios from 'axios';

const base_url = process.env.BASE_URL || '';

const fetchMetahumans = async () => {
  try {
    const response = await axios.get(base_url);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
    throw error;
  }
};

export default fetchMetahumans;