import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import { Container, Row, Col } from 'reactstrap';
import './MainPage.css';
import VisPrev from './VisPrev';
import { Badge } from 'reactstrap';
import { Table } from 'reactstrap';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";


class NewVis extends Component {
	
  constructor(props) {
	 super(props);
	console.log(localStorage.getItem('session'));
	const { history } = this.props;
	if(localStorage.getItem('session')=="false"){
		console.log("yoo");
		history.push('/');
	}
    this.state = {
	data:[[0,0],[0,0]],
      xAxis: "",
      yAxis: "",
	nameVis:""
    };
  }

  validateForm() {
    return this.state.xAxis.length == this.state.yAxis.length && this.state.xAxis.length>0 && this.state.yAxis.length>0 && this.state.nameVis.length>0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit= event => {
    event.preventDefault();
    var dataArrAux = [this.state.xAxis.split(",").map(Number),this.state.yAxis.split(",").map(Number)];
    var dataArr = dataArrAux[0].map(function(col, i) {
    return dataArrAux.map(function(row) {
        return row[i];
    });
});
    this.setState({
      data:dataArr

    });
    

  }

   buttonClicked= event => {
	console.log(JSON.parse(localStorage.getItem('session')).email);
        console.log(this.state.xAxis.split(",").map(Number));
     fetch('/api/newVis', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: JSON.parse(localStorage.getItem('session')).email,
    x:this.state.xAxis.split(",").map(Number),
    y:this.state.yAxis,
    name: this.state.nameVis,
    width:300,
    height:300
    
	
  }),
}).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
	alert('Visualização salva com sucesso');
    })
    .catch((error) => {
	alert(error);
      console.error(error);
    });
    }

  render() {
    return (

	
      <div>
<div><h1><Badge color="secondary">VIZUDATA</Badge></h1></div>
 <Container>
        
        <Row>
          <Col><div><h1>Nova Visualização</h1></div>
<hr className="my-2" />
</Col>
      
        </Row>
	<Row><Col>
	<div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="nameVis" bsSize="large">
	<ControlLabel>Nome da Visualização</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.nameVis}
              onChange={this.handleChange}
            />
	</FormGroup>
	<FormGroup controlId="xAxis" bsSize="large">
            <ControlLabel>Eixo X(números separados por vírgula)</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.xAxis}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="yAxis" bsSize="large">
            <ControlLabel>Eixo Y(números separados por vírgula)</ControlLabel>
            <FormControl
              value={this.state.yAxis}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <Button
            block
	    disabled={!this.validateForm()}
            bsSize="large"
            type="submit"
          >
            Visualização Prévia
          </Button>
        </form>
      </div>


	</Col>
	</Row>
	<Row>
          <Col><div><h3>Visualização Pŕevia</h3></div>
		<Row><Col><div align='center'><VisPrev data={this.state.data} /></div></Col></Row>
		<Button onClick={this.buttonClicked}>
            Salvar Visualização
          </Button>
<hr className="previa" />

</Col>
      
        </Row>
      </Container>

	

      </div>

    );
  }
}

export default NewVis;
