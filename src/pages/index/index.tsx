import * as React from 'react';
import { observer, inject } from 'mobx-react';

interface indexProps {
  testStore: any;
}

@inject('testStore')
@observer
class IndexPage extends React.Component<indexProps, {}> {
  public render() {
    return (
      <div>
        <p onClick={()=>this.test()}>hello TS</p>
        {this.props.testStore.list.map((v, i) => (
          <div>
            <p>{v.name}</p> <span onClick={()=>this.delete(v.id)}>-</span>
          </div>
        ))}
      </div>
    );
  }

  public test = () => {
    console.log(this.props.testStore.list)
  }

  public delete = (num) => {
    this.props.testStore.removeItem(num)
  }
}

export default IndexPage;