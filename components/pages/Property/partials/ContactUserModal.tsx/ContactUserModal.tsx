import React, {FC, memo, useState} from 'react'
import { UiModal } from '~/lib'
import { isDev } from '~/utils/helpers'

interface ContactUserModalType {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactUserModal: FC<ContactUserModalType> = memo(
    (props) => {
        const {opened, setOpened} = props
      return (
        <>
        <UiModal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
        content baby
      </UiModal>

      {/* <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group> */}
      </>
            
      )
    }
)



if(isDev){
    ContactUserModal.displayName = 'ContactUserModal'
}

export default ContactUserModal