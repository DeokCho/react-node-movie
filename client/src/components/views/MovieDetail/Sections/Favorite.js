import React, {useEffect} from 'react'
import axios from 'axios'

const Favorite = () => {

    useEffect (()=>{
        let variables = {
            // userFrom,
            // moveId
        }
        axios.post('/api/favorite/favoriteNumber', variables)
            .then(response=>{
                if(response.data.success){

                }else{
                    alert('좋아요 실패')
                }
            })
    },[])

    return (
        <div>
            <button>Favorite❤</button>
        </div>
    )
}

export default Favorite
