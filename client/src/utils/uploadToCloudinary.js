import axios from "axios";

export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "devtrade_preset"); 
  formData.append("folder", "devtrade/projects");

//   const cloudName = "your_cloud_name";

  const res = await axios.post(
    `https://api.cloudinary.com/v1_1/dyr7vy4ti/image/upload`,
    formData
  );

  return res.data.secure_url; // returns the usable image URL
};
