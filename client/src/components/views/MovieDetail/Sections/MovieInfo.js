import React from 'react'
import { Descriptions } from 'antd';
import 'antd/dist/antd.css';

const MovieInfo = props => {
    let { movie } = props;
    return (
        <div>
            <Descriptions title="Movie Info" bordered>
                <Descriptions.Item label="타이틀">{movie.original_title}</Descriptions.Item>
                <Descriptions.Item label="개봉일">{movie.release_date}</Descriptions.Item>
                <Descriptions.Item label="상영관수">{movie.revenue}</Descriptions.Item>
                <Descriptions.Item label="영화시간">{movie.runtime}분</Descriptions.Item>
                <Descriptions.Item label="평점">
                    {movie.vote_average} / 10.0
                </Descriptions.Item>
                <Descriptions.Item label="투표수">{movie.vote_count}</Descriptions.Item>
                <Descriptions.Item label="상영상태">{movie.status}</Descriptions.Item>
                <Descriptions.Item label="인기도">{movie.popularity}</Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default MovieInfo
