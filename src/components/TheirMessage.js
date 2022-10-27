const TheirMessage = ({lastMessage, message})=> {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.user !== message.sender.username
    return (
        <div> Their Message </div>
    )
}

export default TheirMessage