# html pointer events - bio button

## description
- use pointer events to click a lower level div overlayed by a toplevel div

- `.mobile-description-top { pointer-events: none; }`
- `.mobile-description-bottom { pointer-events: auto; }`

- author bio page title - word break on overflow
	- hypens auto doesnt work in chrome
	- removed width 100 and it fits, longer words will break as normal

- author bio page description - button link nonclickable on mobile
	- columns next to eachotehr on desktop, on mobile right side, second column overlapts the first column, covering the button/link
	- added pointer events to be able to click through lop later dov/column



## images
![screenshot](./screenshot.png)


