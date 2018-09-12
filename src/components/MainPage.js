import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import { Container, Row, Col } from 'reactstrap';
import './MainPage.css';
import { Badge } from 'reactstrap';
import { Table } from 'reactstrap';
class MainPage extends Component {

  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
    // Use reader.result
    alert(reader.result)
    }
  reader.readAsText(files[0]);
}

  render() {
    return (

	
      <div>
<div><h1><Badge color="secondary">REACTVIZ</Badge></h1></div>
 <Container>
        <Row>
          <Col><h1>Upload csv file</h1>
	<ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
    <button className='btn'>Upload</button>
</ReactFileReader></Col>
        </Row>
        <Row>
          <Col><div><h1>minhas visualizações</h1></div>
<hr className="my-2" />
</Col>
      
        </Row>

      </Container>

	

      </div>

    );
  }
}

export default MainPage;
