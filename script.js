win = document.getElementById("win");
st = document.getElementById("st");
win.addEventListener("click",()=>{
    if(st.style.bottom < "60px"){
    st.style.bottom="60px";
    }
    else{
        st.style.bottom="-700px";

    }
})