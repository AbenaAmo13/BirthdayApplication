import React  from "react";
import HTMLFlipBook from 'react-pageflip';
import {AppBar, Button, styled, Toolbar, Typography} from "@mui/material";
import churchPic from "./churchpic.jpeg"
import enaspic from "./enaspic.png"
import abena from "./abena.jpeg"
import humnle from "./humble.jpeg"
import funny from "./funny.jpeg"
import strong from "./strong.jpeg"
import cook from "./cook.jpeg"
const Offset = styled("div")(({
                                  theme
                              })=>theme.mixins.toolbar);
export default class DemoBook extends React.Component {

    constructor(props) {
        super(props);
        this.handleClickSecond = this.handleClickSecond.bind(this)
        this.handleClickVideoCard = this.handleClickVideoCard.bind(this)

    }

    handleClickSecond(e){
        this.props.handleClick(0)
    }

    handleClickVideoCard(e){
        this.props.handleClick(2)
    }


    render() {
        return (

            <div className="secondbookdiv" >
                <AppBar>
                    <Toolbar>
                        <div className="bardisplay">
                            <Button variant="contained" size="small" onClick={this.handleClickSecond}>
                                Menu
                            </Button>
                            <Button variant="contained" size="small" className ="video" onClick={this.handleClickVideoCard}>
                                Videos
                            </Button>

                        </div>
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
                        <img src={abena} height="30%" width="100%">

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
                            Reason 4: You are incredibly humble
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
                        <p className="reasonBody">
                            Your humility is so admirable! I have seen you go through the toughest challenges with such grace and humility that I didn't know
                            one could have in those circumstance. The way you handled everything with Daddy, the level of humility you have with dealing with parent,
                            teachers, and the people you encounter is one to be modeled. I aspire to have that level
                        </p>
                    </div>
                    <div className="demoPage">
                        <p className="reasonBody">
                            of humility. Because of you, I have learnt that approach is everything and I am forever grateful for that lesson.
                        </p>
                        <Typography gutterBottom variant="h5" component="div" className="reasonTitles">
                            Reason 5: You are the strongest person I know
                        </Typography>
                        <div>
                        <img src={strong} width="100%" height="40%">
                        </img>
                        </div>
                        <p className="reasonBody">
                            Tap right/swipe right to continue...
                        </p>
                    </div>

                    <div className="demoPage">
                        <p className="reasonBody">
                            You have gone through so much but still the smile on your face prevails. You still exude so much life and positive energy
                            so much so that everyone loves being around you. You have such a persevering spirit and let nothing bring you down.
                            Even in hard moments when you feel down, you never let it keep you down and that is quality that is rare to find. I pray that
                            you continue to get stronger and better everyday through the spirit of God for the rest of your life!
                        </p>
                        <Typography gutterBottom variant="h5" component="div" className="reasonTitles">
                            Reason 6: You are one of the funniest people I know
                        </Typography>
                        <div>
                            <img src={funny} height="40%" width="100%"></img>
                        </div>
                        <p className="reasonBody">
                            As I've grown, I've realised that you are so
                        </p>
                    </div>

                    <div className="demoPage">
                        <p className="reasonBody">
                            super funny. Honestly, you get funnier every year.I'm so blessed to have a mother
                            who I can have genuine good laughs withs and brings me so much joy.
                        </p>
                        <Typography gutterBottom variant="h5" component="div" className="reasonTitles">
                            Reason 6: You take responsibility for your life.
                        </Typography>

                        <p className="reasonBody">
                            You always tell me that in life, you never blame others but always see where you faulted and try and improve
                            and I love that about you. You always want to see how you can solve the situation rather than
                            thinking things are hopeless but you also know when to  let things go when there is nothing you
                            can do about it. I have picked this character from you and It has changed the game for me
                            so I am happy to have learnt it from you.
                        </p>
                        <Typography gutterBottom variant="h5" component="div" className="reasonTitles">
                            Reason 7: You are an incredible giver
                        </Typography>

                        <p className="reasonBody">
                            I have seen you give so much of yourself to everyone around you. The way you have given
                            to me and my sisters alone is great that I can't express how grateful and thankful
                            I am to be blessed with the best mother in the entire universe. (Tap right (Swipe) to
                            continue
                        </p>

                    </div>
                    <div className="demoPage">
                        <p className="reasonBody">
                            You give so much to ENAS, to the church, and to other people's children so much so that they never want to leave
                            our house when they come around. Your love sees no bounds and  I can only aspire to have the caring and
                            giving nature that you possess.
                        </p>

                        <Typography gutterBottom variant="h5" component="div" className="reasonTitles">
                            Reason 8: You are an exceptional cook
                        </Typography>
                        <div>
                            <img src={cook} width="100%" height="20%">
                            </img>
                        </div>

                    </div>
                    <div className="demoPage">
                        <p className="reasonBody">
                           There are million other reasons why I love you but you being able to cook so exceptionally
                            is the icing on an already perfectly baked cake. Your fufu and groundnut food is the best
                            of all time and honestly deserves its own chop bar. Maa doesn't need Mckeown with your fufu in town!
                        </p>

                        <Typography gutterBottom variant="h5" component="div" className="reasonTitles">
                            Reason 9: You are honest with those you love
                        </Typography>
                        <p className="reasonBody">
                          I love the way you are honest with those you love. The way you correct us when we are doing something wrong.
                            Or when you tell me to dress nicely cause if I don't it would rob me off opportunities.
                            You are never afraid to tell me as it is and I love that cause I know that you have my best interest at heart
                            and as a result of this, I trust you with my entire life.
                            Another thing is, you practice honesty with wisdom. You know when it is necessary to say certain things
                            and when the time isn't right and that quality together with the favour of God has brought you thus far and
                            I know that it will continue to reap blessings into your life.
                        </p>




                    </div>

                    <div className="demoPage">
                        <Typography gutterBottom variant="h5" component="div" className="reasonTitles">
                            Reason 10: I love you because you are you.
                        </Typography>
                        <p className="reasonBody">
                            At this point of my life, I just love everything about you. Your good, your bad, and everything in between. There is nothing
                            absolutely nothing you can do to make me not love you because I trust you with my life. I know you have my best interest at heart
                            and I am completely safe in you. There is nothing you can do to ever let me down or take my love for you because from now till the
                            end of my life I love you because you are YOU and I will spend the rest of my life proving it to you.


                        </p>

                        <p className="reasonBody" id="lovealways">
                            Love Always,<br></br>

                                Your Professor
                        </p>
                    </div>



                </HTMLFlipBook>



            </div>
        );
    }
}