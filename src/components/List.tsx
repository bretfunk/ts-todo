import * as React from 'react';

interface IListProps {
  items: string[];
  onDelete: any;
}

class List extends React.Component<IListProps> {
  public render() {
    const { items, onDelete } = this.props;
    const deleteButton = <button onClick={onDelete}>Delete</button>;
    const list = items.map((item: any, i: number): any => (
      <li key={i}>
        {item}
        {deleteButton}
      </li>
    ));
    return <ul>{list}</ul>;
  }
}

export default List;
