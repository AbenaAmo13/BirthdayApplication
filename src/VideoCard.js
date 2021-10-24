import {AppBar, Button, styled, Toolbar, Card, CardMedia, CardActionArea, CardContent, Typography, CardActions} from "@mui/material";
import React from "react";
import abimessage from "./abimessage.mp4"
import ewuraone from "./ewurabdaymessage1.mp4"
import ewuratwo from "./ewurabdaymessage2.mp4"
import abena from "./abenavideo2.mp4"
import auntyrose from "./auntyrose.mp4"
import nana from "./nanabdaymessage.mp4"
import ReactPlayer from 'react-player/youtube'


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


                <Card width="100%" className="bdayvideos">
                    <CardMedia
                        component="video"
                        height="140"
                        image={abimessage}
                        alt="Abi message"
                        controls
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Abi's Birthday Message
                        </Typography>
                    </CardContent>

                </Card>

                <Card width="100%" className="bdayvideos">
                    <CardMedia
                        component="video"
                        height="140"a
                        image={nana}
                        alt="Abena's message"
                        controls
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Nana's Birthday Message
                        </Typography>
                    </CardContent>

                </Card>




                <Card width="100%" classname="bdayvideos">
                    <CardMedia
                        component="video"
                        height="140"
                        image={ewuraone}
                        alt="Abi message"
                        controls
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Ewura Birthday Message Part 1
                        </Typography>
                    </CardContent>

                </Card>

                <Card width="100%" className="bdayvideos">
                    <CardMedia
                        component="video"
                        height="140"
                        image={ewuratwo}
                        alt="Abi message"
                        controls
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Ewura Birthday Message Part 2
                        </Typography>
                    </CardContent>

                </Card>

                <Card width="100%" className="bdayvideos">
                    <CardMedia
                        component="video"
                        height="140"
                        image={abena}
                        alt="Abena's message"
                        controls
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Abena's Birthday Message
                        </Typography>
                    </CardContent>

                </Card>


                <Card width="100%" className="bdayvideos">
                    <CardMedia
                        component="video"
                        height="140"
                        image={auntyrose}
                        alt="Abena's message"
                        controls
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Aunty Rose Birthday Messsage
                        </Typography>
                    </CardContent>

                </Card>

                <Card width="100%" className="bdayvideos">
                    <CardMedia
                        component="video"
                        height="140"
                        image={auntyrose}
                        alt="Abena's message"
                        controls
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Aunty Rose Birthday Messsage
                        </Typography>
                    </CardContent>

                </Card>

                <Card width="100%" className="bdayvideos">
                    <CardMedia>
                        <ReactPlayer url='https://www.youtube.com/playlist?list=PLgtwbzCvB4xe-4DZiP3dMipKm0sN6je-v' />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Playlist of gospel songs that you love.
                        </Typography>
                    </CardContent>
                </Card>

                <Card width="100%" className="bdayvideos">
                    <CardMedia>
                        <ReactPlayer url='https://www.youtube.com/playlist?list=PLgtwbzCvB4xcsYaZRx-hQtbRzs2Hqzxe5' />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Special Gospel birthday playlist, Your professor made just for you.
                        </Typography>
                    </CardContent>
                </Card>







            </div>
        );


    }
}

