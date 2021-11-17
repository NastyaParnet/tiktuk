import axios from "axios";
import data from "./user-feed.json";

export default class PostService{
    static async getUserPosts(name){
        /*const response = await axios.get(`https://tiktok33.p.rapidapi.com/user/feed/${name}`, {
            headers: {
                'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
                'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66'
            }
        })
        return response.data*/
        //return data.itemList
        const response = await axios.get('https://tiktok33.p.rapidapi.com/trending/feed', {
            headers: {
                'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
                'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66'
            }
        })
        return response.data
    }

    static async getUserInfo(name){
        const response = await axios.get(`https://tiktok33.p.rapidapi.com/user/info/${name}`, {
            headers: {
                'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
                'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66'
            }
        })
        return response.data
    }

    static async getNews(){
        const response = await axios.get('https://tiktok33.p.rapidapi.com/trending/feed', {
            headers: {
                'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
                'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66'
            }
        })
        return response.data
    }
}