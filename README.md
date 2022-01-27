
# Author 
Selam Gessese

# StackSource Software Engineer 
A remotely callable web-based API which can can be used to manage a list of 5 digit zip codes. 
The API supports the following operations:
<pre>
Has - Determines if a zip code exists in the list. 
    GET /:zip

Display - Shows the full list of zip codes with contiguous ranges grouped in a shortened form.
    GET /

Insert - Add a new zip code to the list.
    POST /

Delete - Remove a zip code from the list.
    DELETE /

</pre>
Utilize a service like Postman to send requests to the API
Drag and drop the included file into Postman to open a testing collection for this API

## Installation
Use the node package manager to install stacksource

```bash
npm install
npm start # starts server
npm test # runs tests
```

## License
[MIT](https://choosealicense.com/licenses/mit/)


