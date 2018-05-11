import * as React from 'react';

interface IListProps {
  items: string[];
}

class List extends React.Component<IListProps> {
  public render() {
    const { items } = this.props;
    const list = items.map((item: any, i: number): any => (
      <li key={i}>{item}</li>
    ));
    return <ul>{list}</ul>;
  }
}

export default List;
