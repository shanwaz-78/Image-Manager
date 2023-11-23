const uploadImageController = (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: `No File Received` });
  }
  const imageBuffer = req.file.buffer;
  console.log(imageBuffer);
};

export default { uploadImageController };
