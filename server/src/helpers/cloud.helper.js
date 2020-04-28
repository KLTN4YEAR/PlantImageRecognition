const gc = require('../config/google-cloud')
const bucket = gc.bucket('recognition-plant') // should be your bucket name

/**
 *
 * @param { File } object file object that will be uploaded
 * @description - This function does the following
 * - It uploads a file to the image bucket on Google Cloud
 * - It accepts an object as an argument with the
 *   "originalname" and "buffer" as keys
 */

const uploadImage = (file, typePlant, plant) => new Promise((resolve, reject) => {
  const { originalname, buffer } = file

  const blob = bucket.file(`imagePost/${typePlant}/${plant}/` + originalname.replace(/ /g, "_"))

  const blobStream = blob.createWriteStream({
    contentType: file.mimetype,
    resumable: false
  })
  blobStream.on('finish', () => {
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`
    resolve(publicUrl)
  })
    .on('error', (err) => {
      console.log('error: ', err)
      reject(`Unable to upload image, something went wrong`)
    })
    .end(buffer)
})

module.exports = uploadImage