import userApi from "../api/user";

const SUCCESS = 200;
const FAIL = 500;

const user = {
    create: async ({userName, userDesc, userID, userPW}) => {
        try{
            let apiResult = await userApi.create({
                user_nm: userName,
                user_desc: userDesc,
                user_login_id: userID,
                user_login_pw: userPW
            });

            const {status} = apiResult;
            if(status === SUCCESS){
                return true;
            }
        } catch(e){
            console.log('회원가입 실패');
            return false;
        }
    }
}

export default user;