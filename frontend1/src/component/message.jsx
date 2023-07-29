
export const Message = ({ message, alert}) => {
    
    const choesenAlert = alert ? alert : "danger"

    return (
        <>
            <div className={`alert alert-${choesenAlert}`} >
                {message}
            </div>
        </>
    )
}
