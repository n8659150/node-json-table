# json table

Json table is an easy way to preview your json data in table

## Install

Install via bower

```
bower install json-table
```

## Include

You have to include `json-table`, `jquery`, `async`

```
<script src="../bower_components/jquery/jquery.min.js"></script>
<script src="../bower_components/async/lib/async.js"></script>
<script src="../libs/json-table.js"></script>
				                
<script>								                        
        var json_tb = new json_tb('#json_tb','./sample.json');
</script>
```

## Usage


```
var json_tb = new json_tb('#json_tb','sample.json');
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

<table>
        <tr>
            <td>Format</td>

            <td>Valuie</td>

            <td>B Fmt</td>

            <td>VBA Fmt</td>

            <td>Fmt</td>

            <td>Macro</td>
        </tr>

        <tr>
            <td>0</td>

            <td>12345.6789</td>

            <td>General</td>

            <td></td>

            <td></td>

            <td></td>
        </tr>

        <tr>
            <td>1</td>

            <td>12346</td>

            <td>0</td>

            <td>12346</td>

            <td>0</td>

            <td>12346</td>
        </tr>

        <tr>
            <td>2</td>

            <td>12345.68</td>

            <td>0.00</td>

            <td>12345.68</td>

            <td>0.00</td>

            <td>12345.68</td>
        </tr>

        <tr>
            <td>3</td>

            <td>12</td>

            <td>346</td>

            <td>#</td>

            <td>##0</td>

            <td>12</td>
        </tr>

        <tr>
            <td>4</td>

            <td>12</td>

            <td>345.68</td>

            <td>#</td>

            <td>##0.00</td>

            <td>12</td>
        </tr>

        <tr>
            <td>9</td>

            <td>1234568%</td>

            <td>0%</td>

            <td>1234568%</td>

            <td>0%</td>

            <td>1234568%</td>
        </tr>

        <tr>
            <td>10</td>

            <td>1234567.89%</td>

            <td>0.00%</td>

            <td>1234567.89%</td>

            <td>0.00%</td>

            <td>1234567.89%</td>
        </tr>

        <tr>
            <td>11</td>

            <td>1.23E+04</td>

            <td>0.00E+00</td>

            <td>1.23E+04</td>

            <td>0.00E+00</td>

            <td>1.23E+04</td>
        </tr>

        <tr>
            <td>12</td>

            <td>12345 2/3</td>

            <td># ?/?</td>

            <td>12346 ?/?</td>

            <td># ?/?</td>

            <td>12345 2/3</td>
        </tr>

        <tr>
            <td>13</td>

            <td>12345 55/81</td>

            <td># ??/??</td>

            <td>12346 ??/??</td>

            <td># ??/??</td>

            <td>12345 55/81</td>
        </tr>

        <tr>
            <td>* What is this supposed to be?</td>

            <td>14</td>

            <td>10/18/33</td>

            <td>m/d/yy</td>

            <td>10/18/33</td>

            <td>m/d/yy</td>

            <td>10/18/33</td>
        </tr>

        <tr>
            <td>15</td>

            <td>18-Oct-33</td>

            <td>d-mmm-yy</td>

            <td>18-Oct-33</td>

            <td>d-mmm-yy</td>

            <td>18-Oct-33</td>
        </tr>

        <tr>
            <td>16</td>

            <td>18-Oct</td>

            <td>d-mmm</td>

            <td>18-Oct</td>

            <td>d-mmm</td>

            <td>18-Oct</td>
        </tr>

        <tr>
            <td>17</td>

            <td>Oct-33</td>

            <td>mmm-yy</td>

            <td>Oct-33</td>

            <td>mmm-yy</td>

            <td>Oct-33</td>
        </tr>

        <tr>
            <td>18</td>

            <td>4:17 PM</td>

            <td>h:mm AM/PM</td>

            <td>4:17 PM</td>

            <td>h:mm AM/PM</td>

            <td>4:17 PM</td>
        </tr>

        <tr>
            <td>19</td>

            <td>4:17:37 PM</td>

            <td>h:mm:ss AM/PM</td>

            <td>4:17:37 PM</td>

            <td>h:mm:ss AM/PM</td>

            <td>4:17:37 PM</td>
        </tr>

        <tr>
            <td>20</td>

            <td>16:17</td>

            <td>h:mm</td>

            <td>16:17</td>

            <td>h:mm</td>

            <td>16:17</td>
        </tr>

        <tr>
            <td>21</td>

            <td>16:17:37</td>

            <td>h:mm:ss</td>

            <td>16:17:37</td>

            <td>h:mm:ss</td>

            <td>16:17:37</td>
        </tr>

        <tr>
            <td>22</td>

            <td>10/18/33 16:17</td>

            <td>m/d/yy h:mm</td>

            <td>10/18/33 16:17</td>

            <td>m/d/yy h:mm</td>

            <td>10/18/33 16:17</td>
        </tr>

        <tr>
            <td>37</td>

            <td>12</td>

            <td>346</td>

            <td>#</td>

            <td>##0 ;(#</td>

            <td>##0)</td>
        </tr>

        <tr>
            <td>38</td>

            <td>12</td>

            <td>346</td>

            <td>#</td>

            <td>##0 ;[Red](#</td>

            <td>##0)</td>
        </tr>

        <tr>
            <td>39</td>

            <td>12</td>

            <td>345.68</td>

            <td>#</td>

            <td>##0.00;(#</td>

            <td>##0.00)</td>
        </tr>

        <tr>
            <td>40</td>

            <td>12</td>

            <td>345.68</td>

            <td>#</td>

            <td>##0.00;[Red](#</td>

            <td>##0.00)</td>
        </tr>

        <tr>
            <td>45</td>

            <td>17:37</td>

            <td>mm:ss</td>

            <td>10:37</td>

            <td>mm:ss</td>

            <td>17:37</td>
        </tr>

        <tr>
            <td>46</td>

            <td>296296:17:37</td>

            <td>[h]:mm:ss</td>

            <td>:10:37</td>

            <td>[h]:mm:ss</td>

            <td>296296:17:37</td>
        </tr>

        <tr>
            <td>47</td>

            <td>1737.0</td>

            <td>mmss.0</td>

            <td>1037.0</td>

            <td>mmss.0</td>

            <td>1737.0</td>
        </tr>

        <tr>
            <td>48</td>

            <td>12.3E+3</td>

            <td>##0.0E+0</td>

            <td>123.5E+2</td>

            <td>##0.0E+0</td>

            <td>12.3E+3</td>
        </tr>

        <tr>
            <td>49</td>

            <td>12345.6789</td>

            <td>@</td>

            <td>12345.6789</td>

            <td>@</td>

            <td>12345.6789</td>
        </tr>
    </table>

## License

MIT [@chilijung](http://github.com/chilijung)
