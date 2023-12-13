<?php
header("Cache-control: no-cache, max-age=0");
header("Expires: 0");
header("Expires: Tue, 01 Jan 1980 1:00:00 GMT");
header("Pragma: no-cache");
?>

<!DOCTYPE html>
<html lang="de-DE">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="SPFtoolbox on IWANTTOOLS.COM is a versatile Javascript and PHP application for querying DNS records, including SPF, MX, Whois, and more, offering comprehensive tools for DNS analysis and management.">
<meta property="og:description" content="SPFtoolbox on IWANTTOOLS.COM provides a user-friendly interface for DNS record lookup, such as SPF, MX, Whois, and beyond, making it a go-to solution for DNS inquiries and utilities.">
<meta name="keywords" content="SPFToolbox, SPF Checker, SPF Record Analyser, DNS Tools, Email Security, Sender Policy Framework, DNS Query, Domain Lookups, SPF Record Testing, MX Records, DNS Blacklist, IP Lookup, Email Server Test, DNS Record Analysis, Open Source DNS Tools, SPF Validation, Domain Information, Network Utilities, PHP DNS Management">
<meta name="author" content="Charles Barnes">

<title>IWANTTOOLS SPFToolbox </title>
<meta name="msapplication-TileColor" content="#44c0f0">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="SPFToolbox">
<meta name="theme-color" content="#44c0f0">
 <script type="text/javascript" src="https://www.googletagmanager.com/gtag/js?id=G-JQJ023G3EF" async=""></script>
    <script type="text/javascript">
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JQJ023G3EF');
    </script>
<link rel="stylesheet" href="libraries/bootstrap/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link href="styles/style.css" rel="stylesheet">
<link href="./assets/header-footer.min.css" rel="stylesheet">

<style data-tag="reset-style-sheet">
        html {
            line-height: 1.15;
        }

        body {
            margin: 0;
        }

        * {
            box-sizing: border-box;
            border-width: 0;
            border-style: solid;
        }

        p,
        li,
        ul,
        pre,
        div,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        figure,
        blockquote,
        figcaption {
            margin: 0;
            padding: 0;
        }

        button {
            background-color: transparent;
        }

        button,
        input,
        optgroup,
        select,
        textarea {
            font-family: inherit;
            font-size: 100%;
            line-height: 1.15;
            margin: 0;
        }

        button,
        select {
            text-transform: none;
        }

        button,
        [type="button"],
        [type="reset"],
        [type="submit"] {
            -webkit-appearance: button;
        }

        button::-moz-focus-inner,
        [type="button"]::-moz-focus-inner,
        [type="reset"]::-moz-focus-inner,
        [type="submit"]::-moz-focus-inner {
            border-style: none;
            padding: 0;
        }

        button:-moz-focus,
        [type="button"]:-moz-focus,
        [type="reset"]:-moz-focus,
        [type="submit"]:-moz-focus {
            outline: 1px dotted ButtonText;
        }

        a {
            color: inherit;
            text-decoration: inherit;
        }

        input {
            padding: 2px 4px;
        }

        img {
            display: block;
        }

        html {
            scroll-behavior: smooth
        }
    </style>
    <style data-tag="default-style-sheet">
        html {
            font-family: Inter;
            font-size: 16px;
        }

        body {
            font-weight: 400;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
            letter-spacing: normal;
            line-height: 1.15;
            color: var(--dl-color-gray-black);
            background-color: var(--dl-color-gray-white);

        }
    </style>

<!-- <style>
        .logo-container {
            position: absolute; /* Absolut positioniert */
            top: 0; /* Oben im Fenster */
            left: 0; /* Links im Fenster */
            background-color: black; /* Schwarzer Hintergrund */
            border-radius: 0 10px 10px 0; /* Abgerundete Ecken nur rechts unten und rechts oben */
            padding: 10px; /* Etwas Abstand um das Logo */
        }

        .logo-container img {
            height: 144px; /* Höhe des Logos */
            display: block; /* Verhindert zusätzlichen Platz unter dem Bild */
        }
    </style> -->

</head>
<body>

<!-- <div class="logo-container">
        <a href="https://iwanttools.com">
            <img src="https://iwanttools.com/public/images/logo_transparent-200h.png" alt="Logo">
        </a>
    </div> -->

    <div id="header" class="home-header">
        <div class="home-container01">
            <header data-role="Header" class="home-header1">
                <div class="home-container02">
                    <img alt="logo" src="assets/images/logo_transparent-200h.png" class="home-image" />
                    <div class="home-nav">
                        <nav class="navigation-links1-nav navigation-links1-root-class-name12">
                            <a href="https://armann-systems.com/kontakt/" class="navigation-links1-link">
                                <span>Kontakt</span>
                            </a>
                            <a href="https://iwanttools.com/#tools" class="navigation-links1-link1">
                                <span>Tools</span>
                            </a>
                            <a href="https://iwanttools.com/#pricing" target="_blank" rel="noreferrer noopener"
                                class="navigation-links1-link2">
                                <span>Pricing</span>
                            </a>
                        </nav>
                    </div>
                </div>
                <div data-role="BurgerMenu" class="home-burger-menu"></div>
                <div data-role="MobileMenu" class="home-mobile-menu">
                    <nav class="home-nav1">
                        <div class="home-container03">
                            <img alt="image"
                                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                                class="home-image1" />
                            <div data-role="CloseMobileMenu" class="home-close-mobile-menu">
                                <svg viewBox="0 0 1024 1024" class="home-icon">
                                    <path
                                        d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <nav class="navigation-links1-nav navigation-links1-root-class-name14">
                            <a href="https://armann-systems.com/kontakt/" class="navigation-links1-link">
                                <span>Kontakt</span>
                            </a>
                            <a href="https://iwanttools.com/#tools" class="navigation-links1-link1">
                                <span>Tools</span>
                            </a>
                            <a href="https://iwanttools.com/#pricing" target="_blank" rel="noreferrer noopener"
                                class="navigation-links1-link2">
                                <span>Pricing</span>
                            </a>
                        </nav>
                    </nav>
                    <div>
                        <svg viewBox="0 0 950.8571428571428 1024" class="home-icon02">
                            <path
                                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z">
                            </path>
                        </svg><svg viewBox="0 0 877.7142857142857 1024" class="home-icon04">
                            <path
                                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z">
                            </path>
                        </svg><svg viewBox="0 0 602.2582857142856 1024" class="home-icon06">
                            <path
                                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z">
                            </path>
                        </svg>
                    </div>
                </div>
            </header>
        </div>
    </div>
    

    <a href="https://github.com/charlesabarnes/SPFtoolbox" class="github-corner" aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#44c0f0; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="#fff" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="#fff" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>
    <div class="container">
        <div class="row" id="top-row">
            <div class="col-md-12">
                <H1 class="logo"><Span class = "logo-style1">SPF</Span>Toolbox</H1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                    <div id="domain-container">
                        <span class="form-label">Domain:&nbsp;</span>
                        <input type="text" name="domain" id="domain" class="form-control">
                        <select onchange="showAdditionalFields()" id="file" class="form-control">
                            <option value="a">IP/Get A Record</option>
                            <option value="aaaa">IPV6/Get AAAA Record</option>
                            <option value="mx">Mx/Get MX Record</option>
                            <option value="txt">SPF/TXT</option>
                            <option value="dmarc">DMARC</option>
                            <option value="blacklist">Blacklist Check</option>
                            <option value="whois">Whois</option>
                            <option value="port">Check If Port Open/Forwarded</option>
                            <option value="hinfo">Hinfo/Get Hardware Information</option>
                            <option value="all">Get All Simple DNS Records</option>
                            <option value="reverseLookup">Host By IP/Reverse Lookup</option>
                        </select>
                    </div>
                    <div style="visibility: hidden" id="port-container">
                        <span class="form-label">Port:&nbsp;</span><input type="text" name="port" id="port" class="form-control">
                    </div>
                    <div id="submit-container">
                        <input type="button" id="submit" value="submit" class="form-control btn"/>
                    </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <span id="txtHint" style="color: red;"></span>
                <div id="loading">
                <div class="info">
                <h3>About SPF Toolbox</h3>
                <span>SPF Toolbox was created to be an easy, free open source way for people to get information about their domain. Please click the link in the top right to let me know if you have any questions or suggestions for the app.</span>
                <br/>
                <br/>
                <br/>
                    <table>
                        <tr>
                            <th>Query</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>IP/Get A Record</td>
                            <td>An A Record is used to associate a domain name with an IP(v4) address. This query checks for the A records set on the domain</td>
                        </tr>
                        <tr>
                            <td>IPV6/Get AAAA Record</td>
                            <td>An AAAA Record is used to associate a domain name with an IP(v6) address. This query checks for the AAAA records set on the domain</td>
                        </tr>
                        <tr>
                            <td>Mx/Get MX Record</td>
                            <td>MX stands for Mail Exchanger.  This query is used to get the mail server used for accepting emails on the specified domain.</td>
                        </tr>
                        <tr>
                            <td>SPF/TXT</td>
                            <td>A SPF Record is used to indicate which email hosts is authorized to send mail on the specified domain's behalf.  This query is used to get the authorized domains</td>
                        </tr>
                        <tr>
                            <td>DMARC</td>
                            <td>A DMARC Record is used to authenticate email From: addresses and defines policies on where to report both authorized and unauthorized mailflow</td>
                        </tr>
                        <tr>
                            <td>Blacklist Check</td>
                            <td>This query is used to check if the specified domain is on any of the most well known email blacklist sites.  If a domain is on a blacklist the row will return a fail result.</td>
                        </tr>
                        <tr>
                            <td>Whois</td>
                            <td>This information gets whois information to see who possibly owns the domain.</td>
                        </tr>
                        <tr>
                            <td>Check If Port Open/Forwarded</td>
                            <td>You are able to Check if a specified port on a domain or IP address is open for use such as hosting</td>
                        </tr>
                        <tr>
                            <td>Hinfo/Get Hardware Information</td>
                            <td>If available, this query gets the hardware information of the server for the specified hostname</td>
                        </tr>
                        <tr>
                            <td>Get All Simple DNS Records</td>
                            <td>This query attemps to do a request for all of the available DNS information for the specified hostname.  This is not always successfull as some providers block the request.</td>
                        </tr>
                        <tr>
                            <td>Host By IP/Reverse Lookup</td>
                            <td>The query attempts to find a hostname associated with an IP address</td>
                        </tr>
                    </table>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div id="responseArea" class="col-md-12">
                    <div  class="responseTable">
                            
                    </div>
                </div>
                <footer>
                    <div class="row text-center">
                        <div class="col-md-12">
                            <p>Created by <a href="https://charlesabarnes.com">Charles Barnes</a> | Contact: <a href="mailto:charles@charlesabarnes.com">charles@charlesabarnes.com</a></p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>        
    </div>

    <div class="home-footer">
        <footer class="home-footer1">
            <a href="https://armann-systems.com" target="_blank" rel="noreferrer noopener" class="home-link06">
                <img alt="image" src="assets/images/logo-as-200h.png" loading="lazy" class="home-image2" />
            </a>
            <div class="home-container35">
                <span class="home-logo">IWANTTOOLS.COM</span>
                <nav>
                    <span class="home-nav2">Tools</span>
                    <a href="https://armann-systems.com/kontakt/" target="_blank" rel="noreferrer noopener"
                        class="home-nav3">
                        Kontakt
                    </a>
                </nav>
            </div>
            <div class="home-separator"></div>
            <div class="home-container36">
                <a href="https://armann.systems" target="_blank" rel="noreferrer noopener" class="home-link07">
                    © 2023 Armann Systems GmbH, All Rights Reserved.
                </a>
                <div class="home-icon-group1">
                    <a href="https://twitter.com/armannsystems" target="_blank" rel="noreferrer noopener"
                        class="home-link08">
                        <svg viewBox="0 0 950.8571428571428 1024" class="home-icon08">
                            <path
                                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z">
                            </path>
                        </svg>
                    </a>
                    <a href="https://instagram.com/armannsystems" target="_blank" rel="noreferrer noopener"
                        class="home-link09">
                        <svg viewBox="0 0 877.7142857142857 1024" class="home-icon10">
                            <path
                                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z">
                            </path>
                        </svg>
                    </a>
                    <a href="https://fb.me/armannsystems" target="_blank" rel="noreferrer noopener"
                        class="home-link10">
                        <svg viewBox="0 0 602.2582857142856 1024" class="home-icon12">
                            <path
                                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    </div>

    <script data-section-id="navbar" src="https://unpkg.com/@teleporthq/teleport-custom-scripts"></script>
    
    <script src="libraries/jquery/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="libraries/popper/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <!-- Latest compiled and minified JavaScript -->
    <script src="libraries/bootstrap/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src ="javascript/main.js"></script>
    
    
</body>
</html>
