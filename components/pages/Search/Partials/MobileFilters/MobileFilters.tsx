import { createStyles } from '@mantine/core'
import React, { FC, memo, useState } from 'react'
import { MdFilterList } from 'react-icons/md'
import MultiLevelMenu from '~/components/MultiLevelMenu/MultiLevelMenu'
import { useSearchProperties } from '~/contexts/SearchPropertiesContext'
import { UiModal } from '~/lib'
import { MobileFiltersData } from '~/utils/data'


const useStyles = createStyles((theme) => ({
    modal: {
        width: '100vw',
        height: '80vh',
    },
    inner: {
        height: '100%',
        position: 'relative'
    }
}))


const MobileFilters: FC = memo(
    () => {
        const [opened, setOpened] = useState(false)
        const { classes } = useStyles()
        const { fetchBasedOnFilters } = useSearchProperties()


        return (
            <div>
                <div onClick={() => { setOpened(prevState => !prevState) }} className="w-full flex justify-between items-center py-2 px-2 bg-white rounded-lg  border border-accent my-4"><MdFilterList /> Filters</div>
                <UiModal
                    opened={opened}
                    onClose={() => setOpened(false)}
                    classNames={{ modal: classes.modal, body: classes.inner }}
                    centered>


                    <MultiLevelMenu structure={MobileFiltersData} />
                <div className='absolute bottom-8 w-full '>
                    <button onClick={()=> {fetchBasedOnFilters()}} className="w-full border bg-accent py-4">Apply</button>
                    
                </div>
                </UiModal>

            </div>
        )
    }

)

export default MobileFilters