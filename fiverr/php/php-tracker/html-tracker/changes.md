# changes

-  line 67-69 `nav{}`
    - nav position sticky to top:0px

- line 83 `nav .m-menu{}`
    - height:100vh sets height (entire screen height) rather than 100% which will just fit content/cut after last ul item

- line 217-221 `#raceresult_integration{}`
    - this keeps the layer level of the php file lower/under the mobile pull out menu


## tracking additions

- line 357 `#racemap_integration {}`
    - adjusted height of iframe to include subtracting by the nav bar 60px and the tracking stats 42px

- lines 304-306 `#tracking_stats {}`
    - adding position sticky, at top:60px to place below nav bar, z-index places it below the pull out menu
    

- lnie 97 `nav .m-menu__overlay {}`
    - adding height 100vh gives the shadow overlay coverage when manu is open
 

+ line 357 `#racemap_integration {}`
    - shrunk height of iframe to make room on mobile
+ line 357 `#racemap_integration {}`
    - shrunk height of iframe to make room on mobile