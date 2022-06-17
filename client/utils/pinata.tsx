import Axios from 'axios';
import FormData from 'form-data';

const ipfsImageUpload = async (file:File, fileName:string) => {
  const data = new FormData();
  data.append('file', file);
  data.append('pinataOptions', '{"cidVersion": 1}');
  data.append('pinataMetadata', `{"name": "${fileName}-picture", "keyvalues": {"company": "BeeImp"}}`);

  let config = {
    method: 'post',
    url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
    },
    data: data
  }
  try {
    const uploadFileResponse = await Axios(config);
    return `ipfs://${uploadFileResponse.data.IpfsHash}`;
  } catch (err) {
    console.error(err);
  }
}
const ipfsImagesUpload = async (files:File[], fileName:string) => {
  return files.map(async(file, index) => {
    return await ipfsImageUpload(file, `${fileName}_${index}`)
  })
}

export {
  ipfsImageUpload,
  ipfsImagesUpload
}