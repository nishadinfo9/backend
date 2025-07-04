import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uplodeFileCloudinary = async (localFile)=>{
    try {
        if (!localFile) return null
            const respons = await cloudinary.uploader.upload(localFile, {
                resource_type: 'auto'
            })
            console.log('file uploded', respons.url)
            return respons
    } catch (error) {
        fs.unlinkSync(localFile) //removed locally seved temp file
        console.log('file uplod failed',error)
        return null
    }
}
export default uplodeFileCloudinary