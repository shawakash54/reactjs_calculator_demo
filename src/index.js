import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';


function Square(props){
    return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class CalculatorLayout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            result: null,
            firstOperator: null,
            secondOperator: null,
            operand: null
        };
    }

    checkIfOperator(i){
        if(typeof i === 'number')
            return true;
        return false;
    }

    calculateResult(){
        switch(this.state.operand){
            case '+':
                return this.state.firstOperator + this.state.secondOperator;
            case '-':
                return this.state.firstOperator - this.state.secondOperator;
            case '/':
                return this.state.firstOperator / this.state.secondOperator;
            case '*':
                return this.state.firstOperator * this.state.secondOperator;
        }
    }

    handleClick(i){
        console.log(i)
        if(this.checkIfOperator(i)){
            if(this.state.firstOperator === null){
                this.setState({
                    firstOperator: i
                });
            }else{
                this.setState({
                    secondOperator: i
                });
            }
        }else{
            if(i == '='){
                this.setState({
                    result: this.calculateResult()
                });
            }else if(i == 'Clear'){
                this.setState({
                    firstOperator: null,
                    secondOperator: null,
                    result: null,
                    operand: null
                });
            }else{
                this.setState({
                    operand: i
                });
            }
        }
    }

    renderSquare(i){
        return (
            <Square value={i} 
            onClick={()=>this.handleClick(i)}>
            </Square>
        );
    }

    render(){ 
        return(
            <div>
                <div className="status">{this.state.result}</div>
                <div className="status">First Operator: {this.state.firstOperator}</div>
                <div className="status">Second Operator: {this.state.secondOperator}</div>
                <div className="status">Operand: {this.state.operand}</div>
                <div className="board-row">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="board-row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare('*')}
                    {this.renderSquare('/')}
                </div>
                <div className="board-row">
                    {this.renderSquare('+')}
                    {this.renderSquare('-')}
                    {this.renderSquare('=')}
                </div>
                <div className="board-row">
                    {this.renderSquare('Clear')}
                </div>
            </div>
        );
    }

}

class Calculator extends React.Component{
    render(){
        return(
            <div className="calculator">
                <div className="calculator-board">
                    <CalculatorLayout/>
                </div>
                <div className="calculator-info">
                    
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById('root')
);