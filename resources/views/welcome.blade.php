<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Admin</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>
<body class="hold-transition skin-blue fixed sidebar-mini">
<div class="wrapper">
    @include('partials.header')
    @include('partials.sidebar')
    <div class="content-wrapper">
        <div id="root"></div>
    </div>
    @include('partials.footer')
    <div class="control-sidebar-bg"></div>
</div>
<script src="{{asset('js/app.js')}}"></script>
<script src="{{asset('js/all.js')}}"></script>
</body>
</html>
