import React, { Component } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries,YAxis,XAxis,VerticalGridLines,HorizontalGridLines} from 'react-vis';
import equal from 'fast-deep-equal';

class VisPrev extends Component {
  constructor(props) {
    super(props);
	this.state = {data:props.data};

  }
	
componentDidUpdate(prevProps, prevState) {
  
  if (prevProps.data !== this.props.data) {
    this.setState({
      data:this.props.data
    });
  }
}
  render() {
     
    return (
      <div className="VisPrev">
        <XYPlot
  width={300}
  height={300}
  getX={d => d[0]}
  getY={d => d[1]}>
	<VerticalGridLines />
  <HorizontalGridLines />
  <XAxis />
  <YAxis />
  <LineSeries
    color="red"
    data={this.state.data}/>
</XYPlot>
      </div>
    );
  }
}

export default VisPrev;
