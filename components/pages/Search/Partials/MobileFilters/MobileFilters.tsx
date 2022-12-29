import { createStyles } from '@mantine/core'
import React, {FC, memo, useState} from 'react'
import { MdFilterList } from 'react-icons/md'
import { UiModal } from '~/lib'


const useStyles = createStyles((theme) => ({
    modal: {
        width: '80vw',
        paddingBottom: '5rem !important'

    }
}))


const MobileFilters: FC = memo(
    () => {
        const [opened, setOpened] = useState(false)
        const {classes} = useStyles()

     return (
        <div>
            <div onClick={() => {setOpened(prevState => !prevState)}} className="w-full flex justify-between items-center py-2 px-2 bg-white rounded-lg  border border-accent my-4"><MdFilterList /> Filters</div>
            <UiModal
            opened={opened}
            onClose={() => setOpened(false)}
            classNames={{modal: classes.modal}}
            centered>
                
            </UiModal>
        </div>
     )
   }

)

export default MobileFilters