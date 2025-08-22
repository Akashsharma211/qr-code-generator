let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

        function generateQR(){
            if(qrText.value.length > 0){
                qrImg.src = "https://quickchart.io/qr?text=" + qrText.value;
                imgBox.classList.add("show-img");
            } else {
                qrText.classList.add('error');
                setTimeout(()=>{
                    qrText.classList.remove('error');
                },1000);
            }
        }