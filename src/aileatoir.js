import React from "react";
import {Div,Button,Result,Label,Hearts,Input} from './stylegameAileatoir'
export default class Aileagame extends React.Component {
    constructor() {
        super();
        this.state = {
            valeur: 0,
            hearts: 6,
            inp: 0,
            result: '' 
        };
    }

    handlechangeinp = (e) => {
        this.setState({ inp: e.target.value }); 
    };

    componentDidMount() {
        this.funcNum();
    }

    handlechangeBut = () => {
        this.setState((prevState) => ({
            hearts: prevState.hearts - 1,
            result: this.funcRes()
        }));
    };

    funcNum = () => {
        this.setState({ valeur: Math.floor(Math.random() * 100 + 1) });
    };

    funcRes = () => {
        if (this.state.valeur > this.state.inp) {
            return 'plus';
        } else if (this.state.valeur < this.state.inp) {
            return 'moins';
        } else {
            return 'u won';
        }
    };

    render() {
        return (
            <Div>
                <Label htmlFor="nombre">Guessing game</Label>
                <br />
                <Input type="number" id="numero" onChange={this.handlechangeinp}/>
                {this.state.hearts > 0 ? (<Button onClick={this.handlechangeBut} >click</Button>):(<></>)}
                <br/>
                <Result>{this.state.result}</Result>
                <br />
                <Hearts>Hearts: {this.state.hearts}</Hearts>
                <br />
                {this.state.hearts == 0 ? (<h1>loser the number is {this.state.valeur}</h1>):(<></>)}
            </Div>
        );
    }
}
