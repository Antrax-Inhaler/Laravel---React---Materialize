<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    @vite('resources/css/app.css')
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
    @routes
</head>

<body>
    @inertia
</body>

</html>