import { Component } from 'react';
import Statistics from '../statistics/Statistics';
import Feedback from '../feedback/Feedback';

export type State = {
  good: number;
  neutral: number;
  bad: number;
};

export default class App extends Component<object, State> {
  state: State = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onChange = (name: string) => {
    this.setState((prev: Pick<State, keyof State>): Pick<State, keyof State> | null => {
      return { [name]: prev[name as keyof State] + 1 } as State;
    });
  };

  render() {
    return (
      <>
        <div className='ml-[16px] mt-[16px]'>
          <Feedback state={this.state} onChange={this.onChange}></Feedback>
        </div>
        <div className='ml-[16px] mt-[16px]'>
          <Statistics state={this.state} />
        </div>
      </>
    );
  }
}
