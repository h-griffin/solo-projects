#  PORTFOLIO  -  RECENT  WORK  FILTER

## - isotope code in custom.js  - classes in index.html
- website files > html > js > custom.js
    `69 filter: '.initial-filter-class'`

- website files > html > index.html
        <!-- portfolio item -->                       all (.brand .branding)
    `488  <div class="col-md-4 col-sm-6 grid-item brand initial-filter-class">`

https://github.com/metafizzy/isotope
- isotope is a jquery plugin utilized in this template to filter the images shown in these tabs, i have added an initial filter 'initial-filter-class' to each 'portfolio-item' with corresponding class names 'brand' and 'branding' (live cards and paw play) so that these are pre selected as the default filter.

# CONTACT  FORM  SUBMIT

- changed emails in 'form/contact.php' lines 7&10

  website files > html > form > contact.php
```
    6 // an email address that will be in the From field of the email.
    7  $from = '<sender@hermesmelissa.com>'; // @yourDomain.com
    8
    9  // an email address that will receive the email with the output of the form
    10 $sendTo = '<melissahermes99@gmail.com>';
```
- removed text from string before `<email>`
- addressed senders email to your domain `<sender@hermesmelissa.com>`
- changed` <melissahermes99@.com>` to `<melissahermes99@gmail.com>`
- taken from the "don't like forms? send me an email!" section to the left, apologies if it should be addressed to another domain

IMPORTANT -- `'$from'` MUST be addressed from your domain according to the developer/seller
https://themeforest.net/item/bolby-portfoliocvresume-html-template/25767740/comments?term=%24from+%3D+%27%3CANY%40ITMUSTBEYOURDOMAIN.ANY%3E%27%3B&from_buyers_and_authors_only=0&order_by=relevance

- check your site URL and FTP details to ensure cross origins are allowed (sending/posting)


# PHP ISSUE
- netlify does not support PHP (used to send email)
https://pixelswap.fr/entry/deploy-php-websites-as-static-on-netlify#:~:text=Netlify%20is%20an%20awesome%20service,website%20into%20a%20static%20website.
	 - this article gives a script to run on your hosting console to convert your php files to work on netlify

- why you should keep the PHP files
- emailing directly from an HTML web form would reveal the visitor's email address, making the user vulnerable to malicious activities, such as phishing.
- There are a few problems with the mailto: option. For example, it isn't 100% compatible with all browsers, it isn't very user-friendly, and it's impossible to control the formatting of the data when the form is sent by the browser.
https://blog.hubspot.com/marketing/html-form-email
