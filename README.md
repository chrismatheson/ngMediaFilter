ngMediaFilter
=============
An angular filter that uses window.matchMedia to allow filtering data on specific media query matches

##Usage
The filter comes with three **rules** with values taken from [twitter bootstrap](https://github.com/twitter/bootstrap/blob/master/less/responsive-utilities.less)

```javascript
{
  desktop : "(min-width: 979px)",
  tablet : "(min-width: 768px) and (max-width: 979px)"
  phone : "(max-width: 767px)"
}
```

you can now filter with the syntax ``` <defaultVal> | media:<rule>:<value> ```

**example**

```html
<div pagination max-size="20 | media:'phone':5 | media:'tablet':10" num-pages="prospects.Pages" current-page="prospects.Page"></div>
```

##Config

These setting scan be changed by injecting mediaFilterProvider into the config function of your module and 
chaning the mediaFilterProvider.rules with your own rule key value pairs E.G.

```javascript
angular.module('app').config(['mediaFilterProvider', function (mediaFilterProvider) {
  mediaFilterProvider.rules.phone = "(max-width: 500px)";
  mediaFilterProvider.rules.huge: = "(max-width: 1500px)";
}]);
```

