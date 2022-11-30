import React, { FC, memo, useState } from 'react'
import { UiDropzone, UIGroup, UiMantineImage, UiText } from '~/lib'
import { isDev } from '~/utils/helpers'
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';
import { useMantineTheme } from '@mantine/core';
import { IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { storage } from '~/utils/config/firebase';
import {ref, uploadBytes, listAll} from 'firebase/storage'
import { usePropertyContext } from '~/contexts/AddPropertyContext';



const UploadMediaStep: FC = memo(
  () => {
    const theme = useMantineTheme();
    const [files, setFiles] = useState<FileWithPath[]>([]);
    const {details} = usePropertyContext()

    const handleFileCapture = (files: FileWithPath[]) => {
      console.log('files are: ', files)
      setFiles(files)
    }
    const handleFileUpload = () => {
      files.map(file => {
        const imageRef = ref(storage , `test_properties/${details.id}/${file.name}`)
        uploadBytes(imageRef , file).then(() => {
          alert(`image : ${file.name} uploaded`)
        })
      })
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
        UploadMediaStep component
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
        <button onClick={handleFileUpload}>
            Upload
        </button>
        <div className='grid grid-cols-4 gap-3'>

          {previews}
        </div>

      </div>
    )
  }
)


if (isDev) {
  UploadMediaStep.displayName = 'UploadMediaStep'
}


export default UploadMediaStep