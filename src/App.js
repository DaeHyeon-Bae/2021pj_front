import './App.css';
import Button from '@mui/material/Button';
import {TextField} from '@mui/material';
import {useState} from 'react';
import userHandler from './handler/user';

function App() {

  const [userName, setUserName] = useState('');
  const [userDesc, setUserDesc] = useState('');
  const [userID, setUserID] = useState('');
  const [userPW, setUserPW] = useState('');

  const onClickUserRegist = async () =>{
    console.log(userName, userDesc,  userID, userPW);

    if(await userHandler.create({userName,userDesc,userID,userPW})){
      alert("회원가입 성공");
    }else{
      alert("회원가입 실패");
    }
  }

  return (
    <div className='app-container'>
      <div>
        <TextField label="유저 이름"
                   variant="standard"
                   fullWidth
                   value={userName}
                   onChange={(e)=>setUserName(e.target.value)}
                   />
        <TextField label="유저 설명"
                   variant="standard"
                   fullWidth
                   value={userDesc}
                   onChange={(e)=>setUserDesc(e.target.value)}
                   />
        <TextField label="유저 아이디"
                   variant="standard"
                   fullWidth
                   value={userID}
                   onChange={(e)=>setUserID(e.target.value)}
                   />
        <TextField label="유저 패스워드"
                   variant="standard"
                   fullWidth
                   value={userPW}
                   onChange={(e)=>setUserPW(e.target.value)}
                   />
      </div>

      <div>
      <Button variant="contained"
              fullWidth
              onClick={onClickUserRegist}
              >회원가입</Button>
      </div>
      
    </div>
  );
}

export default App;
