import React from 'react';
import TodoItem from './TodoItem'

class Todo extends React.Component {
    state = {
        elements: [
            {id: '3435345', isCompleted: true, title: 'Zrobić zakupy'},
            {id: '343hgf45', isCompleted: false, title: 'Zjeść obiad'}
        ],
        inputValue: ''
    }

    markCompleted(id) {
        const index = this.state.elements
                      .findIndex(x => x.id == id);
        const newElements = this.state.elements
        newElements[index].isCompleted = true;

        this.setState({ elements: newElements })
    }

    addItem() {
        const item = {
            id: Math.random(),
            title: this.state.inputValue
        }
        const newElements = [item, ...this.state.elements]
        this.setState({elements: newElements})
        this.setState({inputValue: ''})
    }

    inputHandler(event) {
        const newValue = event.target.value;
        this.setState({inputValue: newValue})
    }

    render() {
        const elements = this.state.elements.map(e => {
            return <TodoItem element={e} markClicked={this.markCompleted.bind(this)} />
        })
        return(
            <div>
                Todo app
                <input type="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)}/>
                <button onClick={this.addItem.bind(this)}>Dodaj do listy</button>
                {elements}
            </div>
        )
    }
}

export default Todo;