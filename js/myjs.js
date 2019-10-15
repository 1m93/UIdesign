
        function background_slideshow(){
	
            function slider(){
            setTimeout(function(){
                document.querySelector('.slide-image').src = "./images/banner4.jpg";
                document.querySelector('.slide-content').innerHTML = "<h2 class='ct-bn-1'>Dị nhân: Ngày cũ của tương lai</h2><p class='ct-bn-2'>Fight or Death</p><p class='ct-bn-3'>Vượt qua nỗi đau để  mạnh mẽ hơn</p>"
            }, 0000);
            //
            setTimeout(function(){
                document.querySelector('.slide-image').src = "./images/banner.jpg";
                document.querySelector('.slide-content').innerHTML = "<h2 class='ct-bn-1'>Căn phòng khóa kín</h2><p class='ct-bn-2'>Escape the room</p><p class='ct-bn-3'>Bộ phim Căn Phòng Khóa Kín kể về người đàn ông lạnh lùng có tài mở khóa kỳ lạ đã ...</p>"
            }, 5000);
            
            //
            setTimeout(function(){
                document.querySelector('.slide-image').src = "./images/banner2.webp";
                document.querySelector('.slide-content').innerHTML = "<h2 class='ct-bn-1'>Tiểu sử chàng Nokdu</h2><p class='ct-bn-2'>Story of love</p><p class='ct-bn-3'>Tiểu Sử Chàng Nokdu xoay quanh chàng trai Jeon Nokdu (Jang Dong Yoon) ...</p>"
            }, 10000);
            };
            slider();
            setInterval(function() { // repeat

                slider();

            }, 15000);
	
        }
	    background_slideshow();