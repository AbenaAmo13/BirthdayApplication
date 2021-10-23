import HTMLFlipBook from 'react-pageflip';
import FlipPage from 'react-flip-page'
import React from "react";
import bookcover from './bookcover.png'

import {
    Paper,
    Button,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Card,
    Grid,
    AppBar, Toolbar, styled
} from "@mui/material";



const Page = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref}> /* ref required */
            <h1>Page Header</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});


const Offset = styled("div")(({
                                  theme
                              })=>theme.mixins.toolbar);


function MyBook(props) {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <i variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Video Messages
                    </i>

                    <i variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       10 Reasons Why
                    </i>
                    <i variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Timeline to 47
                    </i>

                </Toolbar>

            </AppBar>
            <Offset/>


                    <FlipPage showSwipeHint={true} className={'book'}   >

                                <img src={bookcover}>
                                </img>



                            <article>
                                <Card>
                                    <CardMedia>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Reason 1: You are the most God centered woman I know
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Mummy, you are the most God centered person I know. Your desire to grow in Him and obey him is super inspirational. You continue to display the love of God in not only my life but in the life of others.
                                            </Typography>
                                        </CardContent>
                                    </CardMedia>
                                </Card>
                            </article>


                    </FlipPage>
        </div>
    );
}



export default MyBook;
