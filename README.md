## Map plotter

Static GMap site that adds markers to a map and saves them in memory.

![Screenshot of app](https://user-images.githubusercontent.com/7934833/29927831-61a4000a-8e5f-11e7-9fcb-13e01d35c92d.png)

### Features:
- Submit name, email, description and coordinates.
- Pin plotted on map for each submission.
- On click pin displays name, email, description.
- Hovering over table entry centres map on pin.

### To run locally:

On Mac/Unix OS
```bash
git clone https://github.com/sblausten/GoogleMapPlotter.git
cd GoogleMapPlotter
open index.html 
``` 

On Windows use ```start index.html```

### To run tests:

Open your browser with with CORS disabled 
- on Mac:
```bash
open chrome --allow-file-access-from-files
```
on Windows:
```bash
start chrome --allow-file-access-from-files
```

Navigate to SpecRunner.html in the address bar. 
