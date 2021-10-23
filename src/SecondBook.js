import React  from "react";
import HTMLFlipBook from 'react-pageflip';
import {AppBar, Button, styled, Toolbar, Typography} from "@mui/material";

const Offset = styled("div")(({
                                  theme
                              })=>theme.mixins.toolbar);
export default class DemoBook extends React.Component {



    render() {
        return (

            <div className="secondbookdiv" >
                <AppBar>
                    <Toolbar>
                        <Button variant="contained" size="small">
                            Back
                        </Button>
                        <Button variant="contained" size="small">
                            Next
                        </Button>




                    </Toolbar>
                </AppBar>
                <Offset/>

                <HTMLFlipBook
                    width={550}
                    height={1100}
                    size="stretch"
                    minWidth={315}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1533}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    onFlip={this.onPage}
                    onChangeOrientation={this.onChangeOrientation}
                    onChangeState={this.onChangeState}
                    className="demo-book"
                    ref={(el) => (this.flipBook = el)}
                >

                    <div className="demoPage" id="coverPageBook"></div>
                    <div className="demoPage">Page 2


                    </div>
                    <div className="demoPage">Page 3</div>
                    <div className="demoPage">Page 4</div>

                </HTMLFlipBook>


            </div>
        );
    }
}