import React from 'react';
import './App.css';
import './components/ListItems.css';
import ListItems from './components/ListItems'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text:'',
        key:''
      },
      itemTitle: [],
      currentTitle: {
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleTitle = this.handleTitle.bind(this);

    this.addItem = this.addItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }

  handleTitle(e){
    this.setState({
      currentTitle:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    const newTitle = this.state.currentTitle;

    if(newItem.text !==""){
      const newItems = [...this.state.items, newItem];
      const newTitles = [...this.state.itemTitle, newTitle];
      this.setState({
        items:newItems,
        itemTitle:newTitles,
        currentItem:{
          text:'',
          key:''
        },

        currentTitle:{
          text:'',
          key:''
        }
      })
    }
  }
  render() {
    return(
      <div className="classdiv">

        <div className="bordure">
          <button type="submit" name="add note" className="save">Ajouter une note</button>
          <ListItems items = {this.state.itemTitle} className='itemtitle'/>
          <ListItems items = {this.state.items}/>
        </div>

        <div className="newbordure">
        <form id="notepad" onSubmit={this.addItem}>
          <input type="text" placeholder="Entrez votre titre" className="App" value={this.state.currentTitle.text} onChange={this.handleTitle}/>
          <textarea name="article" placeholder="Entrez vos notes" className="Apptext" value={this.state.currentItem.text} onChange={this.handleInput}>
          </textarea>
          <button type="submit" name="sauvegarder" className="save">Sauvegarder</button>
        </form>
        </div>

      </div>
    );
  }
}

export default App;