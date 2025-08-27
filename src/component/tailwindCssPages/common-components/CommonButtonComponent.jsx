import EastIcon from '@mui/icons-material/East';

const CommonButton = ({title, classStyle, icon = false}) => {
    return (
        <div>
            <button className={`${classStyle}`} >{title} {icon === true ? <EastIcon className='mx-1' fontSize='2px' sx={{fontVariationSettings: "'wght' 700"}} /> : ""}</button>
        </div>
    )
}

export default CommonButton