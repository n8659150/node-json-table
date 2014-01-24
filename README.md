# json table

Json table is an easy way to preview your json data in table

## Install

Install via npm 

```
npm install json-table
```

## Include

```
var json_tb = require('json-table');
```


## Usage


```
var json_tb_out = new json_tb('sample.json')
console.log(json_tb_out)
```

## Example

Here is a sample json 

```
[{
    
    "Format": "0",
    "Valuie": "12345.6789",
    "B Fmt": "General",
    "VBA Fmt": "",
    "Fmt": "",
    "Macro": ""
}, {
    
    "Format": "1",
    "Valuie": "12346",
    "B Fmt": "0",
    "VBA Fmt": "12346",
    "Fmt": "0",
    "Macro": "12346"
}, {
    
    "Format": "2",
    "Valuie": "12345.68",
    "B Fmt": "0.00",
    "VBA Fmt": "12345.68",
    "Fmt": "0.00",
    "Macro": "12345.68"
}
...
...

]
```

will convert into table like


## License

MIT [@chilijung](http://github.com/chilijung)
