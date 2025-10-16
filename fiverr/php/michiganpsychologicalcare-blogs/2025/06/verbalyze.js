


<script>
    // griffincode@fiverr - temp fix while sidemenu plugin is 404
    
    var hamburger = document.getElementById("menu-icon")
    var mobileMenu = document.getElementById("mobile-menu")
    
    console.log(hamburger, mobileMenu)
        
    hamburger.onclick = function() {
        console.log('Button clicked using onclick property!');
    
        if (mobileMenu.style.display === "block") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "block";
        }
    };

</script>



 