# lines added
## 37-38 + 40
	dataLength + console log
	for loop
```
36
37	var dataLength = Object.keys(data).length;
38	console.log(dataLength, "data length");
39
40     for (var i = 0; i < dataLength; i++) {
41           vendedores += '<tr>';
42
```

this code accesses the size of the entire json response object, then loops over its length to reach each entry


## 44-47-50-53-56-59-62-65
		data values for table
```
43
44 data.ventaVendedores[i].codigoVendedor + '</td>';
45
```

this code accesses the array `ventaVendedores` and the index is set to `[i]`, which will loop with the length of the array. then each `<td>` accesses the specific array values

# lines edited
	76
	progress bar
```
75
76 $(".progress-bar").css({ "width":
""+Math.abs(Math.round(data.porcentajeCumplimientoVenta))+"%"}); //3
77
```
added a class identifier and Math to the CSS modifier

# option tags
- setting the select option values to corresponding date numbers for month and year query, then watching the options on change to update table.

- on update it clears the html body of old content and selects the option values from the selected to use in a template literal to piece together a date string to pass into the url to query db.

# html to json table (for each)
-

# auto scroll
-

# number formatting with string.tolocal
-

# timed refresh

# chart.js
-

