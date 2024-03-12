import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dwpbbvaj0', 
  api_key: '195156485543552', 
  api_secret: 'gZkNhT4SUdfpAE4iAzn1XVmoLSQ' 
});
export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'posts'
    });
}
export const deleteImage = async id => {
    cloudinary.uploader.destroy(id)
}
