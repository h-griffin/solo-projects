
## edits to all
- removed douplicate 2022 from footer copywright 
- tablet: push page content down so its not covered by nav bar
- raise footer text to be centered in grey background
- stacked links on mobile



```
/* center footer links */
.footer .row.footerContainer{
    display: flex;
    justify-content: center;
}

.footer .row.footerContainer .col-2{
    width: fit-content;
}

/* center footer links in background */
.footer .container-fluid{
    margin-top: -17px;
    background-color: #f2f2f5;
    padding: 0;
    width: 105%;
    margin-left: -10px;

}

/* stack links mor mobile */
@media screen and ( max-width: 575px) {
    .footer .row.footerContainer{
        align-items: center;
        flex-direction: column;
    }
}

/* push page content down belwo navbar */
@media (max-width:992px) {
    body[data-layout=horizontal] .page-content {
        margin-top: 70px
    }
}
```



