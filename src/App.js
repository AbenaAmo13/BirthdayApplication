import React from "react";
import coverpicture from './coverpage.jpeg'
import HTMLFlipBook from 'react-pageflip';
import './App.css';
import {Paper,Button, CardActionArea, CardActions, CardContent, CardMedia, Typography, Card} from "@mui/material";
const Page = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref}> /* ref required */
            <h1>Page Header</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});
function MyBook(props) {
    return (
        <div>


        <HTMLFlipBook width={300} height={500} className="App">

            <Paper className="demoPage">
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="coverpicture"
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
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
            </Card>


            </Paper>


            <Paper className="demoPage">Page 2</Paper>
            <div className="demoPage">Page 3</div>
            <div className="demoPage">Page 4</div>
        </HTMLFlipBook>
        </div>
    );
}

export default MyBook;
