import * as React from 'react';
// import { IAppProps } from './../App';

interface IInputProps {
  item: string;
  onChange: any;
  onSubmit: any;
}

class Input extends React.Component<IInputProps> {
  public render() {
    const { item, onChange, onSubmit } = this.props;
    return (
      <>
        <input type="text" name={item} placeholder={item} onChange={onChange} />
        <input type="submit" name="Submit" onClick={onSubmit} />
      </>
    );
  }
}

export default Input;
