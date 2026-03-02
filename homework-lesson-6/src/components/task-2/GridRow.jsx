import { memo } from "react"

function GridRow({ user }) {
    console.log("Row render:", user.id)

    return (
        <div className="task-2__row">
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.age}</span>
            <span>{user.salary}</span>
        </div>
    )
}

export default memo(GridRow)