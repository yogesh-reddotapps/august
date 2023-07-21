const image = await uploadImage(fileList);

const [fileList,setFileList]=useState([]);
const [imageUrl,setImageUrl]=useState();



const handleChange = (info) => {
  const file = info.fileList[0]?.originFileObj;
  let formData = new FormData();
  if (file) {
    formData.append("file", file);
    setFileList(file);
  }
  if (info?.fileList[0]) {
    getBase64(info.fileList[0].originFileObj, (url) => {
      setImageUrl(url);
    });
  }
};

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};


// setImageUrl([
//   response.data.profile_pic
// ])

<Upload
              name="avatar"
              accept="image/*"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={() => false}
              maxCount={1}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
