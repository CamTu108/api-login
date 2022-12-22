import { useState } from "react";
import "./SignupForm.css";
import { useHistory } from "react-router-dom";

const SignupForm = () => {
    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [password,setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const history  = useHistory()
    let user = {
        name: String,
        password: String,
        email: String,
        phone: Number,
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password === confirmpassword)
        {
         user = {
            email: email,
            name: name,
            password: password,
            phone: phone,
        };
        fetch('http://localhost:4000/user/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user) 
        })
        .then(res => res.json())
        .then(res => {
            if(res.status === 200)
            {
                alert("Register successfully")
                history.replace('/login')
            }
            else {
                alert(res.message)
                console.log(res.message)
            }
        })        
    }
    else {
        alert("Xac nhan mat khau khong chinh xac!")
        setconfirmpassword('')
    }
    };

    return(

        <section id="wrapper1">
                    <div className="App">
                        <p className="signup"> Đăng Ký </p>
                    <div id="header1" >
                        <form className="info" onSubmit={handleSubmit}>
                            <label> Họ và tên</label>
                            <input type="text" 
                            value={name}
                            id="name" 
                            name="name" 
                            onChange={(e) => setname(e.target.value)}
                            placeholder="Nhập tên của bạn" required/>

                            <label> Email</label>
                            <input type="email" 
                            value={email}
                            id="email" 
                            name="email"
                            onChange={(e) => setemail(e.target.value)}
                            placeholder="Nhập email" required/>

                            <label> Mật khẩu</label>
                            <input type="Password" 
                            value={password}
                            id="Password" 
                            name="Password"
                            onChange={(e) => setpassword(e.target.value)}
                            placeholder="Tạo mật khẩu" required/>

                            <label> Xác nhận mật khẩu</label>
                            <input type="Password" 
                            value={confirmpassword}
                            id="Password" 
                            name="Password"
                            onChange={(e) => setconfirmpassword(e.target.value)}
                            placeholder="Xác nhận lại mật khẩu" required/>

                            <label> Số điện thoại</label>
                            <input type="text" 
                            value={phone}
                            id="Phone" 
                            name="Phone" 
                            onChange={(e) => setphone(e.target.value)}
                            placeholder="Nhập số điện thoại" required/>

                            <button type="submit"> Đăng Ký </button>
                        </form>
                    </div>
                </div>
            
        </section>
    );
}

export default SignupForm;