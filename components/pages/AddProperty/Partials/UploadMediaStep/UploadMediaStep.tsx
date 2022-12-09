import React, { FC, memo, useState } from 'react'
import { UIButton, UiDropzone, UIGroup, UiMantineImage, UiText } from '~/lib'
import { isDev } from '~/utils/helpers'
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import { useMantineTheme } from '@mantine/core';
import { IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { storage } from '~/utils/config/firebase';
import { ref, uploadBytes, listAll, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { usePropertyContext } from '~/contexts/AddPropertyContext';



const UploadMediaStep: FC = memo(
  () => {
    const theme = useMantineTheme();
    const [files, setFiles] = useState<FileWithPath[]>([]);
    const { details, nextStep } = usePropertyContext()
    const [loading, setLoading] = useState(false)
    const [areFilesUploaded, setAreFilesUploaded] = useState(false)
    const handleFileCapture = (files: FileWithPath[]) => {
      console.log('files are: ', files)
      setFiles(files)
    }
    // const handleFileUpload = () => {
    //   files.map(file => {
    //     const imageRef = ref(storage , `test_properties/${details.id}/${file.name}`)
    //     uploadBytes(imageRef , file).then(() => {
    //       alert(`image : ${file.name} uploaded`)
    //     })
    //   })
    // }

    // const uploadTask = uploadBytesResumable(storageRef, file);


    const handleFileUpload = () => {
      if(!areFilesUploaded){
        files.map(file => {
          setLoading(true)
          const imageRef = ref(storage, `test_properties/${details.id}/${file.name}`)
          const uploadTask = uploadBytesResumable(imageRef, file);
          uploadTask.on('state_changed',
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }
            },
            (error) => {
              // Handle unsuccessful uploads
              console.log(error)
            },
            () => {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
              });
              setLoading(false)
              setAreFilesUploaded(true)
            }
          );
  
        })
        return
      }
      if(areFilesUploaded){
        nextStep()
      }
    }

    const previews = files.map((file, index) => {
      const imageUrl = URL.createObjectURL(file);
      return (
        <UiMantineImage
          key={index}
          src={imageUrl}
          imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
        />
      );
    });

    return (
      <div>
        <UiDropzone
          onDrop={(files) => handleFileCapture(files)}
          onReject={(files) => console.log('rejected files', files)}
          maxSize={3 * 1024 ** 2}
        // accept={IMAGE_MIME_TYPE}
        // {...props}
        >
          <UIGroup position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
            <UiDropzone.Accept>
              <IconUpload
                size={50}
                stroke={1.5}
                color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
              />
            </UiDropzone.Accept>
            <UiDropzone.Reject>
              <IconX
                size={50}
                stroke={1.5}
                color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
              />
            </UiDropzone.Reject>
            <UiDropzone.Idle>
              <IconPhoto size={50} stroke={1.5} />
            </UiDropzone.Idle>

            <div>
              <UiText size="xl" inline>
                Drag images here or click to select files
              </UiText>
              <UiText size="sm" color="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed 5mb
              </UiText>
            </div>
          </UIGroup>
        </UiDropzone>
        <div className='grid grid-cols-4 gap-3 my-4'>

          {previews}
        </div>
        {/* <button onClick={handleFileUpload}>
            Upload
        </button>
         */}
        <UIButton
          onClick={handleFileUpload}
          size='xl'
          className={
            "border border-accent bg-accent text-white hover:bg-white hover:text-accent mt-8 mx-auto relative left-1/2 -translate-x-1/2"
          }
          loading={loading}
        >

          {
            areFilesUploaded ? 'Next Step' :
              loading ? 'Uploading' : 'Upload'}
        </UIButton>
      </div>
    )
  }
)


if (isDev) {
  UploadMediaStep.displayName = 'UploadMediaStep'
}


export default UploadMediaStep