

const Square = (props)=>{
    const Classes = props.className? `${props.className} box`:`box`
    return(
        <>
            <div className={Classes} onClick={props.onClick}>{props.state} </div>
        </>




    )
}
export default Square; 