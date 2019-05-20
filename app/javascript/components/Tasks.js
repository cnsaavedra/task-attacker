import React from 'react'

class Tasks extends React.Component {
    render() {
        return(
            <div>
                <h1>Tasks</h1>
                <form>
                    <input
                        type="text" 
                        placeholder="Spawn a task" 
                        maxLength="50"
                    />
                                        <input
                        type="text" 
                        placeholder="Power" 
                        maxLength="50"
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
export default Tasks