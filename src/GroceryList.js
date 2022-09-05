import { Component } from 'react';
import trash from './trash.jpg';

export class GroceryList extends Component {
    state = {
    userinput:"",
    groceryList: []

    }

    onChangeEvent(e) {
    this.setState({userinput:e})
    }

    addItem(input) {
        if(input === ''){
            alert("Please enter an item")
        } else {
        let ListArray = this.state.groceryList;
        ListArray.push(input)
        this.setState({groceryList: ListArray, userinput: ''})
    }
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState ({groceryList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSumbit(e) {
     e.preventDefault();
    }

render() {
    return(
        <div>
            <form onSubmit={this.onFormSumbit}>
        <div className='container'>
       <input type="text" placeholder="What to you want to buy today?"
       onChange={(e)=>{this.onChangeEvent(e.target.value)}}
       value={this.state.userinput}/>
        </div>
        <div className='container'>
        <button onClick={(()=>this.addItem(this.state.userinput))} className="add">Add</button>
        </div>
        <ul>
            {this.state.groceryList.map((item,index)=> (
                <li onClick={this.crossedWord}key={index} alt="check-box">
                    <img src={trash} width="20px"/>
                    {item}</li>
            ))
            }
        </ul>
        <div className='container'>
        <button onClick={()=> this.deleteItem()} className="delete">Delete</button>
        </div>
        </form>
        </div>
    )
}

}