function validate
{
    let flag =0
    let User=document.getElementById('username').value
    let Pass=document.getElementById('password').value
    if(User=="admin" && Pass=="admin")
        {
           alert("SUCESS");
            flag =1
        }
}        