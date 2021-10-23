import {AppBar, styled, Toolbar} from "@mui/material";
import React from "react";



const Offset = styled("div")(({
                                  theme
                              })=>theme.mixins.toolbar);
function VideoCard(){
    return(
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
        </div>
    )



}

export default VideoCard;