import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import { Container, Row, Col } from 'reactstrap';
import './MainPage.css';
import { Badge } from 'reactstrap';
import { Card,Table } from 'reactstrap';
class MainPage extends Component {
	constructor(props) {
	 super(props);
	this.state = {
	visualizacoes:[1,2]
    	};
	console.log(localStorage.getItem('session'));
	const { history } = this.props;
	if(localStorage.getItem('session')=="false"){
		console.log("yoo");
		history.push('/');
	}
	
    
  }
componentDidMount() {
     
     fetch('/api/newVis/'+JSON.parse(localStorage.getItem('session'))._id, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  
}).then((response) => response.json())
    .then((responseJson) => {
      	this.setState({
      visualizacoes: responseJson.visualizations
    });
        console.log(responseJson.visualizations);
       
    })
    .catch((error) => {
      console.error(error);
    });
  

  }
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
<div><h1><Badge color="secondary">VIZUDATA</Badge></h1></div>
 <Container>
        
        <Row>
          <Col><div><h1>minhas visualizações</h1></div>
<hr className="my-2" />
</Col>
      
        </Row>
	<Row><Col>
	<Card >
        <h2>Vis</h2>
        <ul>
        {this.state.visualizacoes.map(vis => 
          <li key={vis.id}>{vis}</li>
        )}
        </ul>
      </Card>
</Col></Row>
      </Container>

	

      </div>

    );
  }
}

export default MainPage;
