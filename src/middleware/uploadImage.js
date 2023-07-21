import axios from 'axios';
import { API_BASE_URL } from 'constants/ApiConstant';
const uploadImage = async(file)=>{
    try {
        const formData = new FormData();
        formData.append("file", file);
    
        const response = await axios.post(`${API_BASE_URL}/upload`, formData);
        console.log('Upload successful!', response.data);
        return response.data.url;
        // Handle successful response here
      } catch (error) {
        console.error('Upload failed!', error);
        // Handle error here
      }
}

export default uploadImage;