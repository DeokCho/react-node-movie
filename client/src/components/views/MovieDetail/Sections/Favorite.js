import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Favorite = (props) => {

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle= props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [favoriteNumber, setFavoriteNumber] = useState(0)
    const [favorited, setFavorited] = useState(false)

    let variables = {
        userFrom,
        movieId,
        // movieTitle,
        // moviePost,
        // movieRunTime
    }

    useEffect (()=>{
        console.log(variables)
        axios.post('/api/favorite/favoriteNumber', variables)
            .then(response=>{
                if(response.data.success){
                    setFavoriteNumber(response.data.favoriteNumber)
                }else{
                    alert('정보 수신 실패')
                }
            })
        
        axios.post('/api/favorite/favorited', variables)
            .then(response=>{
                if(response.data.success){
                    setFavorited(response.data.favorited)

                }else{
                    alert('정보 수신 실패')
                }
            })
    },[])

    const onClickFavorite = () => {
        if(favorited){
            axios.post('/api/favorite/removeFavorite', variables)
                .then(response=>{
                    if(response.data.success){
                        setFavoriteNumber(favoriteNumber-1)
                        setFavorited(!favorited)
                    }else{
                        alert('리스트 지우지 못함')
                    }
                })
        } else{
            axios.post('/api/favorite/addToFavorite', variables)
            .then(response=>{
                if(response.data.success){
                    setFavoriteNumber(favoriteNumber+1)
                    setFavorited(!favorited)
                }else{
                    alert('리스트 추가 못함')
                }
            })
        }
    }

    return (
        <div>
            <button onClick={onClickFavorite}>{favorited? "Favorite♡": "Favorite❤"} : {favoriteNumber}</button>
        </div>
    )
}

export default Favorite
