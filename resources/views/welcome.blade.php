<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

        @viteReactRefresh
        @vite('resources/js/app.jsx')
        <title>Laravel + React</title>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
        