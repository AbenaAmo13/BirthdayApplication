import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import MainMenu from "./MainMenu";
import MyBook from "./MyBook";
import SecondBook from "./SecondBook"
import VideoCard from "./VideoCard"



export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClickSecond = this.handleClickSecond.bind(this)
        this.handleClickBook = this.handleClickBook.bind(this)


    }
    handleClick = (newPage) => {
        this.setState({currentPage: newPage});
    }
    handleClickSecond = (newPage) => {
        this.setState({currentPage: newPage});
    }
    handleClickBook = (newPage) => {
        this.setState({currentPage: newPage});
    }



    getCurrentPage(){
        return this.state.currentPage
    }

    render() {
        console.log(this.getCurrentPage())

        if (this.getCurrentPage() === 0){
            return(
                <MainMenu currentPage={this.state.currentPage} handleClick={this.handleClick} >

                </MainMenu>
            )
        }
        else if(this.getCurrentPage() === 1) {

            return (
                <SecondBook handleClick={this.handleClickSecond}></SecondBook>



            )
        }
        else if(this.getCurrentPage() === 2){
                return (


                  <VideoCard handleClick={this.handleClickBook}></VideoCard>

                )
        }}


}
