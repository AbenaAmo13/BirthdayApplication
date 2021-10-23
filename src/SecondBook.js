import React  from "react";
import HTMLFlipBook from 'react-pageflip';
import {AppBar, Button, styled, Toolbar, Typography} from "@mui/material";
import churchPic from "./churchpic.jpeg"
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
                    <div className="demoPage">
                        <div>
                            <img src={churchPic} height="40%" width="100%">

                            </img>

                        </div>



                        <Typography gutterBottom variant="h5" component="div" className="reasonTitles">
                            Reason 1: You are the most God centered woman I know
                        </Typography>

                        <p className="reasonBody">
                            I love the way you put God at the center of everything. Your desire to know, please and obey him is super admirable.
                            Even though as humans we aren't perfect, you continue to strive for to improve in your faith walk and I am super blessed to have a mother
                            who is going
                        </p>

                    </div>
                    <div className="demoPage"> on this faith journey with me. </div>
                    <div className="demoPage">Page 4</div>

                </HTMLFlipBook>


            </div>
        );
    }
}