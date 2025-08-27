const CommonTitle = ({title,classStyle}) => {
    return (
        <div>
            <h1 className={`${classStyle}`} >{title}</h1>
        </div>
    )
}

export default CommonTitle