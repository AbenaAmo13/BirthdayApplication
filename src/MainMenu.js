import HTMLFlipBook from "react-pageflip";
import bookcover from './bookcover.png'
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


                        </Toolbar>

                    </AppBar>
                <Card className="firstCard" >
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
                            <p className="introtext" variant="body2" color="text.secondary">
                                This mini web-application was made to show how much I love you. You mean everything to me and though I am not there I intend to show you just how much you mean to me. I love you so much!!!
                            </p>
                            <p  className="introtext" variant="body2" color="text.secondary">
                                In this web application there will be three cards below:
                            </p>
                            <ul className="listitems">
                                <li>
                                    The first card would take you to a mini book called 10 Reasons Why
                                </li>
                                <li>
                                    The Second card would take you to a birthday video message.
                                </li>
                                <li>
                                    The last one will take you to a slide show of you over the years and a special gift.
                                </li>
                            </ul>
                        </CardContent>
                    </CardActionArea>


                </Card >




                <Card className="secondCard">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={bookcover}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                All the reasons why I love you.
                            </Typography>
                            <p className="introtext" variant="body2" color="text.secondary">
                                In this mini book, I will be detailing 10  reasons why I love you.
                            </p>
                            <p  className="introtext" variant="body2" color="text.secondary">
                                There are million reasons why I love you but since that will take eternity for me to detail them all, I'll start with 10. Click the read button to read the reasons why I love you
                            </p>

                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button id="readbutton" size="small" color="primary" onClick={this.handleClick}>
                            Read
                        </Button>
                    </CardActions>

                </Card>


            </div>
        )
    }
}




