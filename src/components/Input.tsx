import * as React from 'react';
// import { IAppProps } from './../App';

interface IInputProps {
  item: string;
  onChange: any;
  onSubmit: any;
}

class Input extends React.Component<IInputProps> {
  public render() {
    return (
      <>
        <input
          type="text"
          name={this.props.item}
          placeholder={this.props.item}
          onChange={this.props.onChange}
        />
        <input type="submit" name="Submit" onClick={this.props.onSubmit} />
      </>
    );
  }
}

export default Input;
