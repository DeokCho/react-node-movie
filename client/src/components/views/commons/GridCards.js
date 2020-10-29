import React, {useState} from 'react'
import {Grid} from '@material-ui/core'

const GridCards = (props) => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    if(props.landingPage){
        return (
            <Grid item lg={3} md={4} xs={6}>
                <div style={{position: 'relative'}}>
                    <a href={`/movie/${props.movieId}`}>
                            <img style={{width:'100%', height:'400px', transform:`${hover? 'scale(1.02,1.02)': 'scale(1.0,1.0)'}`}} 
                                src={props.image} 
                                alt={props.movieName}
                                onMouseOver={onHover}
                                onMouseOut={onHover}
                                />
                        </a>              
                </div>
            </Grid>
        )
    } else {
        return (
            <Grid item lg={3} md={4} xs={6}>
                <div style={{position: 'relative'}}>
                            <img style={{width:'80%', height:'400px'}} src={props.image} alt={props.actorName}/>
                </div>
            </Grid>
        )
    } 
    
}

export default GridCards
