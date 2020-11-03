 function gettronweb(){
            if(window.tronWeb && window.tronWeb.defaultAddress.base58){
                
                var obj = setInterval(async ()=>{
            if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
                clearInterval(obj)
                var tronweb = window.tronWeb;
                console.log(tronWeb.defaultAddress.base58)
                
                let addr = tronweb.defaultAddress.base58
                let preAddr = addr.slice(0,6)
                let postAddr = addr.slice(-5, addr.length)
                
                document.getElementById('address1').innerText=
                addr;
                document.getElementById('login-btn').innerText= 
                `${preAddr}...${postAddr}`;

                document.getElementById('address').innerHTML =
                `<br><br><center><button onclick="getorders()" style="background-color: #068485;
                    border-radius: 30px; color: white;border-color: #068485; width:140px;
                     height: 40px">Load Pending Orders</button></center>`

                return addr;
           


            } 
             }); } }


