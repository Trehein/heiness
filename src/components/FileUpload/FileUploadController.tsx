import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import React, { useState } from 'react'
import { fbStorage, firestore } from '../../fbConfig/fbConfig'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const FileUploadController: React.FC = () => {
  const [file, setFile] = useState<any>(null)
    const [uploading, setUploading] = useState(false)
    const [url, setUrl] = useState('')

    const handleChange = (e: any) => {
      if (e.target.files[0]) {
        setFile(e.target.files[0])
      }
    }

    const handleUpload = async () => {
      if (!file) return;
      setUploading(true)

      try {
        const fileRef = ref(fbStorage, `uploads/${file.name}`)

        await uploadBytes(fileRef, file)

        const downloadUrl = await getDownloadURL(fileRef)
        setUrl(downloadUrl)

        await addDoc(collection(firestore, 'files'), {
          name: file.name,
          url: downloadUrl,
          createdAt: serverTimestamp()
        })

        alert("File Uploaded!")
      } catch (err) {
        console.error(err)
        alert('Upload Failed')
      } finally {
        setUploading(false)
      }
    }

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload} disabled={!file || uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {
        url && (
          <div>
            <p>Download URL: </p>
            <a href={url} target='_blank' rel='noreferrer'>
              {url}
            </a>
          </div>
        )
      }
    </div>
  )
}

export default FileUploadController