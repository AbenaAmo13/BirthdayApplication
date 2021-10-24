import React  from "react";
import HTMLFlipBook from 'react-pageflip';
import {AppBar, Button, styled, Toolbar, Typography} from "@mui/material";
import churchPic from "./churchpic.jpeg"
import enaspic from "./enaspic.png"
import abena from "./abena.jpeg"
import humnle from "./humble.jpeg"
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
                            Even though as humans we aren't perfect, you continue to strive  to improve in your faith walk and I am super blessed to have a mother
                            who is going
                        </p>

                    </div>
                    <div className="demoPage">


                        <p className="reasonBody">
                            on this faith journey with me.
                            Over the past few years as I have matured and gotten to know you more, I am hundred percent proud to have you as my mentor and my mother and on this your special day,
                            I continue to pray that you continue to grow in your relationship with God and get to fulfil all that he has purposed for you!
                        </p>

                        <Typography gutterBottom variant="h5" component="div" className="reasonTitles">
                            Reason 2: Nobody loves (me and others) like you do!
                        </Typography>

                        <p className="reasonBody">
                          You are the physical manifestation of God's love in my life. You are one of the top reasons why I know God exist.
                            The way in which you care for me, my sisters, strangers and everyone around is so astonishing.
                            The detail, the energy, the sacrifice, the quality of all that you do and your character is one of a kind
                            and you are my topmost example of Love not in words only but in deed.
                        </p>
                        <img src={abena} height="40%" width="100%">

                        </img>
                    </div>
                    <div className="demoPage">
                        <p className="reasonBody">
                        The way you have personally shown me love cannot be compared to anyone else in this world. I love you more than anything and
                        anyone in this world, and It is my prayer to God that I would be able to demonstrate the same kind of love you have shown me to
                        those around me.
                            My rock, my heart, my joy, my everything. I am glad to have known you for 20 years and as you have turned 47 may God continue to grant you many many
                            more years so that my kids and grand kids may get to experience the joy I have in you.
                        </p>

                        <Typography gutterBottom variant="h5" component="div" className="reasonTitles">
                            Reason 3: You have the perfect balance of great work ethic with faith
                        </Typography>
                        <div>
                            <img src={enaspic} height="40%" width="100%">

                            </img>
                        </div>
                    </div>

                    <div className="demoPage">
                        <p className="reasonBody">
                            You exhibit such a good balance of working hard and having faith in God. The way you have taught me to do my best and let God do the rest not only through your words but through your actions is super admirable.
                            I admire the way that you never make anything stop you from doing the necessary. I have seen you accomplish so much through the hardest of times and toughest of storms and for that
                            I myself have learnt to never let life stop me from pushing but to never give up and keep reaching towards the goal.
                        </p>

                        <p className="reasonBody">
                            Most importantly, your constant acknowledgement of God's favour and grace in everything you do has been vital in my life as I know that ultimately God is the
                            one who gives me victory. You have shown me with your life what God meant by the horse is prepared for battle but victory belongs to the Lord.
                        </p>


                        <Typography gutterBottom variant="h5" component="div" className="reasonTitles">
                            Reason 4: You are incredibly humbled
                        </Typography>
                        <p>
                            Tap right /Swipe to continue...
                        </p>


                    </div>
                    <div className="demoPage">
                        <div>
                            <img src={humnle} width="100%">
                            </img>

                        </div>
                        <p>
                            Tap right /Swipe to continue...
                        </p>

                    </div>

                </HTMLFlipBook>



            </div>
        );
    }
}