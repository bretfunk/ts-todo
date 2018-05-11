import * as React from 'react';
import './App.css';
import Input from './components/Input';
import List from './components/List';

export interface IAppProps {
  item: string;
  items: string[];
}

class App extends React.Component<{}, IAppProps> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { item: '', items: [] };
  }
  public onChange = (e: any): any => {
    const newItem: any = e.target.value;
    this.setState({ item: newItem });
  };
  public onSubmit = () => {
    this.setState({
      items: [...this.state.items, this.state.item]
    });
    this.setState({
      item: ''
    });
  };

  public onDelete = (e: any) => {
    const toDelete: string = e.target.parentElement.innerText.replace(
      'Delete',
      ''
    );
    const filteredItems: any[] = this.state.items.filter(
      item => item !== toDelete
    );
    this.setState({
      items: filteredItems
    });
  };
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TS ToDo</h1>
        </header>
        <Input
          item={this.state.item}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <List items={this.state.items} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
