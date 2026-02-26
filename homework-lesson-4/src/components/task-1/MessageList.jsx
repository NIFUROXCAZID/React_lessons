import MessageItem from './MessageItem'

export default function MessageList({ messages, addLike, addDislike }) {
    return (
        <div className='task-1__list'>
            <h3>Повідомлення</h3>
            <hr />
            {messages?.length > 0 ? (
                messages.map((message) => (
                    <MessageItem
                        key={message.id}
                        {...message}
                        addLike={addLike}
                        addDislike={addDislike}
                    />
                ))
            ) : (
                    <div className='task-1__no-message'>Немає повідомлень</div>
            )}
        </div>
    )
}

