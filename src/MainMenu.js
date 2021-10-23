import HTMLFlipBook from "react-pageflip";
import {
    AppBar,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Paper, Toolbar,
    Typography
} from "@mui/material";
import React, {Component} from "react";
import coverpicture from './coverpage.jpeg'



export default class MainMenu extends Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        this.props.handleClick(1)
    }

    render() {
        return(
            <div className="MainMenu">

                    <AppBar>
                        <Toolbar>
                            HAppy birthday Mummy

                        </Toolbar>

                    </AppBar>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={coverpicture}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                HAPPY BIRTHDAY MUMMY!!!
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This web book was created by me to show you how much I love you. There are million reasons why I love you but let me start with 10
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={this.handleClick}>
                            Share
                        </Button>
                    </CardActions>

                </Card>


                <Card>

                </Card>


            </div>
        )
    }
}




