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
    this.state = {
	data:[[0,0],[0,0]],
      xAxis: "",
      yAxis: ""
    };
  }

  validateForm() {
    return this.state.xAxis.length == this.state.yAxis.length;
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

   buttonClicked() {
        alert('Button was clicked!')
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
