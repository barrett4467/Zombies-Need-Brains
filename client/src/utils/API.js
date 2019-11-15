import axios from "axios";

export default {
    createUser: function (userData){
        return axios.post("/api/user", userData);
    },
    findUser: function(userData){
        return axios.get("/api/user/?username="+ userData.username );
    }
};
