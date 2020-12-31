import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ZgB6Ztd-Mnb4ZB6sLUFeE7uB8dN_UXx3uH1t_5vEX5k'
    }
}
);