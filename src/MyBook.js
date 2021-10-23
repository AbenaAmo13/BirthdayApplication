import HTMLFlipBook from 'react-pageflip';
import React from "react";
import coverpicture from './coverpage.jpeg'
import {
    Paper,
    Button,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Card,
    AppBar, Toolbar
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

function MyBook(props) {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    HAppy birthday Mummy

                </Toolbar>

            </AppBar>

            <HTMLFlipBook
                width={550} // base page width
            height={733} // base page height

            size={"stretch"}
            // set threshold values:
            minWidth={315}
            maxWidth={1000}
            minHeight={1000}
                maxHeight={1350}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={false}


                className="App">

                <div className="demoPage"> First Page



                </div>


                <div className="demoPage">Dora the explorer</div>
                <div className="demoPage">Harry styles</div>
                <div className="demoPage">BTS</div>
            </HTMLFlipBook>
        </div>
    );
}



export default MyBook;
