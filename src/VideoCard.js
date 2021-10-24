import {AppBar, Button, styled, Toolbar} from "@mui/material";
import React from "react";



const Offset = styled("div")(({
                                  theme
                              })=>theme.mixins.toolbar);
export default class  VideoCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.handleClickBook = this.handleClickBook.bind(this)
    }

    handleClick(e) {
        this.props.handleClick(0)
    }

    handleClickBook(e) {
        this.props.handleClick(1)
    }

    render() {
        return (<div>
            <AppBar>
                <Toolbar>
                    <div className="bardisplay">
                        <Button variant="contained" size="small" onClick={this.handleClick}>
                            Menu
                        </Button>
                        <Button variant="contained" size="small" className ="video" onClick={this.handleClickBook}>
                            10 Reasons Why

                        </Button>

                    </div>
                </Toolbar>
            </AppBar>

        </div>
        );


    }
}

